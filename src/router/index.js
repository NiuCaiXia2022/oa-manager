import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    redirect: '/welcome',
    component: () => import('../home'),
    children: [
      {
        path: '/welcome', // 欢迎页面
        name: 'welcome',
        meta: {
          title: '欢迎体验Vue3全栈课程',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/welcome')
      },
      {
        path: '/system/user', // 用户管理
        name: 'user',
        meta: {
          title: '用户管理',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/user')
      },
      {
        path: '/system/menu', // 菜单管理
        name: 'menu',
        meta: {
          title: '菜单管理',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/menu')
      },
      {
        path: '/system/role', // 角色管理
        name: 'role',
        meta: {
          title: '角色管理',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/role')
      },
      {
        path: '/system/user', // 用户管理
        name: 'user',
        meta: {
          title: '用户管理',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/user')
      },
      {
        path: '/system/dept', // 部门管理
        name: 'dept',
        meta: {
          title: '部门管理',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/dept')
      },
      {
        path: '/system/staff', // 员工管理
        name: '/staff',
        meta: {
          title: '员工管理',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/staff')
      },
      {
        path: '/system/salary', // 薪酬管理
        name: 'approve',
        meta: {
          title: '薪酬管理',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/salary')
      },
      {
        path: '/audit/leave', // 休假管理
        name: 'leave',
        meta: {
          title: '休假管理',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/leave')
      },
      {
        path: '/audit/approve', // 待审批
        name: 'approve',
        meta: {
          title: '待审批',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/approve')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
