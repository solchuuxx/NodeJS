const fs = require('fs');

const poema = fs.readFileSync('poema.txt', 'utf-8');
//console.log(poema);

const poemaModified = poema.replace(/Node.js/ig, 'NodeJS');

fs.writeFileSync('poema-copy.txt', poemaModified)