const Service = require('egg').Service

class GitapiService extends Service{
	async test(){
		const {serverUrl} = this.config
		const result = await this.ctx.curl(`${serverUrl}`,{
			headers:{
				Accept: 'application/vnd.github.v3+json'
			}
			dataType:'text',
			gzip:true
		});
    	return result.data;
	}
}

module.exports = GitapiService