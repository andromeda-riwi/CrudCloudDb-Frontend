<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AuthLayout from './layouts/AuthLayout.vue';
import AppLayout from './layouts/AppLayout.vue';
import { RouterView } from 'vue-router';

const route = useRoute();

// Mapeo de nombres de layout a componentes reales
const layouts = {
  AuthLayout,
  AppLayout,
};

// Propiedad computada que determina el layout a usar
const layout = computed(() => {
  const layoutName = route.meta.layout;
  if (layoutName && typeof layoutName === 'string' && layoutName in layouts) {
    // Si la ruta tiene un meta.layout definido (y existe), lo usamos
    return layouts[layoutName as keyof typeof layouts];
  }
  // Si no, devolvemos un 'div' simple para que solo se renderice el <RouterView>
  // Esto es para rutas como la Landing Page que no tienen layout.
  return 'div';
});
</script>
