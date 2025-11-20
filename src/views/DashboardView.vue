git﻿﻿<template>
  <div class="container mx-auto max-w-7xl">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      <RouterLink
        to="/databases"
        class="w-full sm:w-auto bg-[#e1bc47] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#f0d470] transition-colors text-sm sm:text-base text-center"
      >
        Ver todas mis bases de datos →
      </RouterLink>
    </div>

    <!-- Loading State -->
    <div v-if="isLoadingStats" class="flex justify-center items-center py-12">
      <svg class="animate-spin h-12 w-12 text-[#e1bc47]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>

    <template v-else>
      <!-- Estadísticas principales -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <StatCard
          v-for="stat in summaryStats"
          :key="stat.title"
          :title="stat.title"
          :value="stat.value"
          :subtitle="stat.subtitle"
        />
      </div>

      <!-- Gráficas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Gráfica de uso por motor -->
        <DatabaseChart
          title="Bases de Datos por Motor"
          type="doughnut"
          :data="databasesByEngineChartData"
        />

        <!-- Gráfica de estado de bases de datos -->
        <DatabaseChart
          title="Estado de Bases de Datos"
          type="bar"
          :data="databasesByStatusChartData"
        />
      </div>

      <!-- Resumen rápido de bases de datos recientes -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Bases de Datos Recientes</h2>
          <RouterLink
            to="/databases"
            class="text-[#e1bc47] hover:text-[#f0d470] text-sm font-medium"
          >
            Ver todas →
          </RouterLink>
        </div>

        <!-- Loading recent databases -->
        <div v-if="isLoadingDatabases" class="flex justify-center py-8">
          <svg class="animate-spin h-8 w-8 text-[#e1bc47]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>

        <!-- Empty state -->
        <div v-else-if="recentDatabases.length === 0" class="text-center py-8">
          <p class="text-gray-500 dark:text-gray-400 mb-4">Aún no tienes bases de datos</p>
          <RouterLink
            to="/databases"
            class="inline-block bg-[#e1bc47] text-black font-bold py-2 px-6 rounded-lg hover:bg-[#f0d470] transition-colors"
          >
            Crear mi primera base de datos
          </RouterLink>
        </div>

        <!-- Recent databases list -->
        <div v-else class="space-y-3">
          <div
            v-for="db in recentDatabases"
            :key="db.id"
            class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div class="flex-1">
              <h3 class="text-sm font-medium text-gray-900 dark:text-white">{{ db.name }}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ db.engine }} • {{ formatDate(db.createdAt) }}</p>
            </div>
            <span
              class="px-3 py-1 text-xs font-semibold rounded-full"
              :class="getStatusClass(db.status)"
            >
              {{ translateStatus(db.status) }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useToast } from 'vue-toastification';
import StatCard from '@/components/StatCard.vue';
import DatabaseChart from '@/components/DatabaseChart.vue';
import { databaseService } from '@/services/database';
import type { Database } from '@/services/database';

const toast = useToast();

// Helper function to extract error message
const getErrorMessage = (error: unknown, defaultMessage: string): string => {
  if (!error) return defaultMessage;

  const err = error as { response?: { data?: { message?: string; error?: string } | string; status?: number }; message?: string };

  if (err.response?.data) {
    if (typeof err.response.data === 'object' && err.response.data.message) {
      return String(err.response.data.message);
    }
    if (typeof err.response.data === 'string' && err.response.data.trim()) {
      return err.response.data;
    }
    if (typeof err.response.data === 'object' && err.response.data.error) {
      return String(err.response.data.error);
    }
  }

  if (err.message && err.message !== 'Network Error') {
    return err.message;
  }

  return defaultMessage;
};

// State
const isLoadingStats = ref(true);
const isLoadingDatabases = ref(true);
const databases = ref<Database[]>([]);

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

// Datos para las estadísticas
const databasesByEngine = ref<Record<string, number>>({});
const databasesByStatus = ref<Record<string, number>>({});

// Computed para bases de datos recientes (últimas 5)
const recentDatabases = computed(() => {
  return databases.value.slice(0, 5);
});

// Computed para datos de la gráfica por motor
const databasesByEngineChartData = computed(() => {
  const engines = Object.keys(databasesByEngine.value);
  const counts = Object.values(databasesByEngine.value);

  // Colores para cada motor
  const colors = [
    '#e1bc47', // MySQL
    '#3b82f6', // PostgreSQL
    '#ef4444', // MongoDB
    '#10b981', // SQLServer
    '#f59e0b', // Redis
    '#8b5cf6', // Cassandra
  ];

  return {
    labels: engines,
    datasets: [{
      label: 'Bases de Datos',
      data: counts,
      backgroundColor: colors.slice(0, engines.length),
      borderWidth: 2,
      borderColor: '#fff'
    }]
  };
});

// Computed para datos de la gráfica por estado
const databasesByStatusChartData = computed(() => {
  const statusTranslations: Record<string, string> = {
    'Active': 'Activo',
    'Creating': 'Creando',
    'Error': 'Error',
    'Deleting': 'Eliminando',
    'Pending': 'Pendiente',
    'Inactive': 'Inactivo'
  };

  const statuses = Object.keys(databasesByStatus.value).map(s => statusTranslations[s] || s);
  const counts = Object.values(databasesByStatus.value);

  return {
    labels: statuses,
    datasets: [{
      label: 'Cantidad',
      data: counts,
      backgroundColor: '#e1bc47',
      borderColor: '#d1a837',
      borderWidth: 1
    }]
  };
});

// Load data on mount
onMounted(async () => {
  // Check if user is returning from a payment
  await checkPaymentStatus();

  await Promise.all([loadDashboardStats(), loadDatabases()]);
});

// Check payment status from URL parameters
const checkPaymentStatus = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const paymentStatus = urlParams.get('payment_status');
  const collectionStatus = urlParams.get('collection_status');

  if (paymentStatus || collectionStatus) {
    // Clean URL
    window.history.replaceState({}, document.title, window.location.pathname);

    // Show appropriate message based on status
    const status = collectionStatus || paymentStatus;

    if (status === 'approved' || status === 'success') {
      toast.success('¡Pago exitoso! Tu plan ha sido actualizado. Recargando información...');

      // Wait a bit and reload stats to show updated plan
      setTimeout(async () => {
        await loadDashboardStats();
      }, 2000);
    } else if (status === 'pending') {
      toast.info('Tu pago está pendiente de aprobación. Te notificaremos cuando se confirme.');
    } else if (status === 'failure' || status === 'rejected') {
      toast.error('El pago no pudo ser procesado. Por favor, intenta nuevamente.');
    }
  }
};

// Load dashboard statistics
const loadDashboardStats = async () => {
  try {
    isLoadingStats.value = true;
    const stats = await databaseService.getDashboardStats();

    // Guardar datos para las gráficas
    databasesByEngine.value = stats.databasesByEngine;

    // Calculate database usage by engine
    const dbByEngine = Object.entries(stats.databasesByEngine)
      .map(([engine, count]) => `${count} ${engine}`)
      .join(', ') || 'Ninguna';

    summaryStats.value = [
      {
        title: 'Plan Actual',
        value: stats.currentPlan,
        subtitle: `${stats.maxDatabasesPerEngine} BD por motor`
      },
      {
        title: 'Coste Mensual',
        value: `$${stats.monthlyPrice.toLocaleString('es-CO')} COP`,
        subtitle: stats.nextBillingDate ? `Próximo cobro: ${formatDate(stats.nextBillingDate)}` : ''
      },
      {
        title: 'Bases de Datos',
        value: `${stats.totalDatabases} / ${stats.maxTotalDatabases}`,
        subtitle: dbByEngine
      }
    ];
  } catch (error) {
    console.error('Error loading stats:', error);
    const err = error as { response?: { status?: number } };
    const status = err.response?.status;

    if (status !== 404 && status !== 405) {
      toast.error(getErrorMessage(error, 'Error al cargar las estadísticas'));
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

    // Calcular estadísticas por estado
    const statusCounts: Record<string, number> = {};
    databases.value.forEach(db => {
      statusCounts[db.status] = (statusCounts[db.status] || 0) + 1;
    });
    databasesByStatus.value = statusCounts;
  } catch (error) {
    console.error('Error loading databases:', error);
    const err = error as { response?: { status?: number } };
    const status = err.response?.status;

    if (status !== 404 && status !== 405) {
      toast.error(getErrorMessage(error, 'Error al cargar las bases de datos'));
    }
  } finally {
    isLoadingDatabases.value = false;
  }
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
    'Active': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Creating': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Error': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'Deleting': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    'Pending': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Inactive': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  };
  return statusMap[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
};

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return 'N/A';

  try {
    const date = new Date(dateString);

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
