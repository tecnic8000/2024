const fs = require('fs');
//stream uses smaller buffer to read large files ~1GB
const readStream1 = fs.createReadStream('./example.txt', 'utf8');