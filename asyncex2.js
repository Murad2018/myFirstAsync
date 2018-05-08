var fs =require("fs");

fs.readFile('input.txt',function(err, data){
	if(err)return console.error(err);   
console.log(data.toString());
console.log("!!!Read Done");
});



fs.appendFile('input.txt', 'Hello world!!', (err) => {
  if (err) throw err;
  console.log(data.toString()); 
  console.log('!!!Append Done');

});


fs.readFile('input.txt',function(err, data){
	if(err)return console.error(err);   
console.log(data.toString());
console.log("Reread Done");
});
