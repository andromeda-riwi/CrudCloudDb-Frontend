﻿<template>
  <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900">Crea tu Cuenta</h1>
      <p class="mt-2 text-gray-500">
        ¿Ya tienes una?
        <RouterLink to="/login" class="font-medium text-[#e1bc47] hover:text-[#f0d470]">
          Inicia sesión
        </RouterLink>
      </p>
    </div>

    <form @submit.prevent="handleRegister" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          id="name"
          v-model="name"
          type="text"
          required
          placeholder=""
          class="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#e1bc47] focus:border-[#e1bc47]"
        />
      </div>
      <div>
        <label for="lastName" class="block text-sm font-medium text-gray-700">
          Apellido
        </label>
        <input
          id="lastName"
          v-model="lastName"
          type="text"
          required
          placeholder=""
          class="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#e1bc47] focus:border-[#e1bc47]"
        />
      </div>
      <div>
        <label for="userName" class="block text-sm font-medium text-gray-700">
          Nombre de usuario
        </label>
        <input
          id="userName"
          v-model="userName"
          type="text"
          required
          placeholder=""
          class="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#e1bc47] focus:border-[#e1bc47]"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Correo Electrónico
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="tu@correo.com"
          class="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#e1bc47] focus:border-[#e1bc47]"
        />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="••••••••"
          class="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#e1bc47] focus:border-[#e1bc47]"
        />
      </div>

      <div v-if="password.length > 0" class="w-full">
        <div class="h-2 w-full bg-gray-200 rounded">
          <div class="h-full rounded transition-all duration-300" :class="strengthBarClasses"></div>
        </div>
        <p class="text-xs mt-1" :class="strengthTextClasses">
          {{ strengthText }}
        </p>
      </div>
      <div>
        <label for="password-confirm" class="block text-sm font-medium text-gray-700">
          Confirmar Contraseña
        </label>
        <input
          id="password-confirm"
          v-model="passwordConfirm"
          type="password"
          required
          placeholder="••••••••"
          class="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#e1bc47] focus:border-[#e1bc47]"
        />
        <p v-if="passwordsDoNotMatch" class="text-xs text-red-500 mt-1">
          Las contraseñas no coinciden.
        </p>
      </div>
      <div>
        <button
          type="submit"
          class="w-full px-4 py-3 mt-4 font-semibold text-black bg-[#e1bc47] rounded-md hover:bg-[#f0d470] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e1bc47] disabled:bg-gray-400"
          :disabled="passwordsDoNotMatch"
        >
          Registrarse
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import apiClient from '@/services/api';

const router = useRouter();
const toast = useToast();

// Variables reactivas para los campos del formulario

const name = ref('');
const lastName = ref('');
const userName = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref(''); // <-- Nueva variable para confirmar contraseña

// Lógica para validar que las contraseñas coincidan
const passwordsDoNotMatch = computed(() => {
  // Se activa solo si ambos campos tienen texto y no son iguales
  return password.value !== '' && passwordConfirm.value !== '' && password.value !== passwordConfirm.value;
});

// --- Lógica para el Medidor de Seguridad ---
const passwordStrength = computed(() => {
  let score = 0;
  if (!password.value) return 0;

  // Criterios para evaluar la contraseña
  if (password.value.length >= 8) score++;
  if (/[a-z]/.test(password.value)) score++;
  if (/[A-Z]/.test(password.value)) score++;
  if (/[0-9]/.test(password.value)) score++;
  if (/[^A-Za-z0-9]/.test(password.value)) score++; // Caracteres especiales

  return score;
});

const strengthBarClasses = computed(() => {
  switch (passwordStrength.value) {
    case 1: return 'w-1/5 bg-red-500';
    case 2: return 'w-2/5 bg-orange-500';
    case 3: return 'w-3/5 bg-yellow-500';
    case 4: return 'w-4/5 bg-blue-500';
    case 5: return 'w-full bg-green-500';
    default: return 'w-0';
  }
});

const strengthText = computed(() => {
  switch (passwordStrength.value) {
    case 1: return 'Muy débil';
    case 2: return 'Débil';
    case 3: return 'Aceptable';
    case 4: return 'Buena';
    case 5: return 'Excelente';
    default: return '';
  }
});

const strengthTextClasses = computed(() => {
  switch (passwordStrength.value) {
    case 1: return 'text-red-500';
    case 2: return 'text-orange-500';
    case 3: return 'text-yellow-600';
    case 4: return 'text-blue-500';
    case 5: return 'text-green-500';
    default: return 'text-gray-500';
  }
});
// --- Fin de la lógica del medidor ---

const handleRegister = async () => {
  if (password.value !== passwordConfirm.value) {
    toast.error('Las contraseñas no coinciden. Por favor, verifica.');
    return; // Detiene la ejecución si no coinciden
  }

  const payload = {
    name: name.value,
    lastName: lastName.value,
    userName: userName.value,
    email: email.value,
    password: password.value,
  };

  // 4. Implementamos la llamada a la API
  try {
    const response = await apiClient.post('/Auth/register', payload);
    console.log('Registro exitoso:', response.data);
    toast.success('¡Cuenta creada exitosamente! Ahora serás redirigido para iniciar sesión.');
    router.push('/login');
  } catch (error) {
    console.error('Error en el registro:', error);
    toast.error('Ocurrió un error al crear la cuenta. Es posible que el correo o el nombre de usuario ya existan.');
  }
};
</script>
