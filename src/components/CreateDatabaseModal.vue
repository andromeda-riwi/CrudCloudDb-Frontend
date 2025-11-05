﻿<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" @click.self="closeModal">
        <div class="flex min-h-screen items-center justify-center p-4">
          <!-- Backdrop -->
          <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeModal"></div>

          <!-- Modal -->
          <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all">
            <!-- Header -->
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-2xl font-bold text-gray-900">Crear Base de Datos</h3>
              <button @click="closeModal" class="text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Form -->
            <form @submit.prevent="handleSubmit">
              <div class="space-y-4">
                <!-- Motor de Base de Datos -->
                <div>
                  <label for="dbEngine" class="block text-sm font-medium text-gray-700 mb-1">
                    Motor de Base de Datos
                  </label>
                  <select
                    id="dbEngine"
                    v-model="formData.engine"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    :disabled="isLoading"
                  >
                    <option value="" disabled>Selecciona un motor</option>
                    <option value="MySQL">MySQL</option>
                    <option value="PostgreSQL">PostgreSQL</option>
                    <option value="MongoDB">MongoDB</option>
                  </select>
                </div>

                <!-- Información adicional -->
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p class="text-sm text-blue-800">
                    <strong>Nota:</strong> La base de datos se creará automáticamente y recibirás las credenciales de acceso una vez completado el proceso.
                  </p>
                </div>
              </div>

              <!-- Botones -->
              <div class="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  @click="closeModal"
                  class="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  :disabled="isLoading"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  :disabled="isLoading"
                >
                  <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isLoading ? 'Creando...' : 'Crear Base de Datos' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { CreateDatabaseRequest } from '@/services/database';

interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: 'close'): void;
  (e: 'submit', data: CreateDatabaseRequest): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const isLoading = ref(false);
const formData = ref<CreateDatabaseRequest>({
  engine: ''
});

// Resetear el formulario cuando se cierre el modal
watch(() => props.isOpen, (newValue) => {
  if (!newValue) {
    formData.value = {
      engine: ''
    };
    isLoading.value = false;
  }
});

const closeModal = () => {
  if (!isLoading.value) {
    emit('close');
  }
};

const handleSubmit = () => {
  if (isLoading.value) return;


  isLoading.value = true;
  emit('submit', { ...formData.value });
};

// Exponer método para resetear el loading (llamado desde el padre después de la creación)
const resetLoading = () => {
  isLoading.value = false;
};

defineExpose({ resetLoading });
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
}
</style>

