import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import MacroCalculator from "@/views/MacroCalculator.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/calculator'
  },
  {
    path: '/home/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home/calculator'
      },
      {
        path: 'calculator',
        component: MacroCalculator
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
