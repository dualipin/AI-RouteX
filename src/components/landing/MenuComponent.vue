<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <header
    :class="[
      'fixed z-50 transform px-2 transition-all duration-700',
      isScrolled
        ? 'inset-x-10 top-1.5 rounded-xl bg-blue-500/50 py-1 shadow-lg backdrop-blur-lg md:px-5'
        : 'inset-x-0 top-0 bg-transparent py-4 md:px-36',
    ]"
  >
    <div class="relative flex items-center justify-between transition-all duration-300">
      <RouterLink to="/" class="text-2xl font-bold text-white">
        <span class="rounded-md bg-white px-2 text-black">AI</span> RouteX
      </RouterLink>
      <input type="checkbox" id="menuToggle" class="peer hidden" checked />
      <label for="menuToggle" class="text-white focus:outline-none md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </label>
      <nav
        class="bg-onyx-black/95 absolute top-14 hidden w-full justify-center space-x-6 rounded-2xl p-2 text-lg font-bold opacity-0 transition-all peer-checked:flex peer-checked:opacity-100 md:relative md:top-0 md:flex md:w-auto md:bg-transparent md:px-4 md:opacity-100"
      >
        <a href="/#hero" class="text-white hover:underline">Inicio</a>
        <a href="/#services" class="text-white hover:underline">Paradas</a>
        <a href="/#testimonials" class="text-white hover:underline">Rutas</a>
        <a href="/#contact" class="text-white hover:underline">Contacto</a>
        <RouterLink to="/about" class="text-white hover:underline">Sobre Nosotros</RouterLink>
      </nav>
    </div>
  </header>
</template>
