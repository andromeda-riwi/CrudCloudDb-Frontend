import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import PlansView from '../views/PlansView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
      // La landing no necesita un layout, se muestra tal cual
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'AuthLayout' } // <-- Usará AuthLayout
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { layout: 'AuthLayout' } // <-- Usará AuthLayout
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { layout: 'AppLayout' } // <-- Usará AppLayout
    },
    {
      path: '/plans',
      name: 'plans',
      component: PlansView,
      meta: { layout: 'AppLayout' } // <-- Usará AppLayout
    }
  ]
})

export default router
