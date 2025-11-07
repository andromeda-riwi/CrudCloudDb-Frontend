<template>
  <nav class="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo y botón Home -->
        <div class="flex items-center space-x-8">
          <!-- Logo clickeable que lleva al inicio de la landing -->
          <a
            v-if="isLandingPage"
            href="#inicio"
            @click.prevent="scrollToTop"
            class="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src="@/assets/logoApexDBWB.png" alt="ApexDB Logo" class="h-10 w-auto" />
          </a>
          <!-- RouterLink para otras páginas -->
          <RouterLink
            v-else
            to="/"
            class="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img src="@/assets/logoApexDBWB.png" alt="ApexDB Logo" class="h-10 w-auto" />
          </RouterLink>

          <!-- Enlaces de navegación (solo en landing page) -->
          <div v-if="isLandingPage" class="hidden md:flex items-center space-x-6">
            <a
              href="#inicio"
              @click.prevent="scrollToTop"
              class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e1bc47] dark:hover:text-[#e1bc47] transition-colors cursor-pointer"
            >
              Inicio
            </a>
            <a
              href="#precios"
              @click.prevent="scrollToSection('precios')"
              class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e1bc47] dark:hover:text-[#e1bc47] transition-colors cursor-pointer"
            >
              Precios
            </a>
            <a
              href="#faq"
              @click.prevent="scrollToSection('faq')"
              class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e1bc47] dark:hover:text-[#e1bc47] transition-colors cursor-pointer"
            >
              FAQ
            </a>
            <a
              href="#contacto"
              @click.prevent="scrollToSection('contacto')"
              class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#e1bc47] dark:hover:text-[#e1bc47] transition-colors cursor-pointer"
            >
              Contacto
            </a>
          </div>
        </div>

        <!-- Botones de navegación -->
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <DarkModeToggle />

          <template v-if="!isAuthenticated && shouldShowAuthButtons">
            <!-- Usuario NO autenticado - Mostrar solo si NO está en login/register -->
            <RouterLink
              to="/register"
              class="px-4 py-2 text-sm font-medium text-[#e1bc47] hover:text-[#f0d470] transition-colors"
            >
              Registrarse
            </RouterLink>
            <RouterLink
              to="/login"
              class="px-4 py-2 text-sm font-medium text-black dark:text-black bg-[#e1bc47] rounded-md hover:bg-[#f0d470] transition-colors"
            >
              Iniciar Sesión
            </RouterLink>
          </template>

          <template v-else-if="isAuthenticated">
            <!-- Usuario autenticado -->
            <span class="text-sm font-medium text-[#e1bc47] dark:text-[#f0d470]">
              Hola, {{ userName }}
            </span>
            <button
              @click="handleLogout"
              class="px-4 py-2 text-sm font-medium text-black bg-[#e1bc47] rounded-md hover:bg-[#f0d470] transition-colors"
            >
              Cerrar Sesión
            </button>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';
import { useToast } from 'vue-toastification';
import { authService } from '@/services/auth';
import DarkModeToggle from './DarkModeToggle.vue';

const router = useRouter();
const route = useRoute();
const toast = useToast();

const isAuthenticated = computed(() => authService.isAuthenticated());
const userName = computed(() => authService.getUserName());

// Verificar si estamos en la landing page
const isLandingPage = computed(() => route.path === '/');

// Ocultar botones de login/register cuando estamos en esas vistas
const shouldShowAuthButtons = computed(() => {
  return !['login', 'register'].includes(route.name as string);
});

const handleLogout = () => {
  authService.logout();
  toast.info('¡Hasta pronto!');
  router.push('/login');
};

// Función para hacer scroll al inicio de la página
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Función para hacer scroll suave a las secciones
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Altura del navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
</script>

