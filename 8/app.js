// os
const os = require("os");
console.log( os.EOL ); // end of line

console.log( os.arch() ); //CPU architecture

console.log( os.cpus() ); //Returns an array of objects containing information about each logical CPU core.
const cpus = os.cpus();
const num = (Array.isArray(cpus))? cpus.length : null;
console.log(num); // cpu cores
console.log(os.loadavg() + " LOAD AVG"); //Returns an array containing the 1, 5, and 15 minute CPU load averages.

console.log(os.freemem());
console.log(Math.round(os.freemem()/1024/1024/1024));

console.log(os.platform + " PLATFORM");
console.log(process.platform);

console.log("--- NIC ---");
console.log(os.networkInterfaces());

console.log(os.release());//operating system release
console.log(os.totalmem());

console.log(os.uptime()/3600); // on hour

console.log(os.version());
console.log(os.type()); // oprtating system