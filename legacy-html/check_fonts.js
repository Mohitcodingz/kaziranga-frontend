const fs = require('fs');
const css = fs.readFileSync('assets/css/plugins.css', 'utf8');

const fontFaceMatches = [...css.matchAll(/@font-face\s*\{[^}]+\}/gi)];
console.log('Font-face count in plugins.css:', fontFaceMatches.length);
fontFaceMatches.forEach(m => console.log(m[0].slice(0, 150) + '...'));
