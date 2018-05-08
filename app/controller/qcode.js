const Controller = require('egg').Controller

class QcodeController extends Controller{
	async test(){
		const {ctx,app,config,service,logger} = this
		const {a,b} = ctx.request.query
		
		ctx.response.body = a*b
	}
}

module.exports = QcodeController