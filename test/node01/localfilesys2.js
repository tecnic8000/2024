const fs = require('fs');
//rename
fs.rename('example.txt', 'example2.txt', (err)=>{
    if(err)
        console.log(err);
    else
        console.log('successfully rename 02')
})