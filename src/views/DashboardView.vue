<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-4xl font-bold text-gray-800">Dashboard</h1>
      <button class="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        + Crear Base de Datos
      </button>
    </div>

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

    <div v-if="databases.length === 0" class="bg-white p-12 rounded-lg shadow text-center">
      <h3 class="text-xl font-medium text-gray-700">Aún no tienes bases de datos</h3>
      <p class="mt-2 text-gray-500">¡Crea tu primera base de datos para empezar a gestionar tus proyectos!</p>
      <button class="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
        Crear mi primera base de datos
      </button>
    </div>
    <div v-else class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Motor</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="db in databases" :key="db.id">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900">{{ db.name }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-800">{{ db.engine }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full" :class="db.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                {{ db.status }}
              </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-4">Credenciales</a>
            <a href="#" class="text-red-600 hover:text-red-900">Eliminar</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import StatCard from '@/components/StatCard.vue';

// --- DATOS DE PRUEBA (MOCK DATA) ---
// En el futuro, estos datos vendrán de tu API

const summaryStats = ref([
  {
    title: 'Plan Actual',
    value: 'Intermedio',
  },
  {
    title: 'Bases de Datos Usadas',
    value: '2 / 15', // 5 por motor * 3 motores de ejemplo
    subtitle: '3 MySQL, 2 PostgreSQL'
  },
  {
    title: 'Coste Mensual',
    value: '$5.000 COP',
    subtitle: 'Próximo cobro: 15 de Nov, 2025' // <-- ¡Tu sugerencia implementada!
  }
]);

// Para probar el estado con datos, llena este array.
// Para probar el estado vacío, déjalo como: ref([])
const databases = ref([
  { id: 1, name: 'proyecto-tienda', engine: 'MySQL', status: 'Activo' },
  { id: 2, name: 'analytics-api', engine: 'PostgreSQL', status: 'Activo' },
  { id: 3, name: 'blog-principal', engine: 'MySQL', status: 'Creando...' },
]);
</script>
