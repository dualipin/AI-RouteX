<script setup lang="ts">
import { reactive } from 'vue'

const dropdowns = reactive({
  users: false,
  mapa: false,
  paradas: false,
})

function toggleDropdown(name: keyof typeof dropdowns) {
  dropdowns[name] = !dropdowns[name]
}
</script>

<template>
  <div
    class="sidebar-menu fixed top-0 left-0 z-50 h-full w-64 bg-[#f8f4f3] p-4 transition-transform"
  >
    <div class="flex items-center border-b border-b-gray-800 pb-4">
      <h2 class="font-bold">
        <div class="text-2xl">
          <span class="rounded-md bg-black px-2 text-white">AI</span>
          RouteX
        </div>
        <div class="mt-1 text-sm">
          <span class="text-neutral-800">Traffic Analytics </span>
        </div>
      </h2>
    </div>

    <ul class="mt-4">
      <span class="font-bold text-gray-400">ADMIN</span>
      <li class="group mb-1">
        <RouterLink
          to="./"
          class="flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
        >
          <i class="ri-home-2-line mr-3 text-lg"></i>
          <span class="text-sm">Dashboard</span>
        </RouterLink>
      </li>
      <li class="group mb-1">
        <a
          href="#"
          class="sidebar-dropdown-toggle flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
          @click.prevent="toggleDropdown('users')"
        >
          <i class="bx bx-user mr-3 text-lg"></i>
          <span class="text-sm">Usuarios</span>
          <i class="ri-arrow-right-s-line ml-auto" :class="dropdowns.users ? 'rotate-90' : ''"></i>
        </a>
        <ul class="mt-2 pl-7" :class="dropdowns.users ? 'block' : 'hidden'">
          <li class="mb-4">
            <a
              href="#"
              class="before:contents-[''] flex items-center text-sm text-gray-900 before:mr-3 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 hover:text-[#f84525]"
            >
              All
            </a>
          </li>
          <li class="mb-4">
            <a
              href="#"
              class="before:contents-[''] flex items-center text-sm text-gray-900 before:mr-3 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 hover:text-[#f84525]"
            >
              Roles
            </a>
          </li>
        </ul>
      </li>
      <li class="group mb-1">
        <a
          href="#"
          class="flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
        >
          <i class="bx bx-list-ul mr-3 text-lg"></i>
          <span class="text-sm">...</span>
        </a>
      </li>
      <hr />
      <span class="font-bold text-gray-400">TRAFICO</span>
      <li class="group mb-1">
        <a
          href="#"
          class="sidebar-dropdown-toggle flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
          @click.prevent="toggleDropdown('mapa')"
        >
          <i class="bx bxl-blogger mr-3 text-lg"></i>
          <span class="text-sm">Mapa en tiempo real</span>
          <i class="ri-arrow-right-s-line ml-auto" :class="dropdowns.mapa ? 'rotate-90' : ''"></i>
        </a>
        <ul class="mt-2 pl-7" :class="dropdowns.mapa ? 'block' : 'hidden'">
          <li class="mb-4">
            <a
              href="#"
              class="before:contents-[''] flex items-center text-sm text-gray-900 before:mr-3 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 hover:text-[#f84525]"
            >
              All
            </a>
          </li>
          <li class="mb-4">
            <a
              href="#"
              class="before:contents-[''] flex items-center text-sm text-gray-900 before:mr-3 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 hover:text-[#f84525]"
            >
              Categories
            </a>
          </li>
        </ul>
      </li>
      <li class="group mb-1">
        <a
          href="#"
          class="sidebar-dropdown-toggle flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
          @click.prevent="toggleDropdown('paradas')"
        >
          <i class="bx bx-archive mr-3 text-lg"></i>
          <span class="text-sm">Paradas</span>
          <i
            class="ri-arrow-right-s-line ml-auto"
            :class="dropdowns.paradas ? 'rotate-90' : ''"
          ></i>
        </a>
        <ul class="mt-2 pl-7" :class="dropdowns.paradas ? 'block' : 'hidden'">
          <li class="mb-4">
            <a
              href="#"
              class="before:contents-[''] flex items-center text-sm text-gray-900 before:mr-3 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 hover:text-[#f84525]"
            >
              Parada A
            </a>
          </li>
          <li class="mb-4">
            <a
              href="#"
              class="before:contents-[''] flex items-center text-sm text-gray-900 before:mr-3 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 hover:text-[#f84525]"
            >
              Parada B
            </a>
          </li>
        </ul>
      </li>
      <hr />
      <span class="font-bold text-gray-400">PERSONAL</span>
      <li class="group mb-1">
        <a
          href="#"
          class="flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
        >
          <i class="bx bx-bell mr-3 text-lg"></i>
          <span class="text-sm">Notificaciones</span>
          <span
            class="ml-auto rounded-full bg-red-200 px-2 py-0.5 text-xs font-medium tracking-wide text-red-600 md:block"
            >5</span
          >
        </a>
      </li>
      <li class="group mb-1">
        <a
          href="#"
          class="flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
        >
          <i class="bx bx-envelope mr-3 text-lg"></i>
          <span class="text-sm">Mensajes</span>
          <span
            class="ml-auto rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium tracking-wide text-green-600 md:block"
            >2 Nuevos</span
          >
        </a>
      </li>
    </ul>
  </div>

  <div class="sidebar-overlay fixed top-0 left-0 z-40 h-full w-full bg-black/50 md:hidden"></div>
</template>
