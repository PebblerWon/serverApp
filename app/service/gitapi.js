const Service = require('egg').Service
const Config = require('../../config/config.default.js')

class GitapiService extends Service{
	async query(){
		const {ctx,config} = this
		const {serverUrl,gitToken} = config.gitapi
		const language = ctx.params.language
		const result = await ctx.curl(`${serverUrl}/search/repositories`,{
			headers:{
				Authorization: `token ${gitToken}`
			},
			dataType:'json',
			data:{
				//q:`language:${language} stars:>1000`,
				q:`language:${language}`,
				sort:'stars'
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