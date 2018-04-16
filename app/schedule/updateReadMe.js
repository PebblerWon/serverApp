/*
定时从https://api.github.com/search/repositories获取仓库信息并更新数据库
*/
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const Subscription = require('egg').Subscription
const {languages} = require('../../config/my_config')
const TranvertHtmlToWXnode = require('../util/TranvertHtmlToWXnode')

class UpdateReadMe extends Subscription{
	static get schedule(){
		return{
			interval:'1h',
			type:'worker'
		}
	}

	async subscribe(){
		try{
			console.log('updateReadMe')

			const {ctx,config} = this
			const {serverUrl,gitToken} = config.gitapi
			const Repo = ctx.model.Repo
			const AllRepos = await Repo.find().sort({stargazers_count:-1})
			const baseDir = ctx.app.baseDir
			for(let i = 0;i<AllRepos.length;i++){	
				let lanItem = AllRepos[i]

				let result = await ctx.curl(lanItem.html_url);
				if(result.status==200&&result.data){
					
					let html = result.data
					let $ = cheerio.load(html)
					let node = $('#readme article')[0]
					let readeMe = TranvertHtmlToWXnode(node)

					let readeMeFileUrl = path.join(baseDir,`readMe/_${lanItem.id}`)
					this.logger.info(readeMeFileUrl)
					/*将转换后的结构写入文件*/
					fs.writeFile(readeMeFileUrl,readeMe,(err)=>{
						if(err){
							ctx.logger.error(err)
							throw err
						}
					})
				}
			}
		}catch(err){
			this.logger.error(err)
			return
		}
		
	}
}

module.exports = UpdateReadMe