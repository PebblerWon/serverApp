module.exports = app => {
	console.log(app.config.mongoose)
	if(!app.config.mongoose.client.url || app.config.mongoose.client.url == '') {
		return
	}
	app.beforeStart(async() => {
		app.runSchedule('updateRepo')
	})

	app.messenger.on('myAction', data => {
		console.log(data)
	})
}
