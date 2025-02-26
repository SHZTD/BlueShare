import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import RegisterPage from '@/views/login/RegisterPage.vue';
import ForgotPasswordPage from '@/views/login/ForgotPasswordPage.vue';
import Video1Page from '@/views/video/Video1Page.vue';
import FeedPage from '@/views/main/FeedPage.vue';
import SettingsPage1 from '@/views/settings/SettingsPage1.vue';


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
    name: 'Video1',
    path: '/video/Video1Page',
    component: Video1Page
  },
  {
    name: 'Feed page',
    path: '/feed-page',
    component: FeedPage
  },
  {
    name: 'Settings Page',
    path: '/settings',
    component: SettingsPage1
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
