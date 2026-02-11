<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Registro de Auditoría</h1>
        <p class="text-gray-500 dark:text-gray-400">Historial de actividades en tu cuenta.</p>
      </div>
      <button
        @click="loadLogs"
        class="p-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300"
        title="Recargar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </div>

    <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div v-if="loading" class="p-8 text-center text-gray-500 dark:text-gray-400">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white mb-2"></div>
        <p>Cargando registros...</p>
      </div>

      <div v-else-if="logs.length === 0" class="p-8 text-center text-gray-500 dark:text-gray-400">
        No hay registros de actividad recientes.
      </div>

      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Fecha y Hora
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Evento
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Detalles
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                IP
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="log in logs" :key="log.id" class="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                {{ formatDate(log.timestamp) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="getEventBadgeClass(log.action)">
                  {{ log.action || 'Desconocido' }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-900 dark:text-white">
                {{ log.details }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">
                {{ log.ipAddress }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Paginación simple -->
      <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-600 sm:px-6">
        <div class="flex-1 flex justify-between sm:hidden">
          <button @click="prevPage" :disabled="page === 1" class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50">
            Anterior
          </button>
          <button @click="nextPage" :disabled="logs.length < pageSize" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50">
            Siguiente
          </button>
        </div>
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              Mostrando página <span class="font-medium">{{ page }}</span>
            </p>
          </div>
          <div>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button @click="prevPage" :disabled="page === 1" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50">
                <span class="sr-only">Anterior</span>
                <!-- Heroicon name: solid/chevron-left -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
              <button @click="nextPage" :disabled="logs.length < pageSize" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50">
                <span class="sr-only">Siguiente</span>
                <!-- Heroicon name: solid/chevron-right -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { auditService, type AuditLog } from '@/services/audit';
import { useToast } from 'vue-toastification';

const toast = useToast();
const logs = ref<AuditLog[]>([]);
const loading = ref(true);
const page = ref(1);
const pageSize = 20;

const loadLogs = async () => {
  loading.value = true;
  try {
    const skip = (page.value - 1) * pageSize;
    logs.value = await auditService.getMyLogs(skip, pageSize);
  } catch (error) {
    toast.error('Error al cargar registros de auditoría');
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const nextPage = () => {
  page.value++;
  loadLogs();
};

const prevPage = () => {
  if (page.value > 1) {
    page.value--;
    loadLogs();
  }
};

const formatDate = (dateString: string) => {
  if (!dateString) return 'Fecha no válida';

  const parsedDate = parseDate(dateString);
  if (!parsedDate) return 'Fecha no válida';

  return parsedDate.toLocaleString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const parseDate = (value: string): Date | null => {
  let candidate = new Date(value);
  if (!isNaN(candidate.getTime())) return candidate;

  const normalized = value.replace(' ', 'T');
  const [base, fractionZone = ''] = normalized.split('.');
  if (!base) return null;

  const [fraction = '', zone = ''] = fractionZone.split(/Z|z/);
  const ms = fraction.padEnd(3, '0').slice(0, 3);
  const isoCandidate = `${base}.${ms}Z`;
  candidate = new Date(isoCandidate);
  if (!isNaN(candidate.getTime())) return candidate;

  const withZone = zone ? `${base}.${fraction}Z` : `${normalized}Z`;
  candidate = new Date(withZone);
  return isNaN(candidate.getTime()) ? null : candidate;
};

const getEventBadgeClass = (action: string) => {
  if (!action) return "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";

  const baseClasses = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full ";
  const type = action.toLowerCase();

  if (type.includes('login')) return baseClasses + "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
  if (type.includes('database')) return baseClasses + "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
  if (type.includes('error')) return baseClasses + "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
  if (type.includes('register')) return baseClasses + "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";

  return baseClasses + "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
};

onMounted(() => {
  loadLogs();
});
</script>
