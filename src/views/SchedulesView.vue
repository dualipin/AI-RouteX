<template>
  <div
    class="min-h-screen bg-gradient-to-tl from-green-50 to-blue-50 p-6 pt-32 text-gray-900 dark:bg-gray-900 dark:text-white"
  >
    <div class="container mx-auto max-w-4xl">
      <!-- Título -->
      <h1 class="mb-4 text-center text-3xl font-bold">🚍 Horarios de Transporte</h1>
      <p class="mb-6 text-center text-lg text-gray-700 dark:text-gray-300">
        Consulta los horarios de salida
      </p>

      <!-- Transportes próximos a salir -->
      <h2 class="mb-4 text-center text-2xl font-semibold">Próximos en salir</h2>

      <!-- Lista de transportes -->
      <ul class="space-y-4">
        <li
          v-for="(transporte, index) in transportes"
          :key="index"
          ref="listItem"
          class="flex flex-col items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-all hover:shadow-xl md:flex-row md:items-center dark:border-gray-700 dark:bg-gray-800"
        >
          <div class="mb-2 text-lg md:mb-0">
            <span class="font-semibold">{{ transporte.nombre }}</span> - {{ transporte.hora }}
          </div>
          <div class="flex space-x-2">
            <button
              @click="viewDetails(transporte)"
              class="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-all hover:bg-blue-700"
            >
              <LucideEye class="h-5 w-5" /> <span>Ver Detalles</span>
            </button>
            <!-- <button
              @click="deleteTransporte(index)"
              class="flex items-center space-x-2 rounded-lg bg-red-600 px-4 py-2 text-white transition-all hover:bg-red-700"
            >
              <LucideTrash class="h-5 w-5" /> <span>Eliminar</span>
            </button> -->
          </div>
        </li>
      </ul>

      <!-- Spinner de carga -->
      <div v-if="loading" class="mt-6 flex justify-center">
        <LoadingSpinner />
      </div>

      <!-- Detalles del transporte -->
      <transition name="slide-fade">
        <div
          v-if="selectedTransporte"
          class="mt-6 rounded-lg border bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          <h3 class="mb-2 text-xl font-bold text-green-600 dark:text-green-400">
            Detalles del Transporte
          </h3>
          <p><strong>Nombre:</strong> {{ selectedTransporte.nombre }}</p>
          <p><strong>Hora:</strong> {{ selectedTransporte.hora }}</p>
          <p><strong>Ruta:</strong> {{ selectedTransporte.ruta }}</p>
          <button
            @click="closeDetails"
            class="mt-4 flex items-center space-x-2 rounded-lg bg-gray-600 px-4 py-2 text-white transition-all hover:bg-gray-700"
          >
            <LucideXCircle class="h-5 w-5" /> <span>Cerrar</span>
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'
import { LucideEye, LucideXCircle } from 'lucide-vue-next'

interface Transporte {
  nombre: string
  hora: string
  ruta: string
}

// Estado
const transportes = ref<Transporte[]>([])
const loading = ref(true)
const selectedTransporte = ref<Transporte | null>(null)

// Animaciones de lista
const listItem = ref(null)
useMotion(listItem, {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
})

// Cargar datos simulados
function fetchHorarios() {
  setTimeout(() => {
    transportes.value = [
      { nombre: 'Bus 101', hora: '10:00 AM', ruta: 'Av. Central - Centro' },
      { nombre: 'Bus 202', hora: '11:15 AM', ruta: 'Plaza - Terminal' },
      { nombre: 'Bus 303', hora: '12:30 PM', ruta: 'Aeropuerto - Centro' },
    ]
    loading.value = false
  }, 2000)
}

// Mostrar detalles
function viewDetails(transporte: Transporte) {
  selectedTransporte.value = transporte
}

// Cerrar detalles
function closeDetails() {
  selectedTransporte.value = null
}

// Eliminar transporte
// function deleteTransporte(index: number) {
//   transportes.value.splice(index, 1)
// }

// Iniciar carga
fetchHorarios()
</script>

<style>
/* Animaciones de entrada */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
