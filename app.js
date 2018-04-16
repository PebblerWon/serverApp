
module.exports = app=>{
	app.beforeStart(async()=>{
		//app.runSchedule('updateReadMe')
	})

	app.messenger.on('myAction',data => {
		console.log(data)
	})
}