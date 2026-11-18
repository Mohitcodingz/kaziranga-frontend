const fs = require('fs');
const html = fs.readFileSync('source.html', 'utf8');

// List section IDs or main structural tags
const sectionMatches = [...html.matchAll(/<section[^>]*>/gi)];
console.log('Sections found:');
sectionMatches.forEach(m => console.log(m[0]));

// Check modals
const modalMatches = [...html.matchAll(/class=["'][^"']*modal[^"']*["']/gi)];
console.log('Modals found:', modalMatches.length);

// Check form actions
const formMatches = [...html.matchAll(/<form[^>]*>/gi)];
console.log('Forms found:');
formMatches.forEach(m => console.log(m[0]));
