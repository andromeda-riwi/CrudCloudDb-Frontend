<template>
  <div class="container mx-auto max-w-7xl">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Mis Bases de Datos</h1>
      <button
        @click="openCreateModal"
        class="w-full sm:w-auto bg-[#e1bc47] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#f0d470] transition-colors text-sm sm:text-base"
      >
        + Crear Base de Datos
      </button>
    </div>

    <!-- Loading databases -->
    <div v-if="isLoadingDatabases" class="bg-white dark:bg-gray-800 p-12 rounded-lg shadow text-center">
      <svg class="animate-spin h-10 w-10 text-[#e1bc47] mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p class="mt-4 text-gray-600 dark:text-gray-400">Cargando bases de datos...</p>
    </div>

    <!-- Empty state -->
    <div v-else-if="databases.length === 0" class="bg-white dark:bg-gray-800 p-12 rounded-lg shadow text-center">
      <h3 class="text-xl font-medium text-gray-700 dark:text-gray-300">Aún no tienes bases de datos</h3>
      <p class="mt-2 text-gray-500 dark:text-gray-400">¡Crea tu primera base de datos para empezar a gestionar tus proyectos!</p>
      <button
        @click="openCreateModal"
        class="mt-6 bg-[#e1bc47] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#f0d470] transition-colors"
      >
        Crear mi primera base de datos
      </button>
    </div>

    <!-- Database table -->
    <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nombre</th>
          <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Motor</th>
          <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Estado</th>
          <th class="hidden md:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Fecha Creación</th>
          <th class="px-3 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Acciones</th>
        </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
        <tr v-for="db in databases" :key="db.id">
          <td class="px-3 sm:px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900 dark:text-white">{{ db.name }}</div>
          </td>
          <td class="px-3 sm:px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-800 dark:text-gray-300">{{ db.engine }}</div>
          </td>
          <td class="px-3 sm:px-6 py-4 whitespace-nowrap">
            <span
              class="px-2 sm:px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
              :class="getStatusClass(db.status)"
            >
              {{ translateStatus(db.status) }}
            </span>
          </td>
          <td class="hidden md:table-cell px-3 sm:px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-600 dark:text-gray-400">{{ formatDate(db.createdAt) }}</div>
          </td>
          <td class="px-3 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              @click="viewCredentials(db.id)"
              class="text-[#e1bc47] hover:text-[#f0d470] mr-2 sm:mr-4 text-xs sm:text-sm"
              :disabled="db.status !== 'Active'"
            >
              Credenciales
            </button>
            <button
              @click="confirmDelete(db.id, db.name)"
              class="text-red-600 hover:text-red-900 text-xs sm:text-sm"
            >
              Eliminar
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Create Database Modal -->
    <CreateDatabaseModal
      :is-open="isCreateModalOpen"
      @close="closeCreateModal"
      @submit="handleCreateDatabase"
      ref="createModalRef"
    />

    <!-- Credentials Modal -->
    <CredentialsModal
      :is-open="isCredentialsModalOpen"
      :credentials="currentCredentials"
      :is-loading="isLoadingCredentials"
      @close="closeCredentialsModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue';
import { useToast } from 'vue-toastification';
import CreateDatabaseModal from '@/components/CreateDatabaseModal.vue';
import CredentialsModal from '@/components/CredentialsModal.vue';
import { databaseService } from '@/services/database';
import type { Database, DatabaseCredentials, CreateDatabaseRequest } from '@/services/database';

const toast = useToast();

// Inyectar función para refrescar estadísticas del sidebar
const refreshStats = inject<(() => Promise<void>) | undefined>('refreshStats', undefined);

// Helper function to extract error message
const getErrorMessage = (error: unknown, defaultMessage: string): string => {
  console.log('getErrorMessage - error object:', error);

  if (!error) {
    console.log('getErrorMessage - no error, using default');
    return defaultMessage;
  }

  const err = error as { response?: { data?: { message?: string; error?: string } | string; status?: number }; message?: string };

  // Check if it's an Axios error with response
  if (err.response?.data) {
    console.log('getErrorMessage - response.data:', err.response.data);

    // Check for message field
    if (typeof err.response.data === 'object' && err.response.data.message) {
      console.log('getErrorMessage - found message:', err.response.data.message);
      return String(err.response.data.message);
    }

    // Check if data itself is a string
    if (typeof err.response.data === 'string' && err.response.data.trim()) {
      console.log('getErrorMessage - data is string:', err.response.data);
      return err.response.data;
    }

    // Try to get any error property from data
    if (typeof err.response.data === 'object' && err.response.data.error) {
      console.log('getErrorMessage - found error:', err.response.data.error);
      return String(err.response.data.error);
    }
  }

  // Check for error message property
  if (err.message && err.message !== 'Network Error') {
    console.log('getErrorMessage - found error.message:', err.message);
    return err.message;
  }

  console.log('getErrorMessage - using default message:', defaultMessage);
  return defaultMessage;
};

// State
const isLoadingDatabases = ref(true);
const isCreateModalOpen = ref(false);
const isCredentialsModalOpen = ref(false);
const isLoadingCredentials = ref(false);
const databases = ref<Database[]>([]);
const currentCredentials = ref<DatabaseCredentials | null>(null);
const createModalRef = ref<InstanceType<typeof CreateDatabaseModal> | null>(null);

// Load data on mount
onMounted(async () => {
  await loadDatabases();
});

// Load user databases
const loadDatabases = async () => {
  try {
    isLoadingDatabases.value = true;
    databases.value = await databaseService.getUserDatabases();
  } catch (error) {
    console.error('Error loading databases:', error);
    // No mostrar toast si es un error 404 o 405 (endpoint no implementado)
    const err = error as { response?: { status?: number } };
    const status = err.response?.status;

    if (status !== 404 && status !== 405) {
      toast.error(getErrorMessage(error, 'Error al cargar las bases de datos'));
    }
  } finally {
    isLoadingDatabases.value = false;
  }
};

// Create database
const handleCreateDatabase = async (data: CreateDatabaseRequest) => {
  try {
    await databaseService.createDatabase(data);
    toast.success('Base de datos creada exitosamente');
    closeCreateModal();

    // Reload data
    await loadDatabases();

    // Refrescar estadísticas del sidebar
    if (refreshStats) {
      await refreshStats();
    }
  } catch (error) {
    console.error('Error creating database:', error);
    toast.error(getErrorMessage(error, 'Error al crear la base de datos'));
    createModalRef.value?.resetLoading();
  }
};

// View credentials
const viewCredentials = async (databaseId: string) => {
  try {
    isCredentialsModalOpen.value = true;
    isLoadingCredentials.value = true;
    currentCredentials.value = await databaseService.getDatabaseCredentials(databaseId);
  } catch (error) {
    console.error('Error loading credentials:', error);
    toast.error(getErrorMessage(error, 'Error al cargar las credenciales'));
    closeCredentialsModal();
  } finally {
    isLoadingCredentials.value = false;
  }
};

// Delete database
const confirmDelete = async (databaseId: string, databaseName: string) => {
  if (!confirm(`¿Estás seguro de que deseas eliminar la base de datos "${databaseName}"?\n\nEsta acción no se puede deshacer.`)) {
    return;
  }

  try {
    await databaseService.deleteDatabase(databaseId);
    toast.success('Base de datos eliminada exitosamente');

    // Reload data
    await loadDatabases();

    // Refrescar estadísticas del sidebar
    if (refreshStats) {
      await refreshStats();
    }
  } catch (error) {
    console.error('Error deleting database:', error);
    toast.error(getErrorMessage(error, 'Error al eliminar la base de datos'));
  }
};

// Modal handlers
const openCreateModal = () => {
  isCreateModalOpen.value = true;
};

const closeCreateModal = () => {
  isCreateModalOpen.value = false;
};

const closeCredentialsModal = () => {
  isCredentialsModalOpen.value = false;
  currentCredentials.value = null;
};

// Utility functions
const translateStatus = (status: string): string => {
  const statusTranslations: Record<string, string> = {
    'Active': 'Activo',
    'Creating': 'Creando',
    'Error': 'Error',
    'Deleting': 'Eliminando',
    'Pending': 'Pendiente',
    'Inactive': 'Inactivo'
  };
  return statusTranslations[status] || status;
};

const getStatusClass = (status: string) => {
  const statusMap: Record<string, string> = {
    'Active': 'bg-green-100 text-green-800',
    'Creating': 'bg-yellow-100 text-yellow-800',
    'Error': 'bg-red-100 text-red-800',
    'Deleting': 'bg-gray-100 text-gray-800',
    'Pending': 'bg-blue-100 text-blue-800',
    'Inactive': 'bg-gray-100 text-gray-800'
  };
  return statusMap[status] || 'bg-gray-100 text-gray-800';
};

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return 'N/A';

  try {
    const date = new Date(dateString);

    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
      return 'N/A';
    }

    return date.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'N/A';
  }
};
</script>

