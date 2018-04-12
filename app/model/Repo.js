module.exports = app=>{
	const mongoose = app.mongoose
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

	return Repo

}
