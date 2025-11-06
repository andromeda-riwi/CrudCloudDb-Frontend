﻿<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4 text-gray-900">Elige el Plan Perfecto para Ti</h1>
    <p class="text-lg text-center text-gray-500 mb-12">
      Comienza gratis y escala a medida que tu proyecto crece.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <PlanCard
        v-for="plan in plans"
        :key="plan.name"
        :plan="plan"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PlanCard from '@/components/PlanCard.vue';

// Definimos los datos de los planes
const plans = [
  {
    name: 'Gratuito',
    price: '$0',
    features: [
      'Hasta 2 bases de datos por motor',
      'Soporte comunitario',
      'Acceso a todos los motores'
    ],
    cta: 'Plan Actual',
    highlight: false,
  },
  {
    name: 'Intermedio',
    price: '$5.000',
    features: [
      'Hasta 5 bases de datos por motor',
      'Soporte prioritario por email',
      'Acceso a todos los motores'
    ],
    cta: 'Actualizar Plan',
    highlight: true, // Lo destacamos
  },
  {
    name: 'Avanzado',
    price: '$10.000',
    features: [
      'Hasta 10 bases de datos por motor',
      'Soporte prioritario 24/7',
      'Acceso a todos los motores'
    ],
    cta: 'Actualizar Plan',
    highlight: false,
  },
];
</script>
