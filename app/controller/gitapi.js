const Controller = require('egg').Controller

class GitapiController extends Controller{
	async test(){
		/*const {ctx,config} = this
		const {serverUrl,gitToken} = config.gitapi
		const Repo = ctx.model.Repo
		const result = await ctx.curl(`${serverUrl}/search/repositories`,{
			headers:{
				Authorization: `token ${gitToken}`
			},
			dataType:'json',
			data:{
				q:`stars:>10000 language:''`,
				sort:'stars'
			}
		});*/
		/*let a =  await Repo.find().sort({stargazers_count:-1})
		ctx.response.body = a.length*/
		const {ctx,app,config,service,logger} = this
		const {language,page,per_page} = ctx.request.query
		ctx.response.body = await service.gitapi.advancedQuery(language,page,per_page)
	}
	async query(){
		const {ctx,app,config,service,logger} = this
		const {page,per_page} = ctx.request.query
		
		ctx.response.body = await service.gitapi.query(page,per_page)
		
	}
	async readme(){
		const {ctx,app,config,service,logger} = this
		const {id} = ctx.request.query
		
		ctx.response.body = await service.gitapi.readme(id)
	}
	async advancedQuery(){
		const {ctx,app,config,service,logger} = this
		const {language,page,per_page} = ctx.request.query

		ctx.response.body = await service.gitapi.advancedQuery(language,page,per_page)
	}
	async me(){
		const {ctx,app,config,service,logger} = this

		const data = await service.gitapi.me()
		ctx.body = data
	}
}

module.exports = GitapiController