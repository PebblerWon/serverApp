'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/test',controller.gitapi.test)
  router.get('/api/me',controller.gitapi.me)
  router.get('/api/query/:language',controller.gitapi.query)
  router.post('/api/advancedQuery',controller.gitapi.advancedQuery)
  /*
  * server redirect
  * and the client redirect is realized in controller
  */
  //router.redirect('/me2',"/")
};
