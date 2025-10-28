<template>
  <div class="flex h-screen bg-gray-50">
    <aside class="w-64 flex-shrink-0 bg-gray-800 p-4 text-white">
      <h1 class="text-2xl font-bold mb-8">CCD Platform</h1>
      <nav>
        <RouterLink to="/dashboard" class="block py-2.5 px-4 rounded hover:bg-gray-700">Dashboard</RouterLink>
        <RouterLink to="/plans" class="block py-2.5 px-4 rounded hover:bg-gray-700">Planes</RouterLink>
      </nav>
    </aside>

    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="bg-white shadow p-4">
        <div class="flex justify-end">
          <span>Usuario Logueado</span>
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>
