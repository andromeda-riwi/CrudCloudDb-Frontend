<template>
  <div class="border rounded-lg p-6 text-center transition-all hover:shadow-lg duration-300" :class="cardClasses">
    <h3 class="text-2xl font-bold mb-2" :class="titleClasses">{{ plan.name }}</h3>

    <div class="my-4">
      <span class="text-4xl font-extrabold" :class="priceClasses">{{ plan.price }}</span>
      <span :class="plan.highlight ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'"> COP/mes</span>
    </div>

    <ul class="space-y-3" :class="featureListClasses">
      <li v-for="feature in plan.features" :key="feature">
        ✔ {{ feature }}
      </li>
    </ul>

    <button class="mt-8 w-full font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105" :class="buttonClasses">
      {{ plan.cta }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  plan: {
    name: string;
    price: string;
    features: string[];
    cta: string;
    highlight?: boolean;
  }
}>();

const cardClasses = computed(() =>
  props.plan.highlight
    ? 'bg-black dark:bg-gray-800 text-white shadow-xl scale-105 border-[#e1bc47]'
    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
);

const titleClasses = computed(() =>
  props.plan.highlight ? 'text-[#e1bc47]' : 'text-gray-900 dark:text-white'
);

const priceClasses = computed(() =>
  props.plan.highlight ? 'text-[#e1bc47]' : 'text-gray-900 dark:text-white'
);

const featureListClasses = computed(() =>
  props.plan.highlight ? 'text-gray-200' : 'text-gray-600 dark:text-gray-400'
);

const buttonClasses = computed(() =>
  props.plan.highlight
    ? 'bg-[#e1bc47] text-black hover:bg-[#f0d470]'
    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 border border-[#e1bc47]'
);
</script>
