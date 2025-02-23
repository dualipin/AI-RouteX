<template>
  <div class="min-h-screen bg-gradient-to-tl from-red-500 to-yellow-500 p-4 pt-40">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold text-white">Horarios</h1>
        <button @click="showModal = true" class="rounded bg-blue-500 px-4 py-2 text-white">
          <i class="bi bi-plus"></i> Agregar Horario
        </button>
        <button
          @click="showModal = false"
          class="rounded bg-red-500 px-4 py-2 text-white"
          v-if="showModal"
        >
          <i class="bi bi-x"></i> Cerrar
        </button>

        <Modal v-if="showModal" @close="showModal = false">
          <h2 class="text-2xl font-bold text-blue-500">Agregar Horario</h2>
          <form @submit.prevent="addTransporte">
            <div class="mb-4">
              <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                v-model="nombre"
                type="text"
                id="nombre"
                name="nombre"
                class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
              />
              <div class="mb-4"></div>
              <label for="hora" class="block text-sm font-medium text-gray-700">Hora</label>
              <input
                v-model="hora"
                type="time"
                id="hora"
                name="hora"
                class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
              />
            </div>
            <div class="mb-4">
              <label for="ruta" class="block text-sm font-medium text-gray-700">Ruta</label>
              <input
                v-model="ruta"
                type="text"
                id="ruta"
                name="ruta"
                class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
              />
            </div>
            <button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white">Agregar</button>
          </form>
        </Modal>
      </div>
    </div>
    <h1 class="mb-4 text-3xl font-bold text-white">Horarios</h1>
    <p class="mb-6 text-lg text-gray-200">Horarios de los conductores</p>
    <h2 class="mb-4 text-2xl font-semibold text-white">Transportes próximos a salir</h2>
    <ul class="list-disc pl-5">
      <li
        v-for="(transporte, index) in transportes"
        :key="index"
        class="mb-2 flex flex-col items-start justify-between rounded bg-white p-2 shadow-sm md:flex-row md:items-center"
      >
        <div class="mb-2 md:mb-0">
          <span class="font-semibold">{{ transporte.nombre }}</span> - {{ transporte.hora }}
        </div>
        <div class="flex flex-col md:flex-row">
          <button
            @click="viewDetails(transporte)"
            class="mb-2 rounded bg-blue-500 px-4 py-2 text-white md:mr-2 md:mb-0"
          >
            <i class="bi bi-eye"></i> Ver Detalles
          </button>
          <button @click="deleteTransporte(index)" class="rounded bg-red-500 px-4 py-2 text-white">
            <i class="bi bi-trash"></i> Eliminar
          </button>
        </div>
      </li>
    </ul>
    <div v-if="loading" class="mt-4 text-center">
      <p class="text-white">Cargando horarios...</p>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Transporte {
  nombre: string
  hora: string
  ruta: string
}

const transportes = ref<Transporte[]>()
const loading = ref(true)
const selectedTransporte = ref<Transporte | null>()
const showModal = ref(false)
const nombre = ref('')
const hora = ref('')
const ruta = ref('')

function fetchHorarios() {
  // Simulate an API call
  setTimeout(() => {
    transportes.value = [
      { nombre: 'Transporte 1', hora: '10:00 AM', ruta: 'Ruta 1' },
      { nombre: 'Transporte 2', hora: '11:00 AM', ruta: 'Ruta 2' },
      { nombre: 'Transporte 3', hora: '12:00 PM', ruta: 'Ruta 3' },
    ]
    loading.value = false
  }, 2000)
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

function addTransporte() {
  transportes.value?.push({
    nombre: nombre.value,
    hora: hora.value,
    ruta: ruta.value,
  })
  showModal.value = false
  nombre.value = ''
  hora.value = ''
  ruta.value = ''
}

fetchHorarios()
</script>
