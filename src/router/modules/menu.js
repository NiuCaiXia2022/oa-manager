//  /system/menu
//  菜单管理
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
      path: '/system/menu',
      name: 'user',
      meta: {
        title: '菜单管理'
      },
      component: () => import('../../views/menu')
    }
  ]
}
