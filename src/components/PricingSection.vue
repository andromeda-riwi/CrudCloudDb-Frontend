﻿<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
    <!-- Plan Gratuito -->
    <div class="bg-white dark:bg-gray-900 rounded-lg p-6 sm:p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 transition-all duration-300">
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
      <button
        v-if="isAuthenticated"
        @click="handlePlanClick(1)"
        :disabled="getButtonDisabled(1)"
        :class="getButtonClass(1)"
        class="block w-full text-center font-bold py-3 px-6 rounded-lg transition-colors"
      >
        {{ getButtonText(1) }}
      </button>
      <RouterLink
        v-else
        to="/register"
        class="block w-full text-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        Empezar Gratis
      </RouterLink>
    </div>

    <!-- Plan Intermedio -->
    <div class="bg-gradient-to-br from-black to-gray-900 rounded-lg p-6 sm:p-8 shadow-2xl border-2 border-[#e1bc47] lg:transform lg:scale-105 transition-all duration-300">
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
      <button
        v-if="isAuthenticated"
        @click="handlePlanClick(2)"
        :disabled="getButtonDisabled(2)"
        :class="getButtonClass(2)"
        class="block w-full text-center font-bold py-3 px-6 rounded-lg transition-colors"
      >
        {{ getButtonText(2) }}
      </button>
      <RouterLink
        v-else
        to="/register"
        class="block w-full text-center bg-[#e1bc47] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#f0d470] transition-colors"
      >
        Comenzar Ahora
      </RouterLink>
    </div>

    <!-- Plan Avanzado -->
    <div class="bg-white dark:bg-gray-900 rounded-lg p-6 sm:p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700 transition-all duration-300">
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
      <button
        v-if="isAuthenticated"
        @click="handlePlanClick(3)"
        :disabled="getButtonDisabled(3)"
        :class="getButtonClass(3)"
        class="block w-full text-center font-bold py-3 px-6 rounded-lg transition-colors"
      >
        {{ getButtonText(3) }}
      </button>
      <RouterLink
        v-else
        to="/register"
        class="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-black font-bold py-3 px-6 rounded-lg hover:bg-black dark:hover:bg-gray-100 transition-colors"
      >
        Comenzar Ahora
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { authService } from '@/services/auth';
import { paymentService } from '@/services/payment';
import { userService } from '@/services/user';

const router = useRouter();
const loading = ref(false);
const currentUserPlanId = ref<number | null>(null);
const isAuthenticated = computed(() => authService.isAuthenticated());

// Cargar el plan actual del usuario al montar el componente
onMounted(async () => {
  if (isAuthenticated.value) {
    try {
      const user = await userService.getCurrentUser();
      currentUserPlanId.value = user.planId;
    } catch (error) {
      console.error('Error al obtener información del usuario:', error);
      // Si hay error al obtener el usuario, podría ser token expirado
      currentUserPlanId.value = null;
    }
  }
});

// Determinar el texto del botón según el plan actual del usuario
const getButtonText = (planId: number): string => {
  if (loading.value) {
    return 'Procesando...';
  }

  if (currentUserPlanId.value === null) {
    return planId === 1 ? 'Empezar Gratis' : 'Comenzar Ahora';
  }

  if (currentUserPlanId.value === planId) {
    return 'Plan Actual';
  }

  if (planId > currentUserPlanId.value) {
    return 'Mejorar Plan';
  }

  return 'Cambiar Plan';
};

// Determinar si el botón debe estar deshabilitado
const getButtonDisabled = (planId: number): boolean => {
  // Deshabilitar si está cargando
  if (loading.value) {
    return true;
  }

  // Deshabilitar si es el plan actual
  if (currentUserPlanId.value === planId) {
    return true;
  }

  return false;
};

// Determinar las clases CSS del botón según el plan y estado
const getButtonClass = (planId: number): string => {
  const isCurrentPlan = currentUserPlanId.value === planId;
  const isDisabled = getButtonDisabled(planId);

  // Clases base
  let classes = '';

  // Clases específicas por plan
  if (planId === 1) {
    classes = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white';
    if (!isDisabled) {
      classes += ' hover:bg-gray-200 dark:hover:bg-gray-700';
    }
  } else if (planId === 2) {
    classes = 'bg-[#e1bc47] text-black';
    if (!isDisabled) {
      classes += ' hover:bg-[#f0d470]';
    }
  } else if (planId === 3) {
    classes = 'bg-gray-900 dark:bg-white text-white dark:text-black';
    if (!isDisabled) {
      classes += ' hover:bg-black dark:hover:bg-gray-100';
    }
  }

  // Agregar clases de deshabilitado
  if (isDisabled) {
    classes += ' opacity-50 cursor-not-allowed';
  }

  return classes;
};

const handlePlanClick = async (planId: number) => {
  // No hacer nada si el usuario no está autenticado (no debería llegar aquí)
  if (!isAuthenticated.value) {
    router.push('/register');
    return;
  }

  // No hacer nada si es el plan actual
  if (currentUserPlanId.value === planId) {
    return;
  }

  // Si es el plan gratuito y el usuario tiene un plan superior, podría ser un downgrade
  // Por ahora, redirigimos al registro o mostramos un mensaje
  if (planId === 1) {
    alert('Para cambiar al plan gratuito, por favor contacta con soporte.');
    return;
  }

  // Si está autenticado y no es el plan actual, procesar el pago
  loading.value = true;

  try {
    // Llamar al backend para crear la preferencia de pago
    const response = await paymentService.createPreference(planId);

    // Redirigir a la pasarela de pagos
    paymentService.redirectToPayment(response.initPoint);
  } catch (error: any) {
    loading.value = false;

    // Manejar errores
    if (error.response?.status === 401) {
      alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
      router.push('/login');
    } else if (error.response?.status === 400) {
      alert(error.response?.data?.message || 'Error al procesar el pago. Por favor, intenta nuevamente.');
    } else {
      alert('Ocurrió un error al procesar tu solicitud. Por favor, intenta más tarde.');
    }

    console.error('Error al crear preferencia de pago:', error);
  }
};
</script>

