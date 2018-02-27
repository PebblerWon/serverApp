'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519695847549_3649';

  // add your config here
  config.middleware = [];

  config.appInfo = appInfo

  return config;
};

module.exports.news = {
	type:'',
	q:'',
	serverUrl:'https://github.com/search'
}
