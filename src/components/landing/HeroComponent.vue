<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import autobuses from '@/assets/img/giorgio-trovato-mDX3l3BvccU-unsplash.jpg'
import CarAccelerate from './CarAccelerate.vue'

const ballena = ref('🐋')

let interval = 0

function toggleBallena() {
  if (ballena.value == '🐋') {
    ballena.value = '🐳'
  } else {
    ballena.value = '🐋'
  }

  console.log(ballena.value)
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  scrollToTop()
  interval = setInterval(toggleBallena, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section
    id="hero"
    class="relative flex h-screen items-center justify-center bg-cover bg-fixed bg-center text-white"
    :style="{ backgroundImage: `url(${autobuses})` }"
  >
    <div class="absolute inset-0 bg-black/85"></div>
    <div class="relative z-10 text-center">
      <CarAccelerate />
      <h2 class="text-6xl font-bold">Que no se te pase la combi!!!</h2>
      <p class="mt-4 text-2xl">
        Checa fácilmente los horarios del transporte, si va llena
        <span>
          {{ ballena }}
        </span>
        o si la tienes que esperar en otra parte.
      </p>
      <RouterLink
        to="schedule"
        class="mt-6 inline-block rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 md:text-base"
      >
        Echar un vistazo
      </RouterLink>
    </div>
  </section>
</template>
