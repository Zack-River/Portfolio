const fs = require('fs');
let lines = fs.readFileSync('components/Scene3D.tsx', 'utf8').split('\n');
// Delete lines 268 to 1342 (indices 267 to 1341)
lines.splice(267, 1342 - 268 + 1);
fs.writeFileSync('components/Scene3D.tsx', lines.join('\n'));
console.log('Deleted lines');
