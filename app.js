module.exports = app=>{
	app.beforeStart(async()=>{
		console.log("我要启动了！")
		const ctx = app.createAnonymousContext()
		console.log(ctx.request)
	})
}