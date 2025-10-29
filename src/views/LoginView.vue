<template>
  <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800">Inicia Sesión</h1>
      <p class="mt-2 text-gray-500">
        ¿Aún no tienes una cuenta?
        <RouterLink to="/register" class="font-medium text-blue-600 hover:underline">
          Regístrate gratis
        </RouterLink>
      </p>
    </div>

    <form @submit.prevent="handleLogin" class="space-y-6">
      <div>
        <label for="identifier" class="block text-sm font-medium text-gray-700">
          Correo Electrónico o Nombre de Usuario
        </label>
        <input
          id="identifier"
          v-model="identifier"
          type="text"
          required
          placeholder="tu@correo.com o tu usuario"
          class="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <a href="#" class="text-sm text-blue-600 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="••••••••"
          class="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <button
          type="submit"
          class="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Entrar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import apiClient from '@/services/api';

const router = useRouter();

// Usamos 'identifier' para capturar el email o el username
const identifier = ref('');
const password = ref('');

const handleLogin = async () => {
  let payload = {};

  // Detectamos si el usuario ingresó un email o un username
  if (identifier.value.includes('@')) {
    payload = {
      email: identifier.value,
      password: password.value,
    };
  } else {
    payload = {
      userName: identifier.value,
      password: password.value,
    };
  }

  try {
    const response = await apiClient.post('/Auth/login', payload);
    console.log('Login exitoso:', response.data);

    // TODO: Guardar el token JWT que devuelva el backend
    // const token = response.data.token;
    // localStorage.setItem('authToken', token);

    router.push('/dashboard');
  } catch (error) {
    console.error('Error de autenticación:', error);
    alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
  }
};
</script>
