const fs = require('fs');
//delete file
fs.unlink('example2.txt', (err)=>{
    if(err) console.log(err)
    else console.log('FILE DELETE--<')
})
