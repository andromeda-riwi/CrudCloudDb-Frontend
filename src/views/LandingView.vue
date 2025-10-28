<template>
  <div class="bg-gray-50">
    <div class="container mx-auto px-4 py-20 text-center">
      <h1 class="text-5xl font-bold text-gray-800 mb-4">
        Bienvenido a CrudCloudDb Platform
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        La solución todo-en-uno para gestionar tus bases de datos en la nube de forma sencilla.
      </p>
      <div>
        <RouterLink
          to="/register"
          class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Comienza Gratis
        </RouterLink>
        <RouterLink
          to="/login"
          class="ml-4 bg-transparent text-blue-600 font-bold py-3 px-6 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
        >
          Iniciar Sesión
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
