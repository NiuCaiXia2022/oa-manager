//  /system/user
// 用户管理
// import home from '../../home'

export default {
  path: '/system',
  name: '',
  meta: {
    title: '欢迎页面'
  },
  component: () => import('../../home'),
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
