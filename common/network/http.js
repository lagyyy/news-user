import {
	baseURL
} from './base.js'; //导入接口的前缀地址


export const request = (options) => {
	return new Promise((resolve, reject) => {
		// 封装主体：网络请求
		uni.request({
			url: baseURL + options.url,

			data: options.data || {},
			// 默认值GET，如果有需要改动，在options中设定其他的method值
			method: options.method || 'GET',
			header: {
				satoken: uni.getStorageSync('satoken')
			},
			success: (res) => {
				// console.log(res.data); // 控制台显示数据信息
				resolve(res)
			},
			fail: (err) => {
				// 页面中弹框显示失败
				uni.showToast({
					title: '请求接口失败'
				})
				// 返回错误消息
				reject(err)
			},
			catch: (e) => {
				console.log(e);
			}
		})
	})
}