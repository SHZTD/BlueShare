import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import RegisterPage from '@/views/login/RegisterPage.vue';
import ForgotPasswordPage from '@/views/login/ForgotPasswordPage.vue';
import FeedPage from '@/views/main/FeedPage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    name: 'Forgot password',
    path: '/forgot-password',
    component: ForgotPasswordPage
  },
  {
    name: 'Feed page',
    path: '/feed-page',
    component: FeedPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
