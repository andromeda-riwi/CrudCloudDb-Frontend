﻿<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-4xl font-bold text-gray-800">Dashboard</h1>
      <button
        @click="openCreateModal"
        class="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        + Crear Base de Datos
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="isLoadingStats" class="flex justify-center items-center py-12">
      <svg class="animate-spin h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>

    <template v-else>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          v-for="stat in summaryStats"
          :key="stat.title"
          :title="stat.title"
          :value="stat.value"
          :subtitle="stat.subtitle"
        />
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Mis Bases de Datos</h2>

      <!-- Loading databases -->
      <div v-if="isLoadingDatabases" class="bg-white p-12 rounded-lg shadow text-center">
        <svg class="animate-spin h-10 w-10 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="mt-4 text-gray-600">Cargando bases de datos...</p>
      </div>

      <!-- Empty state -->
      <div v-else-if="databases.length === 0" class="bg-white p-12 rounded-lg shadow text-center">
        <h3 class="text-xl font-medium text-gray-700">Aún no tienes bases de datos</h3>
        <p class="mt-2 text-gray-500">¡Crea tu primera base de datos para empezar a gestionar tus proyectos!</p>
        <button
          @click="openCreateModal"
          class="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Crear mi primera base de datos
        </button>
      </div>

      <!-- Database table -->
      <div v-else class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Motor</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Creación</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="db in databases" :key="db.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">{{ db.name }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-800">{{ db.engineType }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
                :class="getStatusClass(db.status)"
              >
                {{ db.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-600">{{ formatDate(db.createdAt) }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                @click="viewCredentials(db.id)"
                class="text-indigo-600 hover:text-indigo-900 mr-4"
                :disabled="db.status !== 'Active'"
              >
                Credenciales
              </button>
              <button
                @click="confirmDelete(db.id, db.name)"
                class="text-red-600 hover:text-red-900"
              >
                Eliminar
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </template>

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
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';
import StatCard from '@/components/StatCard.vue';
import CreateDatabaseModal from '@/components/CreateDatabaseModal.vue';
import CredentialsModal from '@/components/CredentialsModal.vue';
import { databaseService } from '@/services/database';
import type { Database, DatabaseCredentials, CreateDatabaseRequest } from '@/services/database';

const toast = useToast();

// State
const isLoadingStats = ref(true);
const isLoadingDatabases = ref(true);
const isCreateModalOpen = ref(false);
const isCredentialsModalOpen = ref(false);
const isLoadingCredentials = ref(false);
const databases = ref<Database[]>([]);
const currentCredentials = ref<DatabaseCredentials | null>(null);
const createModalRef = ref<InstanceType<typeof CreateDatabaseModal> | null>(null);

// Summary stats
const summaryStats = ref([
  {
    title: 'Plan Actual',
    value: 'Cargando...',
    subtitle: ''
  },
  {
    title: 'Bases de Datos Usadas',
    value: '0 / 0',
    subtitle: ''
  },
  {
    title: 'Coste Mensual',
    value: '$0 COP',
    subtitle: ''
  }
]);

// Load data on mount
onMounted(async () => {
  await Promise.all([loadDashboardStats(), loadDatabases()]);
});

// Load dashboard statistics
const loadDashboardStats = async () => {
  try {
    isLoadingStats.value = true;
    const stats = await databaseService.getDashboardStats();

    // Calculate database usage by engine
    const dbByEngine = Object.entries(stats.databasesByEngine)
      .map(([engine, count]) => `${count} ${engine}`)
      .join(', ') || 'Ninguna';

    summaryStats.value = [
      {
        title: 'Plan Actual',
        value: stats.currentPlan,
        subtitle: ''
      },
      {
        title: 'Bases de Datos Usadas',
        value: `${stats.totalDatabases} / ${stats.maxDatabases}`,
        subtitle: dbByEngine
      },
      {
        title: 'Coste Mensual',
        value: `$${stats.monthlyPrice.toLocaleString('es-CO')} COP`,
        subtitle: stats.nextBillingDate ? `Próximo cobro: ${formatDate(stats.nextBillingDate)}` : ''
      }
    ];
  } catch (error) {
    console.error('Error loading stats:', error);
    // No mostrar toast si es un error 404 (endpoint no implementado)
    const status = error && typeof error === 'object' && 'response' in error
      ? (error.response as any)?.status
      : null;

    if (status !== 404) {
      const message = error && typeof error === 'object' && 'response' in error
        ? (error.response as any)?.data?.message
        : 'Error al cargar las estadísticas';
      toast.error(message);
    }
  } finally {
    isLoadingStats.value = false;
  }
};

// Load user databases
const loadDatabases = async () => {
  try {
    isLoadingDatabases.value = true;
    databases.value = await databaseService.getUserDatabases();
  } catch (error) {
    console.error('Error loading databases:', error);
    // No mostrar toast si es un error 404 (endpoint no implementado)
    const status = error && typeof error === 'object' && 'response' in error
      ? (error.response as any)?.status
      : null;

    if (status !== 404) {
      const message = error && typeof error === 'object' && 'response' in error
        ? (error.response as any)?.data?.message
        : 'Error al cargar las bases de datos';
      toast.error(message);
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
    await Promise.all([loadDashboardStats(), loadDatabases()]);
  } catch (error) {
    console.error('Error creating database:', error);
    const message = error && typeof error === 'object' && 'response' in error
      ? (error.response as any)?.data?.message
      : 'Error al crear la base de datos';
    toast.error(message);
    createModalRef.value?.resetLoading();
  }
};

// View credentials
const viewCredentials = async (databaseId: number) => {
  try {
    isCredentialsModalOpen.value = true;
    isLoadingCredentials.value = true;
    currentCredentials.value = await databaseService.getDatabaseCredentials(databaseId);
  } catch (error) {
    console.error('Error loading credentials:', error);
    const message = error && typeof error === 'object' && 'response' in error
      ? (error.response as any)?.data?.message
      : 'Error al cargar las credenciales';
    toast.error(message);
    closeCredentialsModal();
  } finally {
    isLoadingCredentials.value = false;
  }
};

// Delete database
const confirmDelete = async (databaseId: number, databaseName: string) => {
  if (!confirm(`¿Estás seguro de que deseas eliminar la base de datos "${databaseName}"?\n\nEsta acción no se puede deshacer.`)) {
    return;
  }

  try {
    await databaseService.deleteDatabase(databaseId);
    toast.success('Base de datos eliminada exitosamente');

    // Reload data
    await Promise.all([loadDashboardStats(), loadDatabases()]);
  } catch (error) {
    console.error('Error deleting database:', error);
    const message = error && typeof error === 'object' && 'response' in error
      ? (error.response as any)?.data?.message
      : 'Error al eliminar la base de datos';
    toast.error(message);
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
const getStatusClass = (status: string) => {
  const statusMap: Record<string, string> = {
    'Active': 'bg-green-100 text-green-800',
    'Creating': 'bg-yellow-100 text-yellow-800',
    'Error': 'bg-red-100 text-red-800',
    'Deleting': 'bg-gray-100 text-gray-800'
  };
  return statusMap[status] || 'bg-gray-100 text-gray-800';
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
</script>
