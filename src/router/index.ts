import { createRouter, createWebHistory } from 'vue-router'
import { authService } from '@/services/auth'
import { useToast } from 'vue-toastification'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import VerifyEmailView from '../views/VerifyEmailView.vue'
import DashboardView from '../views/DashboardView.vue'
import DatabasesView from '../views/DatabasesView.vue'
import PlansView from '../views/PlansView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
      meta: { title: 'Inicio' }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'AuthLayout', requiresGuest: true, title: 'Iniciar sesión' }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { layout: 'AuthLayout', requiresGuest: true, title: 'Registro' }
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView,
      meta: { layout: 'AuthLayout', requiresGuest: true, title: 'Recuperar contraseña' }
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPasswordView,
      meta: { layout: 'AuthLayout', title: 'Restablecer contraseña' }
    },
    {
      path: '/verify-email',
      name: 'verify-email',
      component: VerifyEmailView,
      meta: { layout: 'AuthLayout', title: 'Verificar correo' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { layout: 'AppLayout', requiresAuth: true, title: 'Panel de control' }
    },
    {
      path: '/databases',
      name: 'databases',
      component: DatabasesView,
      meta: { layout: 'AppLayout', requiresAuth: true, title: 'Mis Bases de Datos' }
    },
    {
      path: '/plans',
      name: 'plans',
      component: PlansView,
      meta: { layout: 'AppLayout', requiresAuth: true, title: 'Planes' }
    }
  ]
})

// Navigation Guard - Protección de rutas
router.beforeEach((to, from, next) => {
  const isAuthenticated = authService.isAuthenticated();
  const toast = useToast();

  // Actualizar el título del documento
  const pageTitle = to.meta.title as string || 'ApexDB';
  document.title = `ApexDB | ${pageTitle}`;

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
