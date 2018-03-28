const isJSON = require('koa-is-json')
const zlib = require('zlib')

// options 代表中间件的配置项，在config里面指定
// app 代表 Application 实例
module.exports = (options,app)=>{
	return async function(ctx,next){
		console.log(ctx.request)
		await next()
		console.log(ctx.response)
		
		let body = ctx.body
		if(!body) return
		if(options.threshold && ctx.length < options.threshold) return

		if(isJSON(body)) body = JSON.stringify(body)

		const stream = zlib.createGzip()
		stream.end(body)
		ctx.body = stream
		ctx.set('Content-Encoding','gzip')
	}
}