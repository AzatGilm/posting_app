import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import UserPage from '@/pages/UserPage'
import AboutApp from '@/pages/AboutApp'
import PostIdPage from '@/pages/PostIdPage'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/posts',
    component: UserPage
  },
  {
    path: '/about',
    component: AboutApp
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
