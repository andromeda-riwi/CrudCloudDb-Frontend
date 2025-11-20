﻿<template>
  <div class="flex h-screen bg-gray-50 overflow-hidden">
    <!-- Overlay para móvil -->
    <div
      v-if="isSidebarOpen"
      @click="closeSidebar"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity"
    ></div>

    <!-- Sidebar mejorado -->
    <aside
      :class="[
        'w-72 flex-shrink-0 bg-gradient-to-b from-black to-gray-900 text-white shadow-2xl flex flex-col z-50 transition-transform duration-300 ease-in-out',
        'fixed lg:static h-full',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <!-- Header con logo -->
      <div class="p-6 border-b border-gray-800">
        <div class="flex items-center space-x-3">
          <img src="@/assets/logoApexDBWB.png" alt="ApexDB Logo" class="h-10 w-10 rounded-lg" />
          <div>
            <h1 class="text-2xl font-bold text-[#e1bc47]">ApexDB</h1>
            <p class="text-xs text-gray-400">Database Cloud Platform</p>
          </div>
        </div>
      </div>

      <!-- Usuario info -->
      <div class="px-6 py-4 bg-gray-900/50 border-b border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors" @click="router.push('/profile')">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#e1bc47] to-[#f0d470] flex items-center justify-center text-black font-bold">
            {{ getUserInitials() }}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-white truncate">{{ userName }}</p>
            <p class="text-xs text-gray-400">Plan {{ currentPlan }}</p>
          </div>
        </div>
      </div>

      <!-- Navegación principal -->
      <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <div class="mb-4">
          <p class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Principal</p>

          <RouterLink
            to="/dashboard"
            v-slot="{ isActive }"
            custom
          >
            <a
              @click="router.push('/dashboard')"
              class="nav-item group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:translate-x-1 cursor-pointer"
              :class="isActive ? 'bg-gradient-to-r from-[#e1bc47] to-[#f0d470] text-black font-medium shadow-lg' : 'text-gray-300'"
            >
              <!-- Dashboard Icon -->
              <svg
                class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                :class="isActive ? 'text-black' : 'text-gray-300'"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 12a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z" />
              </svg>
              <span :class="isActive ? 'text-black' : 'text-gray-300'">Dashboard</span>
            </a>
          </RouterLink>

          <RouterLink
            to="/plans"
            v-slot="{ isActive }"
            custom
          >
            <a
              @click="router.push('/plans')"
              class="nav-item group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:translate-x-1 cursor-pointer"
              :class="isActive ? 'bg-gradient-to-r from-[#e1bc47] to-[#f0d470] text-black font-medium shadow-lg' : 'text-gray-300'"
            >
              <!-- Plans Icon -->
              <svg
                class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                :class="isActive ? 'text-black' : 'text-gray-300'"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span :class="isActive ? 'text-black' : 'text-gray-300'">Planes</span>
            </a>
          </RouterLink>
        </div>

        <!-- Sección de Gestión -->
        <div class="mb-4 pt-4 border-t border-gray-800">
          <p class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Gestión</p>

          <RouterLink
            to="/databases"
            v-slot="{ isActive }"
            custom
          >
            <a
              @click="router.push('/databases')"
              class="nav-item group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:translate-x-1 cursor-pointer"
              :class="isActive ? 'bg-gradient-to-r from-[#e1bc47] to-[#f0d470] text-black font-medium shadow-lg' : 'text-gray-300'"
            >
              <!-- Database Icon -->
              <svg
                class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                :class="isActive ? 'text-black' : 'text-gray-300'"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              <span :class="isActive ? 'text-black' : 'text-gray-300'">Mis Bases de Datos</span>
            </a>
          </RouterLink>

          <RouterLink
            to="/audit-logs"
            v-slot="{ isActive }"
            custom
          >
            <a
              @click="router.push('/audit-logs')"
              class="nav-item group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:translate-x-1 cursor-pointer"
              :class="isActive ? 'bg-gradient-to-r from-[#e1bc47] to-[#f0d470] text-black font-medium shadow-lg' : 'text-gray-300'"
            >
              <!-- Audit Icon -->
              <svg
                class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                :class="isActive ? 'text-black' : 'text-gray-300'"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span :class="isActive ? 'text-black' : 'text-gray-300'">Auditoría</span>
            </a>
          </RouterLink>
        </div>

        <!-- Sección de Configuración -->
        <div class="mb-4 pt-4 border-t border-gray-800">
          <p class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Cuenta</p>

           <RouterLink
            to="/profile"
            v-slot="{ isActive }"
            custom
          >
            <a
              @click="router.push('/profile')"
              class="nav-item group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:translate-x-1 cursor-pointer"
              :class="isActive ? 'bg-gradient-to-r from-[#e1bc47] to-[#f0d470] text-black font-medium shadow-lg' : 'text-gray-300'"
            >
              <!-- Profile Icon -->
              <svg class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" :class="isActive ? 'text-black' : 'text-gray-300'">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span :class="isActive ? 'text-black' : 'text-gray-300'">Mi Perfil</span>
            </a>
          </RouterLink>
        </div>

        <!-- Sección de Soporte -->
        <div class="mb-4 pt-4 border-t border-gray-800">
          <p class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Soporte</p>

          <a
            href="#"
            class="nav-item group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:translate-x-1 text-gray-300"
          >
            <svg class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Documentación</span>
          </a>

          <a
            href="#"
            class="nav-item group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:translate-x-1 text-gray-300"
          >
            <svg class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Ayuda & Soporte</span>
          </a>
        </div>
      </nav>

      <!-- Footer del sidebar -->
      <div class="p-4 border-t border-gray-800 bg-gray-900/50">
        <div class="bg-gradient-to-r from-[#e1bc47]/20 to-[#f0d470]/20 rounded-lg p-3 border border-[#e1bc47]/30">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold text-[#e1bc47]">Plan {{ currentPlan }}</span>
            <span class="text-xs text-gray-400">{{ totalDatabases }}/{{ maxDatabases }} DBs</span>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-1.5 mb-2">
            <div
              class="bg-gradient-to-r from-[#e1bc47] to-[#f0d470] h-1.5 rounded-full transition-all duration-300"
              :style="`width: ${usagePercentage}%`"
            ></div>
          </div>
          <button
            @click="goToPlans"
            class="text-xs text-[#e1bc47] hover:text-[#f0d470] font-medium transition-colors"
          >
            Actualizar Plan →
          </button>
        </div>
      </div>
    </aside>

    <div class="flex-1 flex flex-col overflow-hidden w-full lg:w-auto">
      <header class="bg-white dark:bg-gray-800 shadow p-4 transition-colors duration-300">
        <div class="flex justify-between items-center">
          <!-- Botón hamburguesa para móvil -->
          <div class="flex items-center space-x-4">
            <button
              @click="toggleSidebar"
              class="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg class="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate">Bienvenido, {{ userFirstName }}</h2>
          </div>
          <div class="flex items-center space-x-2 sm:space-x-3">
            <!-- Dark Mode Toggle -->
            <DarkModeToggle />

            <button
              @click="handleLogout"
              class="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-black bg-[#e1bc47] rounded-md hover:bg-[#f0d470] transition-colors flex items-center space-x-1 sm:space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span class="hidden sm:inline">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-3 sm:p-4 md:p-6 transition-colors duration-300">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import { authService } from '@/services/auth';
import { computed, ref, onMounted, watch, provide } from 'vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import { databaseService } from '@/services/database';
import { userService } from '@/services/user';

const router = useRouter();
const route = useRoute();
const toast = useToast();

// Estado del sidebar para móviles
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

// Cerrar sidebar al cambiar de ruta en móviles
watch(() => route.path, () => {
  closeSidebar();
});

// Datos del usuario
const userFullName = ref('Usuario');
const userFirstName = ref('Usuario');

// Función para cargar datos del usuario
const loadUserData = async () => {
  try {
    const userData = await userService.getCurrentUser();
    userFirstName.value = userData.name || 'Usuario';
    userFullName.value = userData.name && userData.lastName
      ? `${userData.name} ${userData.lastName}`
      : userData.name || 'Usuario';
  } catch (error) {
    console.log('No se pudieron cargar los datos del usuario:', error);
    // Usar valores por defecto
    userFullName.value = 'Usuario';
    userFirstName.value = 'Usuario';
  }
};

// Computed para compatibilidad con el código existente
const userName = computed(() => userFullName.value);

// Estadísticas del dashboard
const totalDatabases = ref(0);
const maxDatabases = ref(8); // Valor por defecto para plan básico (2 BD × 4 motores)
const currentPlan = ref('Básico');
const isLoadingStats = ref(false);

// Función para cargar estadísticas
const loadStats = async () => {
  if (isLoadingStats.value) return; // Evitar múltiples cargas simultáneas

  try {
    isLoadingStats.value = true;
    const stats = await databaseService.getDashboardStats();
    totalDatabases.value = stats.totalDatabases;
    maxDatabases.value = stats.maxTotalDatabases; // ← Cambiado de maxDatabases a maxTotalDatabases
    currentPlan.value = stats.currentPlan;
  } catch (error) {
    console.log('No se pudieron cargar las estadísticas:', error);
    // Usar valores por defecto
  } finally {
    isLoadingStats.value = false;
  }
};

// Cargar estadísticas y datos del usuario al montar
onMounted(() => {
  loadUserData();
  loadStats();
});

// Recargar estadísticas cuando cambia la ruta (cuando volvemos al dashboard o databases)
watch(() => route.path, (newPath) => {
  if (newPath === '/dashboard' || newPath === '/databases') {
    loadStats();
  }
});

// Proveer función para que otros componentes puedan actualizar las estadísticas
provide('refreshStats', loadStats);

// Calcular el porcentaje de uso
const usagePercentage = computed(() => {
  if (maxDatabases.value === 0) return 0;
  return Math.round((totalDatabases.value / maxDatabases.value) * 100);
});

const getUserInitials = () => {
  const name = userFullName.value;
  if (!name || name === 'Usuario') return 'U';

  const names = name.split(' ');
  if (names.length >= 2 && names[0] && names[1]) {
    return `${names[0][0]}${names[1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const handleLogout = () => {
  authService.logout();
  toast.info('¡Hasta pronto!');
  router.push('/login');
};

const goToPlans = () => {
  router.push('/plans');
};
</script>

<style scoped>
.nav-item {
  position: relative;
}


/* Custom scrollbar para el nav */
nav::-webkit-scrollbar {
  width: 4px;
}

nav::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

nav::-webkit-scrollbar-thumb {
  background: #e1bc47;
  border-radius: 10px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: #f0d470;
}
</style>
