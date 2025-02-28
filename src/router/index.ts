import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import RegisterPage from '@/views/login/RegisterPage.vue';
import ForgotPasswordPage from '@/views/login/ForgotPasswordPage.vue';
import Video1Page from '@/views/video/Video1Page.vue';
import Video2Page from '@/views/video/Video2Page.vue';
import FeedPage from '@/views/main/FeedPage.vue';
import SettingsPage1 from '@/views/settings/SettingsPage1.vue';
import UnavailableVideo from '@/views/video/UnavailableVideo.vue';
import SearchBar from '@/views/main/SearchBar.vue';
import HelpPage1 from '@/views/settings/HelpPage1.vue';
import FullScreen1 from '@/views/video/FullScreen1.vue';
import VideoAnalytics from '@/views/video/VideoAnalytics.vue';

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
    name: 'video1',
    path: '/video1',
    component: Video1Page
  },
  {
    name: 'video2',
    path: '/video2',
    component: Video2Page
  },
  {
    name: 'Feed page',
    path: '/feed-page',
    component: FeedPage
  },
  {
    name: 'Unavailable',
    path: '/unavailable',
    component: UnavailableVideo
  },
  {
    name: 'SearchVideo',
    path: '/search-video',
    component: SearchBar
  },
  {
    name: 'Settings Page',
    path: '/settings',
    component: SettingsPage1
  },
  {
    name: 'Fullscreen',
    path: '/video1fs',
    component: FullScreen1
  },
  {
    name: 'Video Analyitics',
    path: '/video-analytics',
    component: VideoAnalytics
  },
  {
    name: 'Help',
    path: '/help',
    component: HelpPage1
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router