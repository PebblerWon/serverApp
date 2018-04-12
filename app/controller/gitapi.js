const Controller = require('egg').Controller

class GitapiController extends Controller{
	async test(){
		const {ctx,config} = this
		const {serverUrl,gitToken} = config.gitapi
		const Repo = ctx.model.Repo
		const result = await ctx.curl(`${serverUrl}/search/repositories`,{
			headers:{
				Authorization: `token ${gitToken}`
			},
			dataType:'json',
			data:{
				q:`stars:>1000`,
			}
		});
		ctx.response.body = result
	}
	async query(){
		const {ctx,app,config,service,logger} = this
		const res = await service.gitapi.query()
		ctx.response.body = res
		/*if(res.status==200){
			for(let item in res.items){
				
			}
			ctx.response.body = res
		}else{
			ctx.response.body = []
		}*/
		
		
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