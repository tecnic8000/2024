const fs = require('fs');

const readStream1 = fs.createReadStream('./example.txt', 'utf8');
const writeStream1 = fs.createWriteStream('example2.txt');
readStream1.on('data', (chunk)=>{writeStream1.write(chunk);})

