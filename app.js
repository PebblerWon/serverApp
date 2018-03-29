
module.exports = app=>{
	app.beforeStart(async()=>{
		console.log("我要启动了！")
	})

	app.messenger.on('myAction',data => {
		console.log(data)
	})
}