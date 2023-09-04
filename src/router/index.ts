import { createRouter, createWebHistory } from 'vue-router'
import HeaderAsideLayout from '@/layout/header-aside-layout/index.vue'
import routerConfig from "@/config/routerConfig";

declare global {
  interface ImportMeta {
    readonly env: {
      BASE_URL: string;
    };
  }
}

//TODO 待优化
// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeaderAsideLayout,
      children: routerConfig
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
