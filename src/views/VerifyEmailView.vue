<template>
  <div class="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
    <div class="text-center space-y-3">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Verificación de correo</h1>
      <p class="text-gray-500 dark:text-gray-400">
        {{ descriptionMessage }}
      </p>
    </div>

    <div class="flex flex-col items-center space-y-4">
      <div
        class="w-16 h-16 flex items-center justify-center rounded-full"
        :class="statusColor"
      >
        <span class="text-2xl">
          <template v-if="status === 'loading'">⏳</template>
          <template v-else-if="status === 'success'">✅</template>
          <template v-else>⚠️</template>
        </span>
      </div>

      <p class="text-center text-gray-700 dark:text-gray-300">
        {{ statusMessage }}
      </p>

      <RouterLink
        v-if="status !== 'loading'"
        to="/login"
        class="text-[#e1bc47] hover:text-[#f0d470]"
      >
        Ir al inicio de sesión
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { authService } from '@/services/auth';

type Status = 'loading' | 'success' | 'error';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const status = ref<Status>('loading');
const descriptionMessage = ref('Estamos validando tu token de verificación.');
const statusMessage = ref('Validando tu correo, por favor espera...');

const statusColor = computed(() => {
  if (status.value === 'success') return 'bg-green-100 text-green-700';
  if (status.value === 'error') return 'bg-red-100 text-red-700';
  return 'bg-yellow-100 text-yellow-700';
});

const verifyEmail = async () => {
  const token = route.query.token as string | undefined;

  if (!token) {
    status.value = 'error';
    descriptionMessage.value = 'El enlace es inválido o está incompleto.';
    statusMessage.value = 'No pudimos encontrar un token de verificación válido.';
    toast.error('Token inválido. Solicita un nuevo correo de verificación.');
    return;
  }

  try {
    await authService.verifyEmail(token);
    status.value = 'success';
    descriptionMessage.value = 'Tu correo quedó verificado correctamente.';
    statusMessage.value = 'Redirigiendo al inicio de sesión...';
    toast.success('Correo verificado. Ahora puedes iniciar sesión.');

    setTimeout(() => {
      router.push('/login');
    }, 2500);
  } catch (error: any) {
    status.value = 'error';
    const message = error?.response?.data?.message ?? 'No se pudo verificar el correo.';
    descriptionMessage.value = 'El token pudo expirar o ya fue utilizado.';
    statusMessage.value = message;
    toast.error(message);
  }
};

onMounted(() => {
  verifyEmail();
});
</script>


