<template>
  <nav class="sticky top-0 z-50 bg-black shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo y botón Home -->
        <div class="flex items-center">
          <RouterLink to="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src="@/assets/logoApexDBWB.png" alt="ApexDB Logo" class="h-10 w-auto" />
          </RouterLink>
        </div>

        <!-- Botones de navegación -->
        <div class="flex items-center space-x-4">
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
              class="px-4 py-2 text-sm font-medium text-black bg-[#e1bc47] rounded-md hover:bg-[#f0d470] transition-colors"
            >
              Iniciar Sesión
            </RouterLink>
          </template>

          <template v-else-if="isAuthenticated">
            <!-- Usuario autenticado -->
            <span class="text-sm font-medium text-[#e1bc47]">
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

const router = useRouter();
const route = useRoute();
const toast = useToast();

const isAuthenticated = computed(() => authService.isAuthenticated());
const userName = computed(() => authService.getUserName());

// Ocultar botones de login/register cuando estamos en esas vistas
const shouldShowAuthButtons = computed(() => {
  return !['login', 'register'].includes(route.name as string);
});

const handleLogout = () => {
  authService.logout();
  toast.info('¡Hasta pronto!');
  router.push('/login');
};
</script>

