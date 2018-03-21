const Service = require('egg').Service
const Config = require('../../config/config.default.js')

class GitapiService extends Service{
	async test(){
		const {serverUrl,gitToken} = this.config.gitapi
		const result = await this.ctx.curl(`${serverUrl}/search/users?q=tom+repos:>42+followers:>1000`,{
			headers:{
				Authorization: `token ${gitToken}`
			},
			dataType:'json'
		});
    	return result.data;
	}

	async me(){
		const {serverUrl,gitToken} = this.config.gitapi
		const result = await this.ctx.curl(`${serverUrl}/user`,{
			headers:{
				Authorization: `token ${gitToken}`
			},
			dataType:'json'
		});
		console.log(result)
    	return result;
	}
}

module.exports = GitapiService