//readFile
//readFileSync

const fs = require('fs');
//readFile
//asynchronous
fs.readFile('./test.text', 'utf-8', (error, txt)=>{
    if(error) console.log(error);
    else console.log("(4): "+txt); // 4
});

console.log("(1): end of readFile"); // 1

// readFileSync
//synchronous
let txt = fs.readFileSync('./test.text', 'utf-8');
console.log("(2): "+txt); // 2

console.log('(3): end of readFileSync'); // 3