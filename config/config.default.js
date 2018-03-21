'use strict';

const myConfig = {
  news:{
    type:'',
    q:'',
    serverUrl:'https://github.com/search'
  },
  gitapi:{
    serverUrl:'https://api.github.com',
    gitToken:'a15f28021738aac8c7f839aa985e5fd84a46e9a5'
  }
}

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519695847549_3649';
  config.cluster={listen:{port:80}}
  // add your config here
  //中间件好像只在respnse的时候调用
  config.middleware = ['gzip'];
  config.gzip={
    match:'/static',
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
