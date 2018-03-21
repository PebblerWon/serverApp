'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519695847549_3649';
  config.cluster={listen:{port:80}}
  // add your config here
  //中间件好像只在respnse的时候调用
  config.middleware = ['gzip'];
  config.gzip={
  	threshold:1024
  }


  //my config
  config.appInfo = appInfo
  config.news = {
	  type:'',
	  q:'',
	  serverUrl:'https://github.com/search'
  }
  config.gitapi={
    serverUrl:'https://github.com/search',
    serverUrl2:'https://developer.github.com/v3/'
  }
  return config;
};
