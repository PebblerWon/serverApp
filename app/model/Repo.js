/*var mongoose = require('mongoose')

mongoose.connect('mongodb://39.106.44.8/gitRepo')

const repoSchema = mongoose.Schema({
	id:String,
	name:String,
	full_name:String,
	html_url:String,
	description:String,
	language:String,
	stargazers_count:Number,
})
const Repo = mongoose.model('Repo',repoSchema)

let item1 = new Repo({
	id:'0001',
	name:'test',
	full_name:'test',
	html_url:'https://pebbler.wang',
	description:'test',
	language:'JavaScript',
	stargazers_count:1000000,
})

item1.save((err)=>{
	console.log(err)
})*/

const MongoClient = require('mongodb').MongoClient
const url = "mongodb://39.106.44.8/gitRepo"

MongoClient.connect(url,(err,db)=>{
	if(err) console.log(err)
	console.log('db has connected')
	db.close()
})