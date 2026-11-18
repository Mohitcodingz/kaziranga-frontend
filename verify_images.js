const fs = require('fs');
const html = fs.readFileSync('source.html', 'utf8');
const matches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];
let missing = 0;
for (const m of matches) {
    const src = m[1].split('?')[0];
    if (!fs.existsSync(src)) {
        console.log('Missing image:', src);
        missing++;
    }
}
console.log('Total checked:', matches.length, 'Missing:', missing);
