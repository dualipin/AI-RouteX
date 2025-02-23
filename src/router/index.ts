import { createRouter, createWebHistory } from 'vue-router'
import landingRoutes from './landing.routes'
import adminRoutes from './admin.routes'
import driverRoutes from './driver.routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...landingRoutes,
    ...adminRoutes,
    ...driverRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
