const fs = require('fs');
const lines = fs.readFileSync('source.html', 'utf8').split('\n');
console.log('--- Lines 1425 to 1550 ---');
console.log(lines.slice(1425, 1550).join('\n'));
