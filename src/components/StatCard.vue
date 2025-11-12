<template>
  <div class="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow transition-colors duration-300">
    <h3 class="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">{{ title }}</h3>
    <p class="mt-2 text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">{{ value }}</p>
    <p v-if="subtitle" class="mt-1 text-xs text-gray-400 dark:text-gray-500">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
  subtitle?: string; // Hacemos el subtítulo opcional
}>();
</script>
