<template>
  <div class="min-h-screen bg-gray-100 p-6 pt-24 text-gray-900 dark:bg-gray-900 dark:text-white">
    <div class="container mx-auto max-w-5xl">
      <!-- Título -->
      <h1 class="mb-4 text-center text-3xl font-bold">🚏 Paradas de Autobuses</h1>
      <p class="mb-6 text-center text-lg text-gray-700 dark:text-gray-300">
        Ubicaciones y detalles de las paradas
      </p>

      <!-- Mapa -->
      <div class="relative h-96 w-full rounded-lg shadow-lg">
        <l-map ref="map" v-model:zoom="zoom" :center="center" class="h-full w-full rounded-lg">
          <l-tile-layer :url="tileLayer" />
          <l-marker
            v-for="(parada, index) in paradas"
            :key="index"
            :lat-lng="[parada.lat, parada.lng]"
          >
            <l-popup>
              <h3 class="text-lg font-semibold">{{ parada.nombre }}</h3>
              <p class="text-gray-700 dark:text-gray-300">Ubicación: {{ parada.direccion }}</p>
            </l-popup>
          </l-marker>
        </l-map>

        <!-- Botón de ubicación actual -->
        <button
          @click="centrarUbicacion"
          class="absolute -top-20 right-4 z-50 rounded-full bg-blue-600 p-2 text-white shadow-lg transition-all hover:bg-blue-700"
        >
          📍
        </button>
      </div>

      <!-- Lista de paradas -->
      <ul class="mt-6 space-y-4">
        <li
          v-for="(parada, index) in paradas"
          :key="index"
          class="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          <div>
            <h3 class="text-lg font-semibold">{{ parada.nombre }}</h3>
            <p class="text-gray-700 dark:text-gray-300">{{ parada.direccion }}</p>
          </div>
          <button
            @click="centrarEnParada(parada)"
            class="rounded-lg bg-green-600 px-4 py-2 text-white transition-all hover:bg-green-700"
          >
            🔍 Ver en mapa
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'
import { useGeolocation, useWindowSize } from '@vueuse/core'

interface Parada {
  nombre: string
  direccion: string
  lat: number
  lng: number
}

// Estado del mapa
const zoom = ref(14)
const center = ref<[number, number]>([17.778426700008495, -92.60517512806771])

// Lista de paradas de autobuses
const paradas = ref<Parada[]>([
  {
    nombre: 'Parada de la Central',
    direccion: 'P.º José Narciso Rovirosa, Centro, 86700 Macuspana, Tab.',
    lat: 17.761141425690145,
    lng: -92.59862992550441,
  },
  {
    nombre: 'La Placita',
    direccion: 'Ulises González Blengio, Centro, 86700 Macuspana, Tab.',
    lat: 17.75730486967917,
    lng: -92.59056441127062,
  },
  {
    nombre: 'Cdad. Pemex',
    direccion: 'C. Sexta 34, Ampliacion Obrera, 86720 Pemex, Tab.',
    lat: 17.884389215749614,
    lng: -92.47882281097421,
  },
])

const tileLayer = ref('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')

// 📡 **Ubicación Actual con VueUse**
const { coords, error } = useGeolocation()

// Función para centrar el mapa en la parada seleccionada
function centrarEnParada(parada: Parada) {
  center.value = [parada.lat, parada.lng]
  zoom.value = 16
}

// Función para centrar en la ubicación actual del usuario
function centrarUbicacion() {
  if (coords.value.latitude && coords.value.longitude) {
    center.value = [coords.value.latitude, coords.value.longitude]
    zoom.value = 16
  } else {
    alert(error.value || 'No se pudo obtener la ubicación.')
  }
}

// 🖥️ **Detectar tamaño de pantalla con VueUse**
const { width } = useWindowSize()

watch(width, (newWidth) => {
  if (newWidth < 768) {
    zoom.value = 13 // Ajustar zoom para móviles
  } else {
    zoom.value = 14 // Zoom normal en escritorio
  }
})
</script>
