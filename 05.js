var  now = require("date-now");
var assert = require("assert");
var date = new Date();
console.log(date);


var sd = require("silly-datetime");
var time = sd.format(new Date(),'YYYY-MM-DD HH:mm');
console.log(time);//2018-09-10 17:06

//npm install silly-datetime --save
/*
* install=>i
*
*npm install 安装项目依赖
* npm init 初始化文件  出现package.json
* dependencies   生产环境  线上需要运行的包  --save 会下载到生产环境里
* devdependencies    开发环境    开发时需要用到包  --save-dev ==-D  下载到开发环境里
*
*
*
*
* */