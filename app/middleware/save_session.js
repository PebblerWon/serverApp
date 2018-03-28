/*
* 在每次请求是都对session做一次刷新
*/

module.exports = () => {
	return async function saveSession(ctx,next) {
		await next()
		if(!ctx.session.populated) return
		ctx.session.save()
	}
}