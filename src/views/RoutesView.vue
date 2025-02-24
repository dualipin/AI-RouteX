<template>
  <div
    class="relative min-h-screen bg-gray-100 p-6 pt-24 text-gray-900 dark:bg-gray-900 dark:text-white"
  >
    <div class="container mx-auto max-w-5xl">
      <!-- Título -->
      <h1 class="mb-4 text-center text-3xl font-bold">🛣️ Ruta a la Parada de Autobús</h1>
      <p class="mb-6 text-center text-lg text-gray-700 dark:text-gray-300">
        Selecciona una parada de autobús y traza la mejor ruta desde tu ubicación.
      </p>

      <!-- Mapa -->
      <div ref="mapContainer" class="h-96 w-full rounded-lg shadow-lg"></div>

      <!-- Selección de Parada -->
      <div class="mt-4 flex justify-center">
        <select v-model="selectedStop" class="rounded border p-2 shadow-md">
          <option v-for="(stop, index) in busStops" :key="index" :value="stop">
            🚏 {{ stop.name }}
          </option>
        </select>
        <button
          @click="calcularRuta"
          class="ml-4 rounded bg-blue-600 px-4 py-2 text-white shadow-lg hover:bg-blue-700"
        >
          🚀 Trazar Ruta
        </button>
      </div>

      <!-- Mensaje de error -->
      <p v-if="error" class="mt-4 text-center font-semibold text-red-600">⚠️ {{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import maplibregl from 'maplibre-gl'
import { useGeolocation } from '@vueuse/core'
import 'maplibre-gl/dist/maplibre-gl.css'

// 📌 Referencia al contenedor del mapa
const mapContainer = ref<HTMLDivElement | null>(null)
let map: maplibregl.Map | null = null
const error = ref<string | null>(null)

// 📡 **Ubicación del usuario con VueUse**
const { coords, error: geoError } = useGeolocation({ enableHighAccuracy: true, timeout: 10000 })
const userLocation = ref<[number, number] | null>(null)

// 🚌 **Lista de Paradas de Autobús (predefinidas en el sistema)**
const busStops = ref([
  // { name: 'Parada Centro', location: [-99.1332, 19.4326] },
  // { name: 'Parada Norte', location: [-99.15, 19.45] },
  // { name: 'Parada Sur', location: [-99.14, 19.41] },
  { name: 'Parada de la Central', location: [-92.59862992550441, 17.761141425690145] },
  { name: 'La Placita', location: [-92.59056441127062, 17.75730486967917] },
  { name: 'Cdad. Pemex', location: [-92.47882281097421, 17.884389215749614] },
])
// 📍 **Parada seleccionada**
const selectedStop = ref(busStops.value[0])

// 📌 Inicializar el mapa
onMounted(() => {
  map = new maplibregl.Map({
    container: mapContainer.value as HTMLElement,
    style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json', // OpenStreetMap con Carto
    center: selectedStop.value.location,
    zoom: 14,
  })

  // Agregar marcadores de paradas de autobús
  busStops.value.forEach((stop) => {
    new maplibregl.Marker({ color: 'blue' })
      .setLngLat(stop.location)
      .setPopup(new maplibregl.Popup().setText(`🚌 ${stop.name}`))
      .addTo(map)
  })

  // Observar cambios en la geolocalización
  watch(coords, (newCoords) => {
    if (newCoords.latitude && newCoords.longitude) {
      userLocation.value = [newCoords.longitude, newCoords.latitude]
      error.value = null

      // Agregar marcador de la ubicación del usuario
      new maplibregl.Marker({ color: 'red' })
        .setLngLat(userLocation.value)
        .setPopup(new maplibregl.Popup().setText('📍 Tú estás aquí'))
        .addTo(map)

      map?.setCenter(userLocation.value)
    }
  })

  // Manejar errores de geolocalización
  watch(geoError, (err) => {
    if (err) {
      error.value = 'No se pudo obtener la ubicación. Activa el GPS y revisa los permisos.'
    }
  })
})

// 🚀 **Calcular Ruta con OSRM**
async function calcularRuta() {
  if (!userLocation.value) {
    error.value = '⚠️ No se pudo obtener tu ubicación. Intenta nuevamente.'
    return
  }

  // Endpoint de OSRM para calcular rutas
  const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${userLocation.value.join(',')};${selectedStop.value.location.join(',')}?overview=full&geometries=geojson`

  try {
    const response = await fetch(osrmUrl)
    const data = await response.json()

    if (data.routes.length === 0) {
      error.value = 'No se pudo calcular la ruta. Intenta otra parada.'
      return
    }

    const routeGeoJSON = {
      type: 'Feature',
      geometry: data.routes[0].geometry,
    }

    // Verificar si ya existe una ruta previa en el mapa y reemplazarla
    if (map?.getSource('route')) {
      map.getSource('route')?.setData(routeGeoJSON)
    } else {
      map?.addSource('route', { type: 'geojson', data: routeGeoJSON })

      map?.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route',
        paint: {
          'line-color': '#ff5733',
          'line-width': 4,
        },
      })
    }

    userLocation.value = [17.778426700008495, -92.60517512806771]

    // Ajustar el zoom para ver la ruta completa
    const bounds = new maplibregl.LngLatBounds()
    bounds.extend(userLocation.value)
    bounds.extend(selectedStop.value.location)
    map?.fitBounds(bounds, { padding: 50 })
  } catch (err) {
    console.error('Error al obtener la ruta:', err)
    error.value = 'Error al calcular la ruta. Intenta nuevamente.'
  }
}
</script>
