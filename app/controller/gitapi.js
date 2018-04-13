const Controller = require('egg').Controller

class GitapiController extends Controller{
	async test(){
		/*const {ctx,config} = this
		const {serverUrl,gitToken} = config.gitapi
		const Repo = ctx.model.Repo
		const result = await ctx.curl(`${serverUrl}/search/repositories?page=20`,{
			headers:{
				Authorization: `token ${gitToken}`
			},
			dataType:'json',
			data:{
				q:`stars:>10000`,
			}
		});
		ctx.response.body = result*/

		const {ctx,app,config,service,logger} = this
		const {page,per_page} = ctx.request.query
		ctx.response.body = await service.gitapi.query(page,per_page)
	}
	async query(){
		const {ctx,app,config,service,logger} = this
		const {page,per_page} = ctx.request.query
		
		ctx.response.body = await service.gitapi.query(page,per_page)
		
	}
	async advancedQuery(){
		ctx.response.body = "advancedQuery"
	}
	async me(){
		const {ctx,app,config,service,logger} = this

		const data = await service.gitapi.me()
		ctx.body = data
	}
}

module.exports = GitapiController