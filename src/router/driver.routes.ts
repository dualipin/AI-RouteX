import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'carrier',
    path: '/carrier',
    component: () => import('@/layouts/DriverLayout.vue'),
    children: [
      {
        name: 'carrier-dashboard',
        path: '',
        component: () => import('@/views/driver/DriverHomeView.vue'),
      },
    ],
  },
]

export default routes
