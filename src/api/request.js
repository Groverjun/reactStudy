import axios from 'axios'
import { message } from 'antd';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
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
service.interceptors.request.use( (config)=> {
	
	NProgress.start();
	//添加token
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
},  (error)=> {
	return Promise.reject(error)
})
// 添加响应拦截器
service.interceptors.response.use( (response)=> {
	NProgress.done();
	//首先判断是否登录是否过期
	//
	message.success(response.data.status);
	const flag = parseInt(response.data.status)
	if (flag === 200) {
		return response.data
	}else{
		return Promise.reject(response.data)
	}
},  (error)=> {
	NProgress.done();
	console.log(error)
	console.log(message)
	// message.error(JSON.stringify(error));
  	return Promise.reject(error)
})
export default service
