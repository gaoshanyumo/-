// 引入http和https
let http = require('http');
let https = require('https');
// 读取文件
let fs = require('fs');
// path
let path = require('path');
// 引入配置
let { HTTP_PORT, HTTPS_PORT } = require('../consts');

// 读取秘钥 process.cwd(), __dirname
// __dirname 		/example/server/server
// process.cwd() 	/example/server
let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(), './ssl/file.crt'));

// 接口
module.exports = (app) => {
	// console.log(process.argv)
	// 端口号
	let httpPort = +process.argv[2] || HTTP_PORT;
	let httpsPort = +process.argv[3] || (process.argv[2] ? +process.argv[2] + 1 : HTTPS_PORT);
	// 启动服务
	http.createServer(app)
		.listen(httpPort, res => console.log('http server listen at ' + httpPort))
	// https服务
	https.createServer({ key, cert }, app)
		.listen(httpsPort, res => console.log('http server listen at ' + httpsPort))
}