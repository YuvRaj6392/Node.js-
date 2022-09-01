// const events=require('events');
// const myEmitter=new events.EventEmitter();
// myEmitter.on('buttonClick',()=>{
//     console.log("the button has been clicked!");
// })


// const events=require("events");
// const myEmitter=new events.EventEmitter();
// const handler1=()=>{
//     console.log("an event has been occurred")
// }
// const handler2=()=>{
//     console.log("second event has been occurred!")
// }
// myEmitter.on('event',handler1);
// myEmitter.on('event',handler2);

// myEmitter.emit('event');

// const events=require("events");
// const myEmitter=new events.EventEmitter();

// myEmitter.on('status',(code,msg)=>console.log(`The status is ${code} and the message is ${message}`));

// myEmitter.emit('status',200,'Accepted')

// events = require('events');
// const myEmitter = new events.EventEmitter();
// myEmitter.on('status', (code, msg) => console.log(`Got ${code} and ${msg}`));
// // Emitting the event with parameters
// myEmitter.emit('status', 200, 'ok');


events = require('events');
const myEmitter = new events.EventEmitter();
myEmitter.once('eventOnce', () =>
 console.log('Node.js')
);
myEmitter.emit('MongoDB');
myEmitter.emit('Express.js');
myEmitter.emit('ReactJS');