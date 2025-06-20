import fs from 'fs';

const data = fs.readFileSync('file.txt', 'utf8');
console.log('File content:', data);

