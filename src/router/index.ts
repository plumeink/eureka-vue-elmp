import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/layout/header-aside-layout/index.vue'
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
  {
    path: 'home',
    component: HelloWorld,
  }
]

declare global {
  interface ImportMeta {
    readonly env: {
      BASE_URL: string;
    };
  }
}

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: routes
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
