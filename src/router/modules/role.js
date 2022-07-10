//  /system/role
//  角色管理
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
      path: '/system/role',
      name: 'user',
      meta: {
        title: '角色管理'
      },
      component: () => import('../../views/role')
    }
  ]
}
