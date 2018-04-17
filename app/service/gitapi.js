const fs = require('fs')
const path = require('path')
const Service = require('egg').Service
const Config = require('../../config/config.default.js')

class GitapiService extends Service{
	/*
	* 页数从第一页开始，没有第0页
	*/
	async query(page=1,per_page=10){
		let _page = parseInt(page,10)
		let _per_page = parseInt(per_page,10)
		if(_page<1||isNaN(_page))
			_page = 1
		if(_per_page<0||isNaN(_per_page))
			_per_page = 10
		try{
			const {ctx,config} = this
			const {serverUrl,gitToken} = config.gitapi
			const Repo = ctx.model.Repo

			const repo_count = await Repo.count()
			const skip_count = (_page - 1) * _per_page
			/*console.log(repo_count)
			console.log(skip_count)
			console.log(_per_page)*/
			let result

			//如果数据库的数量满足查询要求
			if(repo_count > skip_count){
				result = await Repo.find()
								   .sort({stargazers_count:-1})
								   .skip(skip_count)
								   .limit(_per_page)
			}else{
				/*todo*/
				;
				result = []
			}
			 
	    	return result;
		}catch(err){
			this.logger.error(err)
			return []
		}
		
	}

	/*
	*根据id读取相应的reademe文件并返回
	*/
	async readme(id){
		try{
			const {ctx,config} = this
			const readMeFolderUrl = config.readMeFolderUrl
			const baseDir = ctx.app.baseDir
			const filePath = path.join(readMeFolderUrl,`_${id}`)
			const exist = fs.existsSync(filePath)
			if(exist){
				const res = fs.readFileSync(filePath,{
					encoding:'utf8'
				})
				return JSON.parse(res)
			}else{
				return []
			}
			
		}catch(err){
			this.logger.error(err)
			return []
		}
		
	}

	/*
	*根据选择的编程语言种类进行查询
	*/
	async advancedQuery(language='',page=1,per_page=10){
		let _language =language.toString() 
		let _page = parseInt(page,10)
		let _per_page = parseInt(per_page,10)

		if(_language==undefined||language==null)
			_language=''
		if(_page<1||isNaN(_page))
			_page = 1
		if(_per_page<0||isNaN(_per_page))
			_per_page = 10
		try{
			const {ctx,config} = this
			const {serverUrl,gitToken} = config.gitapi
			const Repo = ctx.model.Repo
			
			const skip_count = (_page - 1) * _per_page
			let result = await Repo.find({language:_language})
							   .sort({stargazers_count:-1})
							   .skip(skip_count)
							   .limit(_per_page)
			
	    	return result;
		}catch(err){
			this.logger.error(err)
			return []
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