/*
定时从https://api.github.com/search/repositories获取仓库信息并更新数据库
*/

const Subscription = require('egg').Subscription
const {languages} = require('../../config/my_config')

class UpdateRepo extends Subscription{
	static get schedule(){
		return{
			interval:'5m',
			type:'worker'
		}
	}

	async subscribe(){
		try{
			const {ctx,config} = this
			const {serverUrl,gitToken} = config.gitapi
			const Repo = ctx.model.Repo
			for(let lanItem of languages){
				this.logger.info("value: " +lanItem.value)
				const result = await ctx.curl(`${serverUrl}/search/repositories`,{
					headers:{
						Authorization: `token ${gitToken}`
					},
					dataType:'json',
					data:{
						q:`stars:>1000 language:${lanItem.value}`,
						order:'stars'
					}
				});
				this.logger.info(lanItem.value+"'s count is "+ result.data.items.length)
				if(result.status==200&&result.data){
					for(let item of result.data.items){
						Repo.find({id:item.id},(err,docs)=>{
							if(docs.length==0){
								let newItem = new Repo(item)
								newItem.save()
							}
						})
					}
				}
			}
		}catch(err){
			this.logger.error(err)
			return
		}
		
	}
}

module.exports = UpdateRepo