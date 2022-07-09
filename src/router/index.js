import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

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
        component: () => import('../views/welcome')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
