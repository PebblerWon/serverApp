const Service = require('egg').Service
const Config = require('../../config/config.default.js')

class GitapiService extends Service{
	async query(){
		const {ctx,config} = this
		const {serverUrl,gitToken} = config.gitapi
		const result = await ctx.curl(`${serverUrl}/search/repositories`,{
			headers:{
				Authorization: `token ${gitToken}`
			},
			dataType:'json',
			data:{
				q:'stars:>1000'
			}
		});

    	return result.data;
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