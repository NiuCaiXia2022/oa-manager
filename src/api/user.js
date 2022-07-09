// 接口
import http from '../utils/request'

// 登录
const getLogin = () => {
  return http({
    url: '/users/login',
    method: 'POST'
  })
}

export default {
  getLogin
}
