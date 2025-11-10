﻿<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" @click.self="closeModal">
        <div class="flex min-h-screen items-center justify-center p-3 sm:p-4">
          <!-- Backdrop -->
          <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeModal"></div>

          <!-- Modal -->
          <div class="relative bg-white rounded-lg shadow-xl max-w-2xl w-full p-4 sm:p-6 transform transition-all">
            <!-- Header -->
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Credenciales de Conexión</h3>
              <button @click="closeModal" class="text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Loading State -->
            <div v-if="isLoading" class="flex justify-center items-center py-12">
              <svg class="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>

            <!-- Credentials Content -->
            <div v-else-if="credentials" class="space-y-4">
              <!-- Warning -->
              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p class="text-sm text-yellow-800">
                  <strong>⚠️ Importante:</strong> Guarda estas credenciales en un lugar seguro. Por seguridad, la contraseña no se mostrará nuevamente.
                </p>
              </div>

              <!-- Credentials Fields -->
              <div class="space-y-3">
                <div class="bg-gray-50 rounded-lg p-3">
                  <label class="block text-xs font-medium text-gray-600 mb-1">Host</label>
                  <div class="flex items-center gap-2">
                    <code class="flex-1 text-sm text-gray-900 font-mono bg-white px-3 py-2 rounded border">{{ credentials.host }}</code>
                    <button @click="copyToClipboard(credentials.host)" class="text-blue-600 hover:text-blue-800">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-lg p-3">
                  <label class="block text-xs font-medium text-gray-600 mb-1">Puerto</label>
                  <div class="flex items-center gap-2">
                    <code class="flex-1 text-sm text-gray-900 font-mono bg-white px-3 py-2 rounded border">{{ credentials.port }}</code>
                    <button @click="copyToClipboard(credentials.port.toString())" class="text-blue-600 hover:text-blue-800">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-lg p-3">
                  <label class="block text-xs font-medium text-gray-600 mb-1">Nombre de Base de Datos</label>
                  <div class="flex items-center gap-2">
                    <code class="flex-1 text-sm text-gray-900 font-mono bg-white px-3 py-2 rounded border">{{ credentials.databaseName }}</code>
                    <button @click="copyToClipboard(credentials.databaseName)" class="text-blue-600 hover:text-blue-800">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-lg p-3">
                  <label class="block text-xs font-medium text-gray-600 mb-1">Usuario</label>
                  <div class="flex items-center gap-2">
                    <code class="flex-1 text-sm text-gray-900 font-mono bg-white px-3 py-2 rounded border">{{ credentials.username }}</code>
                    <button @click="copyToClipboard(credentials.username)" class="text-blue-600 hover:text-blue-800">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-lg p-3">
                  <label class="block text-xs font-medium text-gray-600 mb-1">Contraseña</label>
                  <div class="flex items-center gap-2">
                    <code class="flex-1 text-sm text-gray-900 font-mono bg-white px-3 py-2 rounded border">{{ credentials.password }}</code>
                    <button @click="copyToClipboard(credentials.password)" class="text-blue-600 hover:text-blue-800">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Connection String Example -->
              <div class="mt-4">
                <label class="block text-xs font-medium text-gray-600 mb-2">Cadena de Conexión (Ejemplo)</label>
                <div class="bg-gray-900 rounded-lg p-4">
                  <code class="text-xs text-green-400 font-mono break-all">{{ connectionString }}</code>
                </div>
              </div>
            </div>

            <!-- Error State -->
            <div v-else class="text-center py-8">
              <p class="text-red-600">Error al cargar las credenciales</p>
            </div>

            <!-- Footer -->
            <div class="flex justify-end mt-6">
              <button
                @click="closeModal"
                class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useToast } from 'vue-toastification';
import type { DatabaseCredentials } from '@/services/database';

interface Props {
  isOpen: boolean;
  credentials: DatabaseCredentials | null;
  isLoading: boolean;
}

interface Emits {
  (e: 'close'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
const toast = useToast();

const closeModal = () => {
  emit('close');
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('Copiado al portapapeles');
  } catch {
    toast.error('Error al copiar');
  }
};

const connectionString = computed(() => {
  if (!props.credentials) return '';

  const { host, port, databaseName, username, password } = props.credentials;

  // Generar string de conexión dependiendo del tipo (esto es un ejemplo genérico)
  return `Server=${host};Port=${port};Database=${databaseName};User=${username};Password=${password};`;
});
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

