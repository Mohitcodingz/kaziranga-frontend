const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://www.kaziranganationalparkonline.in/';
const TARGET_DIR = __dirname;

const downloaded = new Set();
const toDownload = new Set();

function downloadFile(relPath) {
    return new Promise((resolve, reject) => {
        // Clean relPath
        let cleanPath = relPath.trim().replace(/^['"]|['"]$/g, '');
        if (cleanPath.startsWith('//')) {
            cleanPath = 'https:' + cleanPath;
        }
        
        let url;
        let localRelPath;
        if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
            try {
                const parsedUrl = new URL(cleanPath);
                if (parsedUrl.hostname.includes('kaziranganationalparkonline.in')) {
                    url = cleanPath;
                    localRelPath = parsedUrl.pathname.replace(/^\/+/, '');
                } else {
                    return resolve(null);
                }
            } catch (e) {
                return resolve(null);
            }
        } else {
            url = new URL(cleanPath, BASE_URL).toString();
            localRelPath = cleanPath.split('?')[0].split('#')[0].replace(/^\/+/, '');
        }

        if (!localRelPath || localRelPath === '' || downloaded.has(localRelPath)) {
            return resolve(null);
        }
        downloaded.add(localRelPath);

        const dest = path.join(TARGET_DIR, localRelPath);
        fs.mkdirSync(path.dirname(dest), { recursive: true });

        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': '*/*',
                'Referer': BASE_URL
            }
        };

        const fileStream = fs.createWriteStream(dest);

        const req = https.get(url, options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                // Handle redirect
                fileStream.close();
                fs.unlinkSync(dest);
                const redirectUrl = new URL(res.headers.location, url).toString();
                console.log(`Redirecting: ${url} -> ${redirectUrl}`);
                // Download from redirect
                return resolve(downloadFile(redirectUrl));
            }

            if (res.statusCode !== 200) {
                fileStream.close();
                fs.unlinkSync(dest);
                console.warn(`Failed: ${url} (Status: ${res.statusCode})`);
                return resolve(null);
            }

            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${localRelPath}`);
                resolve(dest);
            });
        });

        req.on('error', (err) => {
            fileStream.close();
            if (fs.existsSync(dest)) fs.unlinkSync(dest);
            console.error(`Error downloading ${url}:`, err.message);
            resolve(null);
        });
    });
}

async function extractUrlsFromCSS(cssFilePath, cssRelDir) {
    if (!fs.existsSync(cssFilePath)) return;
    const content = fs.readFileSync(cssFilePath, 'utf8');
    const urlRegex = /url\(\s*['"]?([^'")]+)['"]?\s*\)/gi;
    let match;
    const found = [];
    while ((match = urlRegex.exec(content)) !== null) {
        let u = match[1].trim();
        if (u.startsWith('data:')) continue;
        u = u.split('?')[0].split('#')[0];
        // resolve relative to CSS file directory
        const resolved = path.posix.normalize(path.posix.join(cssRelDir, u));
        found.push(resolved);
    }
    return found;
}

async function main() {
    const html = fs.readFileSync(path.join(__dirname, 'source.html'), 'utf8');

    // Extract all resources
    const patterns = [
        /<link[^>]+href=["']([^"']+)["']/gi,
        /<script[^>]+src=["']([^"']+)["']/gi,
        /<img[^>]+src=["']([^"']+)["']/gi,
        /data-src=["']([^"']+)["']/gi,
        /data-bg=["']([^"']+)["']/gi,
        /background(-image)?:\s*url\(['"]?([^"')]+)['"]?\)/gi
    ];

    for (const pat of patterns) {
        let match;
        while ((match = pat.exec(html)) !== null) {
            let u = (match[2] || match[1]).trim();
            if (!u.startsWith('data:') && !u.startsWith('#') && !u.startsWith('tel:') && !u.startsWith('mailto:')) {
                toDownload.add(u);
            }
        }
    }

    console.log(`Starting initial download of ${toDownload.size} resources...`);
    const cssFiles = [];
    for (const res of toDownload) {
        const savedPath = await downloadFile(res);
        if (savedPath && savedPath.endsWith('.css')) {
            const relDir = path.dirname(res);
            cssFiles.push({ path: savedPath, relDir });
        }
    }

    console.log(`\nScanning ${cssFiles.length} CSS files for fonts and background images...`);
    for (const item of cssFiles) {
        const nested = await extractUrlsFromCSS(item.path, item.relDir);
        if (nested) {
            for (const n of nested) {
                await downloadFile(n);
            }
        }
    }

    console.log(`\nAll done! Total downloaded assets: ${downloaded.size}`);
}

main().catch(console.error);
