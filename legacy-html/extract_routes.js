const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const matches = [...html.matchAll(/href=["']([^"'#]+)["']/gi)];
const links = new Set();
for (const m of matches) {
    const h = m[1].trim();
    if (!h.startsWith('tel:') && !h.startsWith('mailto:') && !h.startsWith('http') && !h.endsWith('.css') && !h.endsWith('.png') && !h.endsWith('.jpg')) {
        links.add(h);
    }
}
console.log('Unique internal routes found:', links.size);
console.log([...links]);
