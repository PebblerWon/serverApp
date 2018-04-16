/*存储微信小程序rich-text支持的标签以及该标签的属性*/
const allTagSupportedAttr=['style','class']
const wxSupportedTag={
	a:allTagSupportedAttr,	
	abbr:allTagSupportedAttr,
	b:allTagSupportedAttr,
	blockquote:allTagSupportedAttr,
	br:allTagSupportedAttr,	
	code:allTagSupportedAttr,	
	col:[...allTagSupportedAttr, 'span','width'],
	colgroup:[...allTagSupportedAttr,'span','width'],
	dd:allTagSupportedAttr,
	del:allTagSupportedAttr,
	div:allTagSupportedAttr,
	dl:allTagSupportedAttr,
	dt:allTagSupportedAttr,
	em:allTagSupportedAttr,
	fieldset:allTagSupportedAttr,
	h1:allTagSupportedAttr,
	h2:allTagSupportedAttr,
	h3:allTagSupportedAttr,
	h4:allTagSupportedAttr,
	h5:allTagSupportedAttr,
	h6:allTagSupportedAttr,
	hr:allTagSupportedAttr,
	i:	allTagSupportedAttr,
	img:[...allTagSupportedAttr, 'alt','src','height','width']	,
	ins:allTagSupportedAttr,
	label:	allTagSupportedAttr,
	legend	:allTagSupportedAttr,
	li:allTagSupportedAttr,
	ol:[...allTagSupportedAttr,'start','type'],
	p:allTagSupportedAttr,
	q:allTagSupportedAttr	,
	span:allTagSupportedAttr,
	strong:allTagSupportedAttr,
	sub:allTagSupportedAttr,
	sup:allTagSupportedAttr,
	table:[...allTagSupportedAttr,'width'],
	tbody:allTagSupportedAttr,
	td:[...allTagSupportedAttr,'colspan','height','rowspan','width'],
	tfoot:allTagSupportedAttr,
	th:[...allTagSupportedAttr,'colspan','height','rowspan','width'],
	thead:	allTagSupportedAttr,
	tr:allTagSupportedAttr,
	ul:allTagSupportedAttr,
}

function isSupportedTag(tag){
	const tagName = tag.toString()
	if(wxSupportedTag[tagName])
		return true
	else
		return false
}

function isSupportedAttr(tag,attr){
	const tagName = tag.toString()
	const attrName = attr.toString()
	if (isSupportedTag(tagName)){
		let attrs = wxSupportedTag[tagName]
		if(attrs.indexOf(attrName)!=-1){
			return true
		}else{
			return false
		}
	}else{
		return false
	}
}

module.exports ={isSupportedTag,isSupportedAttr} 