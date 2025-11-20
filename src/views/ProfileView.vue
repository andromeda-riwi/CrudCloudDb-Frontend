<template>
  <div class="space-y-8 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Perfil de Usuario</h1>

    <!-- Sección: Información Personal -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">Información Personal</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Actualiza tus datos básicos.</p>
      </div>
      <div class="p-6">
        <form @submit.prevent="updateProfile" class="space-y-6">
          <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
              <input v-model="profileForm.name" type="text" class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e1bc47] focus:border-[#e1bc47] dark:bg-gray-700 dark:text-white sm:text-sm">
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Apellido</label>
              <input v-model="profileForm.lastName" type="text" class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e1bc47] focus:border-[#e1bc47] dark:bg-gray-700 dark:text-white sm:text-sm">
            </div>

            <div class="sm:col-span-4">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input v-model="profileForm.email" type="email" class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e1bc47] focus:border-[#e1bc47] dark:bg-gray-700 dark:text-white sm:text-sm">
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Si cambias tu email, tendrás que verificarlo nuevamente.</p>
            </div>

            <div class="sm:col-span-2">
               <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Usuario</label>
               <input v-model="userNameDisplay" type="text" disabled class="mt-1 block w-full bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm py-2 px-3 text-gray-500 dark:text-gray-400 sm:text-sm cursor-not-allowed">
            </div>
          </div>

          <div class="flex justify-end">
            <button type="submit" :disabled="updatingProfile" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-[#e1bc47] hover:bg-[#f0d470] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e1bc47] disabled:opacity-50">
              {{ updatingProfile ? 'Guardando...' : 'Guardar Cambios' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Sección: Cambiar Contraseña -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">Seguridad</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Cambia tu contraseña de acceso.</p>
      </div>
      <div class="p-6">
        <form @submit.prevent="changePassword" class="space-y-6 max-w-lg">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Contraseña Actual</label>
            <input v-model="passwordForm.currentPassword" type="password" required class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e1bc47] focus:border-[#e1bc47] dark:bg-gray-700 dark:text-white sm:text-sm">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nueva Contraseña</label>
            <input v-model="passwordForm.newPassword" type="password" required class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e1bc47] focus:border-[#e1bc47] dark:bg-gray-700 dark:text-white sm:text-sm">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirmar Nueva Contraseña</label>
            <input v-model="passwordForm.confirmPassword" type="password" required class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e1bc47] focus:border-[#e1bc47] dark:bg-gray-700 dark:text-white sm:text-sm">
          </div>

          <div class="flex justify-end">
            <button type="submit" :disabled="updatingPassword" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50">
              {{ updatingPassword ? 'Actualizando...' : 'Cambiar Contraseña' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Sección: Detalles del Plan -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden" v-if="planDetails">
      <div class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">Tu Plan</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Detalles de tu suscripción actual.</p>
        </div>
        <span class="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          {{ planDetails.planName }}
        </span>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Precio Mensual</dt>
            <dd class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">${{ planDetails.monthlyPrice }}</dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Bases de Datos Totales</dt>
            <dd class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">{{ planDetails.totalDatabases }}</dd>
          </div>
          <div class="sm:col-span-2">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Uso por Motor</dt>
            <dd class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <ul class="grid grid-cols-2 gap-4">
                <li v-for="(count, engine) in planDetails.databaseCountByEngine" :key="engine" class="flex justify-between">
                  <span class="text-sm text-gray-700 dark:text-gray-300 font-medium">{{ engine }}</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">{{ count }} / {{ planDetails.databaseLimitPerEngine }}</span>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
        <div class="mt-6" v-if="planDetails.canUpgrade">
          <router-link to="/plans" class="text-[#e1bc47] hover:text-[#f0d470] font-medium text-sm">
            Mejorar mi plan &rarr;
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { userService, type UserPlanDetails } from '@/services/user';
import { useToast } from 'vue-toastification';

const toast = useToast();
const updatingProfile = ref(false);
const updatingPassword = ref(false);
const userNameDisplay = ref('');
const planDetails = ref<UserPlanDetails | null>(null);

const profileForm = ref({
  name: '',
  lastName: '',
  email: ''
});

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

const loadUserData = async () => {
  try {
    const user = await userService.getCurrentUser();
    profileForm.value.name = user.name;
    profileForm.value.lastName = user.lastName;
    profileForm.value.email = user.email;
    userNameDisplay.value = user.userName;

    // Cargar plan
    planDetails.value = await userService.getUserPlan();
  } catch (error) {
    console.error('Error cargando perfil:', error);
    toast.error('No se pudo cargar la información del perfil');
  }
};

const updateProfile = async () => {
  updatingProfile.value = true;
  try {
    await userService.updateProfile(profileForm.value);
    toast.success('Perfil actualizado exitosamente');
  } catch (error: any) {
    const msg = error.response?.data?.message || 'Error al actualizar perfil';
    toast.error(msg);
  } finally {
    updatingProfile.value = false;
  }
};

const changePassword = async () => {
  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    toast.error('Las nuevas contraseñas no coinciden');
    return;
  }

  updatingPassword.value = true;
  try {
    await userService.changePassword(passwordForm.value);
    toast.success('Contraseña actualizada correctamente');
    passwordForm.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  } catch (error: any) {
    const msg = error.response?.data?.message || 'Error al cambiar contraseña';
    toast.error(msg);
  } finally {
    updatingPassword.value = false;
  }
};

onMounted(() => {
  loadUserData();
});
</script>

