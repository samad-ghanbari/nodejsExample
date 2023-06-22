// event
const Event = require("events");
const myEvent = new Event();
myEvent.on("samad", function(a,b,c){console.log(a+b+c)});
myEvent.emit("samad", 1, 2, 3);

console.log("_____");

const myE = new Event;
// multiple listener

myE.on('samad', function(){console.log("123");});
myE.on('samad', ()=>{console.log("456");});
myE.on('samad', function(){console.log("789")});

myE.emit("samad");
myE.emit("gh"); //  no error

console.log("_____");

//myE.emit('error'); // generates error unhandled error
                    // if we write lisener it will only returns the listener function

myE.once("hi", ()=>{console.log('hi-1')});
myE.once("hi", ()=>{console.log('hi-2')});
myE.on("hi", ()=>{console.log('hi-3')});

myE.emit('hi');
myE.emit('hi');
myE.emit('hi');
myE.emit('hi');

