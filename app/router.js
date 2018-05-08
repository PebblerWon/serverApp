'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/api/test',controller.gitapi.test)
  router.get('/api/me',controller.gitapi.me)



  /*
  * 对本地mongogdb做分页查询
  */
  router.get('/api/query',controller.gitapi.query)
  router.get('/api/readme',controller.gitapi.readme)
  
  router.get('/api/advancedQuery',controller.gitapi.advancedQuery)

  router.get('/qcode',controller.qcode.test)
  /*
  * server redirect
  * and the client redirect is realized in controller
  */
  //router.redirect('/me2',"/")
};
