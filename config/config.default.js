'use strict';
const path = require('path')
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519695847549_3649';
  config.cluster={listen:{port:80}}
  // add your config here
  //中间件好像只在respnse的时候调用
  config.middleware = ['gzip','saveSession'];
  config.gzip={
    match:'/static',
  	threshold:1024
  }

  config.static={
    prefix:'/public',
    dir:path.join(appInfo.baseDir,'app/public/dist')
  }

  //my config
  //config.appInfo = appInfo
  config.news = {
	  type:'',
	  q:'',
	  serverUrl:'https://github.com/search'
  }
  config.gitapi={
    serverUrl:'https://api.github.com',
    serverUrl2:'https://developer.github.com/v3/',
    gitToken:'e11589e16b6a884___080aea327276337f4390612c6'
  }
  return config;
};
