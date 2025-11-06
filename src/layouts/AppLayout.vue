﻿<template>
  <div class="flex h-screen bg-gray-50">
    <aside class="w-64 flex-shrink-0 bg-black p-4 text-white">
      <h1 class="text-2xl font-bold mb-8 text-[#e1bc47]">ApexDB</h1>
      <nav>
        <RouterLink to="/dashboard" class="block py-2.5 px-4 rounded hover:bg-gray-800 text-gray-300 hover:text-[#e1bc47] transition-colors">Dashboard</RouterLink>
        <RouterLink to="/plans" class="block py-2.5 px-4 rounded hover:bg-gray-800 text-gray-300 hover:text-[#e1bc47] transition-colors">Planes</RouterLink>
      </nav>
    </aside>

    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="bg-white shadow p-4">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold text-gray-900">Bienvenido, {{ userName }}</h2>
          <button
            @click="handleLogout"
            class="px-4 py-2 text-sm font-medium text-black bg-[#e1bc47] rounded-md hover:bg-[#f0d470] transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { authService } from '@/services/auth';
import { computed } from 'vue';

const router = useRouter();
const toast = useToast();

const userName = computed(() => authService.getUserName());

const handleLogout = () => {
  authService.logout();
  toast.info('¡Hasta pronto!');
  router.push('/login');
};
</script>
