<script setup lang="ts">
import MenuComponent from '@/components/landing/MenuComponent.vue'
</script>

<template>
  <MenuComponent />
  <main class="min-h-screen bg-gray-100">
    <RouterView />
  </main>
</template>
