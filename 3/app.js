const {getName,getCube,getQuad, getSquare} = require("./modules/mod1.js");
console.log(getName('samad'));
console.log(getSquare(2));
console.log(getCube(2));


const name = require('./modules/mod1.js').getName('Samad Gh');
console.log(name);


const quad = require('./modules/mod1.js').getQuad;
console.log(quad(2));