import request from './request'
export function channelInfo () { 
    return request({
      url: '/login/channelInfo',
      method: 'get'
    })
}

export function imagesUpdata (data) { 
  return request({
	headers:{'Content-Type':'multipart/form-data'},
    url: '/file/saveVideo',
	method: 'post',
	data
  })
}