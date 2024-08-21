const fs = require('fs');
//append
fs.appendFile('example2.txt', 'new date appended!', (err)=>{
    if(err)
        console.log(err)
    else{
        console.log('appended01--<')
    }
})
