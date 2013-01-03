var rule = [];
var propOne = {name: "time on site", constant: "60", operator: "GT", 	val: "70"};
var propTwo = {name: "new visitor", constant: "0", operator: "EQ", val: "0"};
//var propThree = {name: "pages", constant: "5", operator: "GT", val: "3"};
//var propThree = {name: "pages", constant: "5", operator: "GT", val: "10"};
var boolean = true;
rule.push(propOne);
rule.push(propTwo);
//rule.push(propThree);

var fibOne=0;
var fibTwo =1;
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
	res.write("<html><head></head><body>");
	res.write(adding(fibOne,fibTwo).toString());
	 if(evaluate(rule, function() {})){ 
		res.write("TRUE");
		}
	else{ res.write("FALSE");}
	
	//res.write(propOne.operator);
	//res.write(rule[0].operator);
	res.write("Hello </body> </html>");
res.end();
}).listen(1337, '127.0.0.1');

function adding(num1, num2) {
	total = num1 + num2;
	fibTwo = total;
	fibOne = num2;
	return total;
}

function evaluate(rule, action){
	for(var i = 0; i < rule.length; i++){
		console.log(rule[i].name);
		
	
	switch( rule[i].operator)
	{
		case "EQ": if(rule[i].val != rule[i].constant){boolean = false;}
				break;
		case "GT": if(rule[i].val <= rule[i].constant) {boolean = false;}
				break;
	}
	if(i == rule.length-1) { return boolean;}
}
	
}


//res.write(adding(num1,num2));
console.log('Server running at http://127.0.0.1:1337/');
