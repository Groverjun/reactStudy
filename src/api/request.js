import axios from 'axios'

import {
  TIMEOUT,
  baseURL
} from './config'

import qs from 'qs'

const service = axios.create({
	baseURL: baseURL.dev, 
	timeout: TIMEOUT, 
	headers: {
		"contentType": "application/json; charset=utf-8"
	}
})
service.all = axios.all
service.interceptors.request.use(function (config) {
  // 如果请求是 post 的请求 用qs 配置下 请求参数
	if (config.method === 'post') {
		if (config.headers['Content-Type']!=="multipart/form-data") {
			if(config.headers['Content-Type']==="application/x-www-form-urlencoded;charset=UTF-8"){
				config.data = qs.stringify(config.data)
			}else{
				config.data = JSON.stringify(config.data)
			}
		}
		return config
	}
	if (config.method === 'get' && config.data && Object.keys(config.data).length) {
		config.params = qs.parse(config.data)
		return config
	}
	if (config.method === 'get') {
		return config
	}
}, function (error) {
	return Promise.reject(error)
})
// 添加响应拦截器
service.interceptors.response.use(function (response) {
	const flag = parseInt(response.data.status)
	if (flag === 200) {
		return response.data
	}else{
		return Promise.reject(response.data)
	}
}, function (error) {
	console.log(error)
  	return Promise.reject(error)
})
export default service
