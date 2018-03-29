/*agent 进程*/

module.exports = agent => {
	agent.messenger.on('egg-ready',() => {
		const data = {name:'whn'}
		agent.messenger.sendToApp('myAction',data)
	})
}