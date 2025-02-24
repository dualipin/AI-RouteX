import type { RouteRecordRaw } from 'vue-router'
import LandingLayout from '@/layouts/LandingLayout.vue'
import LandingView from '@/views/LandingView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'landing-layout',
    component: LandingLayout,
    children: [
      {
        path: '',
        name: 'landing',
        component: LandingView,
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: 'schedule',
        name: 'schedule',
        component: () => import('@/views/SchedulesView.vue'),
      },
      {
        path: 'stops',
        name: 'stops',
        component: () => import('@/views/StopView.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
      },
      {
        path: 'routes',
        name: 'routes',
        component: () => import('@/views/RoutesView.vue'),
      },
    ],
  },
]

export default routes
