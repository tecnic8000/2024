const fs = require('fs');
//compress file module zlib
const zlib = require('zlib');

const gunzip = zlib.createGunzip();


const readStream1 = fs.createReadStream('./example2.txt.gz')
const writeStream1 = fs.createWriteStream('uncomressed3.txt');

readStream1.pipe(gunzip).pipe(writeStream1); //compress and write into destination