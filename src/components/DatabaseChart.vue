<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">{{ title }}</h3>
    <div class="relative" style="height: 300px;">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import { Chart, registerables } from 'chart.js';
import type { ChartConfiguration } from 'chart.js';

Chart.register(...registerables);

interface Props {
  title: string;
  type: 'bar' | 'doughnut' | 'line' | 'pie';
  data: {
    labels: string[];
    datasets: Array<{
      label?: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string | string[];
      borderWidth?: number;
    }>;
  };
}

const props = defineProps<Props>();

const chartCanvas = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart | null = null;

const createChart = () => {
  if (!chartCanvas.value) return;

  // Destruir chart anterior si existe
  if (chartInstance) {
    chartInstance.destroy();
  }

  const config: ChartConfiguration = {
    type: props.type,
    data: props.data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: document.documentElement.classList.contains('dark') ? '#fff' : '#1f2937',
            padding: 15
          }
        }
      },
      scales: props.type === 'bar' || props.type === 'line' ? {
        y: {
          beginAtZero: true,
          ticks: {
            color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280',
            precision: 0
          },
          grid: {
            color: document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb'
          }
        },
        x: {
          ticks: {
            color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280'
          },
          grid: {
            color: document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb'
          }
        }
      } : undefined
    }
  };

  chartInstance = new Chart(chartCanvas.value, config);
};

// Observar cambios en el tema
const observeThemeChanges = () => {
  const observer = new MutationObserver(() => {
    createChart(); // Recrear el chart cuando cambie el tema
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });

  return observer;
};

let themeObserver: MutationObserver | null = null;

onMounted(() => {
  createChart();
  themeObserver = observeThemeChanges();
});

// Recrear chart cuando cambien los datos
watch(() => props.data, () => {
  createChart();
}, { deep: true });

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
  if (themeObserver) {
    themeObserver.disconnect();
  }
});
</script>

