const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const BASE_URL = 'https://www.kaziranganationalparkonline.in/';
const html = fs.readFileSync(path.join(__dirname, 'source.html'), 'utf8');

// Regex patterns to find assets
const linkRegex = /<link[^>]+href=["']([^"']+)["']/gi;
const scriptRegex = /<script[^>]+src=["']([^"']+)["']/gi;
const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
const bgRegex = /url\(["']?([^"')]+)["']?\)/gi;

const assets = new Set();

let match;
while ((match = linkRegex.exec(html)) !== null) {
    if (!match[1].startsWith('http') || match[1].includes('kaziranganationalparkonline.in')) {
        assets.add(match[1]);
    }
}
while ((match = scriptRegex.exec(html)) !== null) {
    if (!match[1].startsWith('http') || match[1].includes('kaziranganationalparkonline.in')) {
        assets.add(match[1]);
    }
}
while ((match = imgRegex.exec(html)) !== null) {
    if (!match[1].startsWith('http') || match[1].includes('kaziranganationalparkonline.in')) {
        assets.add(match[1]);
    }
}
while ((match = bgRegex.exec(html)) !== null) {
    if (!match[1].startsWith('http') || match[1].includes('kaziranganationalparkonline.in')) {
        assets.add(match[1]);
    }
}

console.log(`Found ${assets.size} unique assets to check.`);
console.log(Array.from(assets));
