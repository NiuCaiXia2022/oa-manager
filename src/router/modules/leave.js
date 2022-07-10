//  /audit/leave
//  休假管理
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
      path: '/audit/leave',
      name: 'leave',
      meta: {
        title: '休假管理'
      },
      component: () => import('../../views/leave')
    }
  ]
}
