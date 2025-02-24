<template>
  <div class="min-h-screen bg-neutral-50 bg-gradient-to-tl p-4 pt-40 text-black">
    <div class="container mx-auto">
      <h1 class="mb-4 text-3xl font-bold">Horarios</h1>
      <p class="mb-6 text-lg text-gray-900">Horarios de los conductores</p>
      <h2 class="mb-4 text-2xl font-semibold">Transportes próximos a salir</h2>
      <ul class="list-disc px-4">
        <li
          v-for="(transporte, index) in transportes"
          :key="index"
          class="mb-2 flex flex-col items-start justify-between rounded border border-neutral-200 bg-white p-2 shadow-sm md:flex-row md:items-center"
        >
          <div class="mb-2 md:mb-0">
            <span class="font-semibold">{{ transporte.nombre }}</span> - {{ transporte.hora }}
          </div>
          <div class="flex flex-col md:flex-row">
            <button
              @click="viewDetails(transporte)"
              class="mb-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 md:mr-2 md:mb-0"
            >
              <i class="bi bi-eye"></i> Ver Detalles
            </button>
            <button
              @click="deleteTransporte(index)"
              class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              <i class="bi bi-trash"></i> Eliminar
            </button>
          </div>
        </li>
      </ul>
      <div v-if="loading" class="mt-6 flex justify-center">
        <LoadingSpinner />
      </div>
      <div v-if="selectedTransporte" class="mt-6 rounded border bg-white p-4 shadow-lg">
        <h3 class="mb-2 text-xl font-bold text-green-600">Detalles del Transporte</h3>
        <p><strong>Nombre:</strong> {{ selectedTransporte.nombre }}</p>
        <p><strong>Hora:</strong> {{ selectedTransporte.hora }}</p>
        <p><strong>Ruta:</strong> {{ selectedTransporte.ruta }}</p>
        <button @click="closeDetails" class="mt-4 rounded bg-red-500 px-4 py-2 text-white">
          <i class="bi bi-x-circle"></i> Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { ref } from 'vue'

interface Transporte {
  nombre: string
  hora: string
  ruta: string
}

const transportes = ref<Transporte[]>()
const loading = ref(true)
const selectedTransporte = ref<Transporte | null>()

function fetchHorarios() {
  // Simulate an API call
  setTimeout(() => {
    transportes.value = [
      { nombre: 'Transporte 1', hora: '10:00 AM', ruta: 'Ruta 1' },
      { nombre: 'Transporte 2', hora: '11:00 AM', ruta: 'Ruta 2' },
      { nombre: 'Transporte 3', hora: '12:00 PM', ruta: 'Ruta 3' },
    ]
    loading.value = false
  }, 3000)
}

function viewDetails(transporte: Transporte) {
  selectedTransporte.value = transporte
}

function closeDetails() {
  selectedTransporte.value = null
}

function deleteTransporte(index: number) {
  transportes.value?.splice(index, 1)
}

fetchHorarios()
</script>
