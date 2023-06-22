const message = require('./modules/mod1.js');

console.log("Hello World");
console.log(message.msg);
message.msg.forEach(m => console.log(m));
