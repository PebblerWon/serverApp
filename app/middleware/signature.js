const isJSON = require('koa-is-json')
const zlib = require('zlib')

//中间件好像只在respnse的时候调用
module.exports = (options,app)=>{
	return async function(ctx,next){
		console.log('gzip被调用了')
		await next()

		ctx.body += " from whn "
	}
}