const Service = require('egg').Service
const Config = require('../../config/config.default.js')

class GitapiService extends Service{
	async query(){
		try{
			const {ctx,config} = this
			const {serverUrl,gitToken} = config.gitapi
			const Repo = ctx.model.Repo
			let result = await Repo.find()
			console.log(result)
	    	return result;
		}catch(err){
			this.logger.error(err)
			return {}
		}
		
	}

	async me(){
		const {ctx,config} = this
		const {serverUrl,gitToken} = config.gitapi
		const result = await ctx.curl(`${serverUrl}/user`,{
			headers:{
				Authorization: `token ${gitToken}`
			},
			dataType:'json'
		});
		//console.log(result)
		result.data['whn'] = ctx
    	return result;
	}
}

module.exports = GitapiService