//  /staff
//  员工管理
import home from '../../home'

export default {
  path: '/',
  name: '',
  meta: {
    title: '欢迎页面'
  },
  component: home,
  children: [
    {
      path: '/system/user',
      name: 'user',
      meta: {
        title: '用户管理'
      },
      component: () => import('../../views/user')
    }
  ]
}
