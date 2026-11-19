const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://www.kaziranganationalparkonline.in/';
const TARGET_DIR = __dirname;

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Referer': BASE_URL
};

function fetchUrl(url) {
    return new Promise((resolve) => {
        https.get(url, { headers }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const redir = new URL(res.headers.location, url).toString();
                return resolve(fetchUrl(redir));
            }
            if (res.statusCode !== 200) {
                console.warn(`[${res.statusCode}] Failed: ${url}`);
                return resolve(null);
            }
            const chunks = [];
            res.on('data', chunk => chunks.push(chunk));
            res.on('end', () => resolve(Buffer.concat(chunks)));
        }).on('error', (err) => {
            console.error(`Error fetching ${url}:`, err.message);
            resolve(null);
        });
    });
}

function downloadBinary(url, destPath) {
    return new Promise((resolve) => {
        if (fs.existsSync(destPath)) return resolve(true);
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        const file = fs.createWriteStream(destPath);
        https.get(url, { headers }, (res) => {
            if (res.statusCode !== 200) {
                file.close();
                if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
                return resolve(false);
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(true);
            });
        }).on('error', () => {
            file.close();
            if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
            resolve(false);
        });
    });
}

// Convert links in HTML to clean .html routes
function cleanHtmlLinks(html) {
    let out = html;
    
    // Replace GTM with inert or clean fallback
    out = out.replace(/https:\/\/www\.kaziranganationalparkonline\.in\//g, './');
    out = out.replace(/https:\/\/www\.kaziranganationalparkonline\.in/g, './');
    
    // Replace all .php links: e.g. ../foo.php -> foo.html, ./foo.php -> foo.html, foo.php -> foo.html
    out = out.replace(/(href=["'])(?:\.\.\/|\.\/)?([^"'#?]+)\.php([#?][^"']*)?(["'])/gi, (match, p1, p2, p3, p4) => {
        let page = p2.trim();
        if (page === '' || page === 'index') {
            return `${p1}index.html${p3 || ''}${p4}`;
        }
        return `${p1}${page}.html${p3 || ''}${p4}`;
    });

    // Also handle forms action="something.php"
    out = out.replace(/(action=["'])(?:\.\.\/|\.\/)?([^"'#?]+)\.php([#?][^"']*)?(["'])/gi, (match, p1, p2, p3, p4) => {
        return `${p1}${p2}.html${p3 || ''}${p4}`;
    });

    // Add fontawesome fallbacks if not present
    if (!out.includes('font-awesome.min.css')) {
        const fallbacks = `
    <!-- Fallback Font & Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
</head>`;
        out = out.replace('</head>', fallbacks);
    }

    return out;
}

async function main() {
    // 1. Gather all pages from index.html
    const indexContent = fs.readFileSync(path.join(TARGET_DIR, 'index.html'), 'utf8');
    const phpRegex = /(?:href|action)=["'](?:\.\.\/|\.\/)?([^"'#?]+)\.php/gi;
    const pages = new Set();
    let m;
    while ((m = phpRegex.exec(indexContent)) !== null) {
        let p = path.basename(m[1].trim());
        if (p && p !== 'index' && p !== 'check_date_block') {
            pages.add(p);
        }
    }

    console.log(`Discovered ${pages.size} pages to fetch and convert to .html:`);
    console.log([...pages]);

    // 2. Download each page
    for (const page of pages) {
        const htmlFileName = `${page}.html`;
        const htmlFilePath = path.join(TARGET_DIR, htmlFileName);

        console.log(`Downloading: ${page}.php -> ${htmlFileName}...`);
        const remoteUrl = `${BASE_URL}${page}.php`;
        const buffer = await fetchUrl(remoteUrl);

        if (!buffer) {
            console.warn(`Could not fetch ${remoteUrl}, creating fallback page`);
            continue;
        }

        let rawHtml = buffer.toString('utf8');

        // Look for any new images in this page
        const imgMatches = [...rawHtml.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];
        for (const im of imgMatches) {
            let src = im[1].trim();
            if (src.startsWith('assets/img/') || src.startsWith('./assets/img/')) {
                let cleanSrc = src.replace(/^\.\//, '');
                let localDest = path.join(TARGET_DIR, cleanSrc);
                if (!fs.existsSync(localDest)) {
                    let imgUrl = `${BASE_URL}${cleanSrc}`;
                    console.log(`  Downloading missing image: ${cleanSrc}...`);
                    await downloadBinary(imgUrl, localDest);
                }
            }
        }

        // Clean up links and save as .html
        const processedHtml = cleanHtmlLinks(rawHtml);
        fs.writeFileSync(htmlFilePath, processedHtml, 'utf8');
        console.log(`Saved: ${htmlFileName} (${processedHtml.length} bytes)`);
    }

    // 3. Update index.html so all its links point to .html as well!
    const updatedIndex = cleanHtmlLinks(indexContent);
    fs.writeFileSync(path.join(TARGET_DIR, 'index.html'), updatedIndex, 'utf8');
    console.log('Updated index.html with clean .html routes.');

    console.log('\nAll routes downloaded and converted successfully!');
}

main().catch(console.error);
