
//console.log(process.env);
//process.stdout.write("enter value: ");
//process.stdin.on("data", (answer)=>{console.log(answer.toString()); process.exit();} );
//console.log(process.version);
console.log(process.cwd());
console.log(__dirname);

require("dotenv").config();
console.log(process.env.DB_PASS);