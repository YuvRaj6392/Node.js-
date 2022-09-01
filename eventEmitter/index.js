// const events=require('events');
// const myEmitter=new events.EventEmitter();
// myEmitter.on('buttonClick',()=>{
//     console.log("the button has been clicked!");
// })

// myEmitter.emit('buttonClick');

const events=require("events");
const myEmitter=new events.EventEmitter();

myEmitter.on('play',(songName)=>console.log(`playing ${songName}` ));
myEmitter.on('stop',(sonName)=>console.log(`stopped playing ${sonName}`));
myEmitter.emit('play',"Bohemian Rhapsody")
myEmitter.emit('stop',"kesariya")