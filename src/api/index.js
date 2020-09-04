import request from './request'
export function channelInfo () { 
    return request({
      url: '/login/channelInfo',
      method: 'get'
    })
  }