<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h3 class="text-sm font-medium text-gray-500">{{ title }}</h3>
    <p class="mt-2 text-3xl font-bold text-gray-800">{{ value }}</p>
    <p v-if="subtitle" class="mt-1 text-xs text-gray-400">
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
