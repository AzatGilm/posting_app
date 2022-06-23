import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import UserPage from '@/pages/UserPage'
import AboutApp from '@/pages/AboutApp'
import PostIdPage from '@/pages/PostIdPage'
import PostPageWithStore from '@/pages/PostPageWithStore'

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
  },
  {
    path: '/store',
    component: PostPageWithStore
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
