const readLine1 = require('readline');
const rl1 = readLine1.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);

let ans1 = num1 + num2;
rl1.question(`What is ${num1} + ${num2}`,(userInput)=>{
    //console.log(userInput);
    if(userInput.trim()==ans1){
        console.log('good!');
        rl1.close();
    }
    else{
        rl1.setPrompt('incorrect01--try again\n');
        rl1.prompt();
        rl1.on('line', (userInput)=>{
            if(userInput.trim()==ans1){
                console.log('good01');
                rl1.close();
            }
            else{
                rl1.setPrompt('still not corect--try again\n');
                rl1.prompt();
            }
        })
    }
});

rl1.on('close', ()=>{
    console.log('\nend of line---')
});
