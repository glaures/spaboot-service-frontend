import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/select-workshift',
      name: 'selectWorkShift',
      props: true,
      component: () => import('../views/SelectWorkShiftView.vue')
    },
    {
      path: '/process/:processId',
      name: 'process',
      props: true,
      component: () => import('../views/ProcessView.vue')
    }
  ]
})

export default router
