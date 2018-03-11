const Service = require('egg').Service
const cheerio = require('cheerio')

class GitapiService extends Service{
	async test(){
		const {serverUrl} = this.config.gitapi
		const result = await this.ctx.curl(`${serverUrl}?q=stars%3A>1000&type=`,{
			dataType:'text'
		});
		const $ = cheerio.load(result.data)
		let a = $('ul.repo-list>div.repo-list-item>div>h3>a')['0']
		console.log(a)
    	return a;
	}
}

module.exports = GitapiService