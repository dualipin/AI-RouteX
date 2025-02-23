<script setup lang="ts">
import { ref } from 'vue'

const modal = ref(false)

function openModal() {
  modal.value = true
}

</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex items-center justify-between px-4 py-2 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900">Rutas</h2>
      <button
        @click="openModal"
        class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
        :class="{ 'bg-gray-300': modal }"
        >
        <i class="bx bx-plus text-lg"></i>
      </button>
    </div>
</template>
