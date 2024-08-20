const EventEmitter =  require('events');
const EventEmitter1 = new EventEmitter();
EventEmitter1.on('tut1', () => {
    console.log('connected01!')
});

EventEmitter1.emit('tut1');

class person extends EventEmitter {
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let tec01 = new person('nameTEC01');
let tec02 = new person('testName02');
tec02.on('name', ()=>{
    console.log('####--' + tec02.name);
})
tec01.on('name', () =>{
    console.log('output----' + tec01.name);
});

tec01.emit('name');
tec02.emit('name');