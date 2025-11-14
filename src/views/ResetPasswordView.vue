<template>
  <div class="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
    <div class="text-center" v-if="!token">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Token inválido</h1>
      <p class="mt-2 text-gray-500 dark:text-gray-400">
        El enlace de recuperación es inválido o ha expirado. Solicita uno nuevo desde
        <RouterLink to="/forgot-password" class="text-[#e1bc47] hover:text-[#f0d470]">¿Olvidaste tu contraseña?</RouterLink>
      </p>
      <RouterLink to="/login" class="inline-block mt-6 text-[#e1bc47] hover:text-[#f0d470]">Volver al inicio de sesión</RouterLink>
    </div>

    <template v-else>
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Restablece tu contraseña</h1>
        <p class="mt-2 text-gray-500 dark:text-gray-400">
          Crea una nueva contraseña segura para tu cuenta.
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nueva contraseña
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            minlength="6"
            placeholder="••••••••"
            class="w-full px-3 py-2 mt-1 text-gray-800 dark:text-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#e1bc47] focus:border-[#e1bc47]"
          />
        </div>

        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Confirmar contraseña
          </label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            required
            minlength="6"
            placeholder="••••••••"
            class="w-full px-3 py-2 mt-1 text-gray-800 dark:text-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#e1bc47] focus:border-[#e1bc47]"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full px-4 py-2 font-semibold text-black bg-[#e1bc47] rounded-md hover:bg-[#f0d470] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e1bc47] disabled:opacity-60"
        >
          {{ loading ? 'Actualizando...' : 'Actualizar contraseña' }}
        </button>
      </form>

      <div class="text-center text-sm">
        <RouterLink to="/login" class="text-[#e1bc47] hover:text-[#f0d470]">
          Volver al inicio de sesión
        </RouterLink>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { useToast } from 'vue-toastification';
import { authService } from '@/services/auth';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const token = computed(() => (route.query.token as string) ?? '');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);

const handleSubmit = async () => {
  if (!token.value) {
    toast.error('El token de recuperación no es válido.');
    return;
  }
  if (password.value.length < 6) {
    toast.warning('La contraseña debe tener al menos 6 caracteres.');
    return;
  }
  if (password.value !== confirmPassword.value) {
    toast.warning('Las contraseñas no coinciden.');
    return;
  }

  loading.value = true;
  try {
    await authService.resetPassword(token.value, password.value);
    toast.success('Contraseña actualizada. Ahora puedes iniciar sesión.');
    password.value = '';
    confirmPassword.value = '';
    router.push('/login');
  } catch (error: any) {
    console.error(error);
    const message = error?.response?.data?.message ?? 'No se pudo restablecer la contraseña.';
    toast.error(message);
  } finally {
    loading.value = false;
  }
};
</script>


