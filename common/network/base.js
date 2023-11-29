let baseURL = '';
// 是否在控制台显示接口请求日志,本地环境启用,打包环境禁用
let showHttpLog = true;
// 测试环境
// baseURL = 'http://119.91.35.62:8083/';
baseURL = 'http://127.0.0.1:8089/';

// 正式环境
// baseURL = 'XXXXX.XXXXX.com';
module.exports = {
	baseURL: baseURL,
	showHttpLog: showHttpLog
}