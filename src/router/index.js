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
      path: '/process/:processId/:processId2?',
      name: 'process',
      props: true,
      component: () => import('../views/ProcessView.vue')
    },
    {
      path: '/process-print/:processId/:processId2?',
      name: 'process-print',
      props: true,
      component: () => import('../views/ProcessPrintView.vue')
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: () => import('../views/FAQView.vue')
    }
  ]
})

export default router
