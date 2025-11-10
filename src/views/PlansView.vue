﻿﻿<template>
  <div class="container mx-auto max-w-7xl">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Elige el Plan Perfecto para Ti</h1>
    <p class="text-base sm:text-lg text-center text-gray-500 dark:text-gray-400 mb-8 sm:mb-12 px-4">
      Comienza gratis y escala a medida que tu proyecto crece.
    </p>

    <!-- Componente de precios reutilizable -->
    <PricingSection />
  </div>
</template>

<script setup lang="ts">
import PricingSection from '@/components/PricingSection.vue';
</script>
