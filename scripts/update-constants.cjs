const fs = require('fs');
const path = require('path');

const constantsPath = path.resolve(__dirname, '../constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const regex = /image:\s*"(.*?)"/g;

content = content.replace(regex, (match, imagePath) => {
  if (imagePath.startsWith('/clients/')) return match;
  
  const flatName = imagePath
      .replace(/^\/projects\//, '')
      .replace(/\//g, '-')
      .replace(/\.webp$/, '') + '-thumb.webp';
      
  const thumbPath = `/projects/thumbnails/${flatName}`;
  
  return `${match},\n    thumbImage: "${thumbPath}"`;
});

fs.writeFileSync(constantsPath, content);
console.log('Updated constants.ts with thumbImage fields');
