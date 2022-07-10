//  /system/user
// 用户管理
import home from '../../home'

export default {
  path: '/',
  redirect: '/welcome',
  component: home,
  children: [
    {
      path: '/welcome',
      name: 'welcome',
      meta: {
        title: '欢迎页面'
      },
      component: () => import('../../views/welcome')
    }
  ]
}
