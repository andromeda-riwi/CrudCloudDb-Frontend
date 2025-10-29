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
        <label for="email" class="block text-sm font-medium text-gray-700">
          Correo Electrónico
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="tu@correo.com"
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
import { RouterLink } from 'vue-router';

// Variables reactivas para los campos del formulario
const email = ref('');
const password = ref('');

const handleLogin = async () => {
  // 1. Verificamos los datos capturados
  console.log('Intentando iniciar sesión con:', {
    email: email.value,
    password: password.value,
  });

  // 2. Preparamos el payload para la API
  const payload = {
    email: email.value,
    password: password.value,
  };

  // 3. TODO: Llamar al endpoint de la API con Axios para autenticar
  //    y, si es exitoso, guardar el token JWT y redirigir al dashboard.
  //
  //    Ejemplo:
  //    try {
  //      const response = await axios.post('/api/Auth/login', payload);
  //      const token = response.data.token;
  //      // Guardar token en Pinia/localStorage
  //      // router.push('/dashboard');
  //    } catch (error) {
  //      console.error('Error de autenticación:', error);
  //      // Mostrar mensaje de error (ej. "Credenciales incorrectas")
  //    }
};
</script>
