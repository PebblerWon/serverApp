module.exports = (q)=>{
	const a = q.split('+')
	const language = ''
	let res = {}
	
	for(let item of a){

		/*
		*
		* 获取查询参数的语言属性
		*/
		if(item.indexOf('language:')>0){
			let _arr = item.split(':')
			let _lan = _arr[1]
			if(_lan!=''&&_lan!='null'&&_lan!='undefined')
				language+=_lan+' '
		}
	}


	res.language = language
	return res
}