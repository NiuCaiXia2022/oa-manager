//  /system/dept
//  部门管理
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
      path: '/system/dept',
      name: 'user',
      meta: {
        title: '部门管理'
      },
      component: () => import('../../views/dept')
    }
  ]
}
