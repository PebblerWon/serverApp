var express = require('express')
var app = express()

let first = (size, ...args) => [...args].slice(0, size);
console.log(first(2,1,2,3))
test()
app.get('/',function(req,res){
	res.send('Hello World')
})

var server = app.listen(80,function(){
	var host = server.address().address
	var port = server.address().port
	console.log('Example app listening at htth://%s:%s',host,port)
})

async function test(){
	for(var i = 0;i<5;i++){
		await delay()
		console.log(i)
	}
}

function delay(){
	var promise = new Promise((resolve,reject)=>{
		setTimeout(function(){
			resolve(true)
		},2000)
	})
	return promise
}
exports.area = (r)=>3.14*r**2
module.exports = delay
