<template>
  <div class="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Recupera tu contraseña</h1>
      <p class="mt-2 text-gray-500 dark:text-gray-400">
        Ingresa el correo asociado a tu cuenta y te enviaremos un enlace para restablecer tu contraseña.
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Correo electrónico
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="tu@correo.com"
          class="w-full px-3 py-2 mt-1 text-gray-800 dark:text-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#e1bc47] focus:border-[#e1bc47]"
        />
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full px-4 py-2 font-semibold text-black bg-[#e1bc47] rounded-md hover:bg-[#f0d470] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e1bc47] disabled:opacity-60"
      >
        {{ loading ? 'Enviando...' : 'Enviar correo' }}
      </button>
    </form>

    <div class="text-center text-sm">
      <RouterLink to="/login" class="text-[#e1bc47] hover:text-[#f0d470]">
        Volver al inicio de sesión
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useToast } from 'vue-toastification';
import { authService } from '@/services/auth';

const toast = useToast();
const email = ref('');
const loading = ref(false);

const handleSubmit = async () => {
  if (!email.value) {
    toast.warning('Ingresa un correo válido.');
    return;
  }

  loading.value = true;
  try {
    await authService.forgotPassword(email.value);
    toast.success('Si el correo existe, recibirás instrucciones en unos minutos.');
    email.value = '';
  } catch (error: any) {
    console.error(error);
    const message = error?.response?.data?.message ?? 'No se pudo enviar la solicitud. Intenta más tarde.';
    toast.error(message);
  } finally {
    loading.value = false;
  }
};
</script>


