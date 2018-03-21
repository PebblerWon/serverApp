const Service = require('egg').Service
<<<<<<< HEAD
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
=======
const cheerio = require('cheerio')

class GitapiService extends Service{
	async test(){
		const {serverUrl} = this.config.gitapi
		const result = await this.ctx.curl(`${serverUrl}?q=stars%3A>1000&type=`,{
			dataType:'text'
>>>>>>> 253f930021203b651244ac7a0f7b8f76a8840e76
		});
		const $ = cheerio.load(result.data)
		let a = $('ul.repo-list>div.repo-list-item>div>h3>a')['0']
		console.log(a)
    	return a;
	}
}

module.exports = GitapiService