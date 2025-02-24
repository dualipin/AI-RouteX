import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'landing-layout',
    component: () => import('@/layouts/LandingLayout.vue'),
    children: [
      {
        path: '',
        name: 'landing',
        component: () => import('@/views/LandingView.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: 'schedule',
        name: 'schedule',
        component: () => import('@/views/RoutesView.vue'),
      },
    ],
  },
]

export default routes
