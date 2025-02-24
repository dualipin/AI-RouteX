<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps({
  isScrolled: {
    type: Boolean,
    required: true,
  },
})

const route = useRoute()
</script>

<template>
  <header
    :class="[
      'fixed z-50 transform px-2 transition-all duration-700',
      isScrolled
        ? 'inset-x-3 top-1.5 rounded-xl bg-blue-500/50 py-2 shadow-lg backdrop-blur-lg md:inset-x-10 md:px-5 md:py-1'
        : route.path === '/'
          ? 'inset-x-0 top-0 bg-transparent py-4 md:px-36'
          : 'inset-x-0 top-0 bg-current py-4 md:px-36',
    ]"
  >
    <div class="relative flex items-center justify-between transition-all duration-300">
      <RouterLink to="/" class="text-2xl font-bold text-white">
        <span class="rounded-md bg-white px-2 text-black">AI</span> RouteX
      </RouterLink>
      <input type="checkbox" id="menuToggle" class="peer hidden" />
      <label for="menuToggle" class="cursor-pointer text-white focus:outline-none md:hidden">
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
        :class="{
          'top-11 bg-blue-900/95': isScrolled,
          'top-14 bg-current': !isScrolled,
        }"
        class="absolute left-0 hidden w-full -translate-x-full transform flex-col items-center space-y-4 rounded-2xl p-2 text-lg font-bold opacity-0 shadow-2xl transition-all duration-500 peer-checked:flex peer-checked:translate-x-0 peer-checked:opacity-100 md:relative md:top-0 md:flex md:w-auto md:translate-x-0 md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent md:px-4 md:opacity-100 md:shadow-none"
      >
        <template v-if="route.path !== '/'">
          <RouterLink to="/" class="text-white hover:underline">Inicio</RouterLink>
          <RouterLink to="/stops" class="text-white hover:underline">Paradas</RouterLink>
          <RouterLink to="/schedule" class="text-white hover:underline">Horarios</RouterLink>
          <RouterLink to="/routes" class="text-white hover:underline">Rutas</RouterLink>
          <RouterLink to="/contact" class="text-white hover:underline">Contacto</RouterLink>
          <RouterLink to="/about" class="text-white hover:underline">Sobre Nosotros</RouterLink>
        </template>
        <template v-else>
          <a href="#services" class="text-white hover:underline">Paradas</a>
          <a href="#testimonials" class="text-white hover:underline">Rutas</a>
          <a href="#contact" class="text-white hover:underline">Contacto</a>
          <RouterLink to="/about" class="text-white hover:underline">Sobre Nosotros</RouterLink>
        </template>
      </nav>
    </div>
  </header>
</template>
