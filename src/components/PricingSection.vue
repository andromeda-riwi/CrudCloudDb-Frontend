<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <!-- Plan Gratuito -->
    <div class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 transition-all duration-300">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Gratuito</h3>
      <div class="mb-6">
        <span class="text-4xl font-extrabold text-gray-900 dark:text-white">$0</span>
        <span class="text-gray-600 dark:text-gray-400"> COP/mes</span>
      </div>
      <ul class="space-y-3 mb-8 text-gray-600 dark:text-gray-400">
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Hasta 2 bases de datos por motor
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Soporte comunitario
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Acceso a todos los motores
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Backups diarios
        </li>
      </ul>
      <RouterLink
        to="/register"
        class="block w-full text-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        Empezar Gratis
      </RouterLink>
    </div>

    <!-- Plan Intermedio -->
    <div class="bg-gradient-to-br from-black to-gray-900 rounded-lg p-8 shadow-2xl border-2 border-[#e1bc47] transform scale-105 transition-all duration-300">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-2xl font-bold text-[#e1bc47]">Intermedio</h3>
        <span class="bg-[#e1bc47] text-black text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
      </div>
      <div class="mb-6">
        <span class="text-4xl font-extrabold text-[#e1bc47]">$5.000</span>
        <span class="text-gray-300"> COP/mes</span>
      </div>
      <ul class="space-y-3 mb-8 text-gray-300">
        <li class="flex items-start">
          <svg class="w-5 h-5 text-[#e1bc47] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Hasta 5 bases de datos por motor
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-[#e1bc47] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Soporte prioritario por email
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-[#e1bc47] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Acceso a todos los motores
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-[#e1bc47] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Backups cada 6 horas
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-[#e1bc47] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Monitoreo avanzado
        </li>
      </ul>
      <RouterLink
        to="/register"
        class="block w-full text-center bg-[#e1bc47] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#f0d470] transition-colors"
      >
        Comenzar Ahora
      </RouterLink>
    </div>

    <!-- Plan Avanzado -->
    <div class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 transition-all duration-300">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Avanzado</h3>
      <div class="mb-6">
        <span class="text-4xl font-extrabold text-gray-900 dark:text-white">$10.000</span>
        <span class="text-gray-600 dark:text-gray-400"> COP/mes</span>
      </div>
      <ul class="space-y-3 mb-8 text-gray-600 dark:text-gray-400">
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Hasta 10 bases de datos por motor
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Soporte prioritario 24/7
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Acceso a todos los motores
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Backups en tiempo real
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Alta disponibilidad (99.9%)
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Métricas personalizadas
        </li>
      </ul>
      <RouterLink
        to="/register"
        class="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-black font-bold py-3 px-6 rounded-lg hover:bg-black dark:hover:bg-gray-100 transition-colors"
      >
        Comenzar Ahora
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

