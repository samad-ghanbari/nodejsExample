// os
const os = require("os");
console.log(os.platform());
const {platform} = os; // >> to get the function
console.log(platform());
const myPlatform = platform();
const {exec} = require("child_process"); // get the exec function . exec to run command in host(shell)
const args = process.argv.slice(2); // in array ["abc"]
console.log(args);
const [url] = args; // url is the content of the array  >> "abc"
console.log(url);

const WINDOWS_PLATFORM = "win32";
const Linux_PLATFORM = "linux";


if(url === undefined)
{
    console.log("enter the url: ...");
    process.exit();
}

if(myPlatform === WINDOWS_PLATFORM)
{
    exec(`start chrome ${url}`);
}
else if(myPlatform === Linux_PLATFORM)
{
    exec(`firefox ${url}`);
}