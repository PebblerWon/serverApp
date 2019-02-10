'use strict';
const fs = require('fs')
const path = require('path')
module.exports = appInfo => {
  /*
  *读取数据库配置和git配置
  */
  const configUrl = path.join(appInfo.baseDir,'pwd') 
  let mongodbConnectUrl = ''
  let gitToken = ''
  if(fs.existsSync(configUrl)){
    try {
      let pwd = fs.readFileSync(configUrl)
      let _pwd = JSON.parse(pwd)
      console.log(_pwd)
      /*
      * 加载数据库配置
      * loadDbConfig()
      */
      mongodbConnectUrl = _pwd.mongodbConnectUrl
      /*
      * 加载git配置
      * loadGitConfig()
      */
      gitToken = _pwd.gitToken
    }catch(error){
      console.error(error)
      return
    }
  }else{
    console.log('数据库配置文件不存在')
    return
  }


  const config = exports = {};
  //console.error("appInfo:"+appInfo.baseDir)
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519695847549_3649';
  // add your config here
  //中间件好像只在respnse的时候调用

  /*
  * 配置MongoDBdb数据库
  */
  config.mongoose = {
    client:{
      url:mongodbConnectUrl,
      options:{}
    }
  }

  /*
  *网络配置
  */
  config.httpclient = {
    // 是否开启本地 DNS 缓存，默认关闭，开启后有两个特性
    // 1. 所有的 DNS 查询都会默认优先使用缓存的，即使 DNS 查询错误也不影响应用
    // 2. 对同一个域名，在 dnsCacheLookupInterval 的间隔内（默认 10s）只会查询一次
    enableDNSCache: false,
    // 对同一个域名进行 DNS 查询的最小间隔时间
    dnsCacheLookupInterval: 10000,
    // DNS 同时缓存的最大域名数量，默认 1000
    dnsCacheMaxLength: 1000,

    request: {
      // 默认 request 超时时间
      //timeout: 3000,
      timeout:30000,
    },

    httpAgent: {
      // 默认开启 http KeepAlive 功能
      keepAlive: true,
      // 空闲的 KeepAlive socket 最长可以存活 4 秒
      freeSocketKeepAliveTimeout: 4000,
      // 当 socket 超过 30 秒都没有任何活动，就会被当作超时处理掉
      timeout: 30000,
      // 允许创建的最大 socket 数
      maxSockets: Number.MAX_SAFE_INTEGER,
      // 最大空闲 socket 数
      maxFreeSockets: 256,
    },

    httpsAgent: {
      // 默认开启 https KeepAlive 功能
      keepAlive: true,
      // 空闲的 KeepAlive socket 最长可以存活 4 秒
      freeSocketKeepAliveTimeout: 4000,
      // 当 socket 超过 30 秒都没有任何活动，就会被当作超时处理掉
      timeout: 30000,
      // 允许创建的最大 socket 数
      maxSockets: Number.MAX_SAFE_INTEGER,
      // 最大空闲 socket 数
      maxFreeSockets: 256,
    },
  };

  /*
  * 配置中间件
  */
  config.middleware = ['gzip','saveSession'];
  config.gzip={
    match:'/static',
  	threshold:1024
  }

  config.static={
    prefix:'/public',
    dir:path.join(appInfo.baseDir,'app/public/dist')
  }

  /*
  * 自定义配置
  * config.appInfo = appInfo
  */
  config.news = {
	  type:'',
	  q:'',
	  serverUrl:'https://github.com/search'
  }
  config.gitapi={
    serverUrl:'https://api.github.com',
    serverUrl2:'https://developer.github.com/v3/',
    gitToken:gitToken
  }
  config.readMeFolderUrl=path.join(appInfo.baseDir,`readMe/`)
  return config;
};
