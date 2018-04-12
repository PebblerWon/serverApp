/*
定时从https://api.github.com/search/repositories获取仓库信息并更新数据库
*/

const Subscription = require('egg').Subscription

class UpdateRepo extends Subscription{
	static get schedule(){
		return{
			interval:'1m',
			type:'worker'
		}
	}

	async subscribe(){
		try{
			const {ctx,config} = this
			const {serverUrl,gitToken} = config.gitapi
			const Repo = ctx.model.Repo
			Repo.find({id:item.id},(err,docs)=>{
				if(docs.length=0){
					let newItem = new Repo({
						id:Math.floor(Math.random()*100).toString(),
						name:'test',
						full_name:'test',
						html_url:'String',
						description:'String',
						language:'String',
						stargazers_count:Math.floor(Math.random()*100),
					})
					newItem.save()
				}
			})
			/*const result = await ctx.curl(`${serverUrl}/search/repositories`,{
				headers:{
					Authorization: `token ${gitToken}`
				},
				dataType:'json',
				data:{
					q:`stars:>1000`,
				}
			});

			if(result.status==200&&result.data){
				for(let item in result.data.items){
					Repo.find({id:item.id},(err,docs)=>{
						if(docs.length=0){
							let newItem = new Repo({
								item
							})
							newItem.save()
						}
					})
				}
			}*/
		}catch(err){
			this.logger.error(err)
			return
		}
		
	}
}

module.exports = UpdateRepo