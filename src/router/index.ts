import { createRouter, createWebHistory } from 'vue-router'
import { authService } from '@/services/auth'
import { useToast } from 'vue-toastification'
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
      component: LandingView,
      meta: { requiresGuest: true } // Solo para usuarios no autenticados
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'AuthLayout', requiresGuest: true } // Solo para usuarios no autenticados
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { layout: 'AuthLayout', requiresGuest: true } // Solo para usuarios no autenticados
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { layout: 'AppLayout', requiresAuth: true } // Requiere autenticación
    },
    {
      path: '/plans',
      name: 'plans',
      component: PlansView,
      meta: { layout: 'AppLayout', requiresAuth: true } // Requiere autenticación
    }
  ]
})

// Navigation Guard - Protección de rutas
router.beforeEach((to, from, next) => {
  const isAuthenticated = authService.isAuthenticated();
  const toast = useToast();

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Ruta protegida, usuario no autenticado → mostrar toast y redirigir a login
    toast.warning('Primero debes iniciar sesión');
    next('/login');
  } else if (to.meta.requiresGuest && isAuthenticated) {
    // Ruta para invitados, usuario autenticado → redirigir a dashboard
    next('/dashboard');
  } else {
    // Permitir navegación
    next();
  }
});

export default router
