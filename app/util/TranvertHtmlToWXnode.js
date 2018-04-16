const {isSupportedTag,isSupportedAttr} = require('./wxSupportedTag.js')


function TranvertHtmlToWXnode(ctx){
	let nodes = []
	if(!ctx)
		return
	if(ctx.children){
		for(let i = 0;i < ctx.children.length;i++){
			let item = ctx.children[i]
			nodes.push(A(item))
		}
	}
	return JSON.stringify(nodes)
}

function A(node){
	let res = {}
	if(!node)
		return
	
	if(node.type == 'tag'){
		if(!isSupportedTag(node.name))
			return
		res.type = 'node'
		res.name = node.name
		res.attrs = node.attribs
		let child = []
		if(node.children){
			let children = node.children
		
			if(children.length>0){
				for(let i = 0;i<children.length;i++){
					child.push(A(children[i]))
				}
			}
		}
		res.children = child
	}
	else if(node.type == 'text'){
		res.type = 'text'

		res.text = node.data
	}
	
	
	return res
}

function stringify(obj){
	let cache = []
	const value = JSON.stringify(obj, function(key, value) {
	    if (typeof value === 'object' && value !== null) {
	        if (cache.indexOf(value) !== -1) {
	            // Circular reference found, discard key
	            return;
	        }
	        // Store value in our collection
	        cache.push(value);
	    }
	    return value;
	});
	cache = null
	return value
}

module.exports = TranvertHtmlToWXnode