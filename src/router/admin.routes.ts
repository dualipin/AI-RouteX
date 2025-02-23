import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/admin',
    name: 'admin-layout',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('@/views/admin/DashboardView.vue'),
      },
      {
        path: 'users',
        name: 'admin-users',
        component: () => import('@/views/admin/UsersView.vue'),
      },
    ],
  },
]

export default routes
