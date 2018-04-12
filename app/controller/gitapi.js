const Controller = require('egg').Controller

class GitapiController extends Controller{
	async test(){
		const {ctx,app,config,service,logger} = this
		let user = ctx.cookies.get('user')
		
		if(!user)
			ctx.cookies.set('user','whn',{
				encrypt:true,
			})
		ctx.body = user
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