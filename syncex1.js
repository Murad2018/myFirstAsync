var fs = require("fs");

var data = fs.readFileSync("input.txt"); 
console.log(data.toString());
console.log("!!!!Read Done");

fs.appendFileSync('input.txt', 'Hello world!!');
data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log('!!!Append Done');

data = fs.readFileSync("input.txt");
fs.readFileSync("input.txt");
console.log(data.toString());
console.log("!!!Reread Done")