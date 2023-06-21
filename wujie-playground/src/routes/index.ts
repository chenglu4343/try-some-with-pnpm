import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/micro-vue3' },
  { path: '/micro-vue3', component: () => import('../views/MicroVue3.vue') },
  { path: '/micro-vue3-alive', component: () => import('../views/MicroVue3Alive.vue') },
  { path: '/micro-vue3-single', component: () => import('../views/MicroVue3Single.vue') },
  { path: '/micro-react', component: () => import('../views/MicroReact.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
