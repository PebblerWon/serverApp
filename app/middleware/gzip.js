const isJSON = require('koa-is-json')
const zlib = require('zlib')

//中间件好像只在respnse的时候调用
module.exports = options=>{
	return async function(ctx,next){
		console.log('gzip被调用了')
		await next()

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