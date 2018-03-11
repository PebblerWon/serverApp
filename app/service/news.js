const Service = require('egg').Service

class NewsService extends Service{
	async list(page = 1){
		const {serverUrl,q,type} = this.config.news

		const data = await this.ctx.curl(`${serverUrl}`,{
			data:{
				q:`"${q}"`,
				type:`"${type}"`
			},
			dataType:'text'
		})

		return data
	}
}

module.exports = NewsService