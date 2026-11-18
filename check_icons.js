const fs = require('fs');
const html = fs.readFileSync('source.html', 'utf8');

const classMatches = [...html.matchAll(/class=["']([^"']+)["']/gi)];
const iconClasses = new Set();
for (const m of classMatches) {
    const classes = m[1].split(/\s+/);
    for (const c of classes) {
        if (c.startsWith('fa-') || c.startsWith('ti-') || c.startsWith('icofont-') || c.startsWith('fa') || c === 'fas' || c === 'far' || c === 'fab') {
            iconClasses.add(c);
        }
    }
}
console.log('Icon classes found:', Array.from(iconClasses));
