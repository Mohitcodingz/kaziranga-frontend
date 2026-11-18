const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

let totalReplacements = 0;

for (const file of files) {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace ../something.php, ./something.php, something.php with something.html
    const updated = content.replace(/(href=["'])(?:\.\.\/|\.\/)?([^"'#?]+)\.php([#?][^"']*)?(["'])/gi, (match, p1, p2, p3, p4) => {
        let page = p2.trim();
        totalReplacements++;
        if (page === '' || page === 'index') {
            return `${p1}index.html${p3 || ''}${p4}`;
        }
        return `${p1}${page}.html${p3 || ''}${p4}`;
    }).replace(/(action=["'])(?:\.\.\/|\.\/)?([^"'#?]+)\.php([#?][^"']*)?(["'])/gi, (match, p1, p2, p3, p4) => {
        totalReplacements++;
        return `${p1}${p2}.html${p3 || ''}${p4}`;
    });

    if (content !== updated) {
        fs.writeFileSync(filePath, updated, 'utf8');
        console.log(`Updated links in ${file}`);
    }
}

console.log(`Finished auditing all HTML files. Total link adjustments: ${totalReplacements}`);
