const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.js': 'text/javascript; charset=UTF-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.xml': 'application/xml',
    '.json': 'application/json'
};

const server = http.createServer((req, res) => {
    // Normalize URL and remove query strings / anchors
    let reqPath = decodeURI(req.url.split('?')[0].split('#')[0]);

    if (reqPath === '/' || reqPath === '') {
        reqPath = '/index.html';
    }

    // Try several resolution strategies:
    // 1. Direct file
    let filePath = path.join(PUBLIC_DIR, reqPath);

    // 2. If ends with .php, swap to .html
    if (!fs.existsSync(filePath) && reqPath.endsWith('.php')) {
        const htmlAlternative = reqPath.replace(/\.php$/i, '.html');
        const altPath = path.join(PUBLIC_DIR, htmlAlternative);
        if (fs.existsSync(altPath)) {
            filePath = altPath;
        }
    }

    // 3. Extensionless route: e.g. /kaziranga-safari-zones -> /kaziranga-safari-zones.html
    if (!fs.existsSync(filePath)) {
        const withHtml = path.join(PUBLIC_DIR, reqPath + '.html');
        if (fs.existsSync(withHtml)) {
            filePath = withHtml;
        }
    }

    // 4. Try stripping leading directories if e.g. /../about-kaziranga
    if (!fs.existsSync(filePath)) {
        const basename = path.basename(reqPath, path.extname(reqPath));
        const flatCandidate = path.join(PUBLIC_DIR, basename + '.html');
        if (fs.existsSync(flatCandidate)) {
            filePath = flatCandidate;
        }
    }

    // Check if resolved file exists and is a file
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache'
        });
        fs.createReadStream(filePath).pipe(res);
        return;
    }

    // If 404, return a styled Kaziranga 404 response
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>404 - Page Not Found | Kaziranga National Park</title>
            <link rel="stylesheet" href="/assets/css/styles.css">
            <style>
                body { font-family: 'Lato', sans-serif; text-align: center; padding: 80px 20px; background: #f4f6f8; }
                .box { max-width: 600px; margin: auto; background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
                h1 { color: #07552b; font-size: 48px; margin-bottom: 10px; }
                p { color: #555; font-size: 18px; margin-bottom: 25px; }
                a { display: inline-block; background: #07552b; color: #fff; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; }
                a:hover { background: #0a6b38; }
            </style>
        </head>
        <body>
            <div class="box">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The requested route <code>${reqPath}</code> was not found.</p>
                <a href="/">Return to Home</a>
            </div>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server actively routing requests at http://localhost:${PORT}/`);
});
