const Controller = require('egg').Controller

class GitapiController extends Controller{
	async test(){
		const data = await this.ctx.service.gitapi.test()
		this.ctx.body = data
	}
}

module.exports = GitapiController