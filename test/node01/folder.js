const fs = require('fs')
//make folder
/*fs.mkdir('createFolder01', (err)=>{
    if(err) console.log(err)
    else{
        fs.writeFile('./createFolder01/example5.txt','data1234',(err)=>{
            if(err) console.log(err)
            else console.log('File created within! ---- <')
        })
        console.log('FOLDER CREATED ---<<')
    } 
        
})*/

//delete empty folder
//fs.rmdir('createFolder01', (err)=>{if(err) console.log(err); else console.log('FDELETE01')})


//delete non-empty folder
fs.readdir('createFolder01', (err,files)=>{
    if(err) console.log(err)
    else 
        for (let file of files){
            fs.unlink('./createFolder01/'+file, (err)=>{if(err)console.log(err); else console.log('all files deleted01 --<')})
        }
        fs.rmdir('createFolder01', (err)=>{if(err) console.log(err); else console.log('FDELETE01')})
})