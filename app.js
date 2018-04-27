module.exports = app=>{
	if(app.config.mongoose.client.url==''){
		console.log('数据库连接字符串为空')
		return
	}
	app.beforeStart(async()=>{


		app.runSchedule('updateRepo')
	})

	app.messenger.on('myAction',data => {
		console.log(data)
	})
}
