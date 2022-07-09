// 接口
import http from '../utils/request'

// 登录
const getLogin = (data) => {
  return http({
    url: '/users/login',
    method: 'POST',
    data
  })
}

// 用户信息
const getPermissionList = () => {
  return http({
    url: '/users/getPermissionList',
    method: 'GET'
  })
}

export default {
  getLogin,
  getPermissionList
}
