<script setup lang="ts">
import ActionFloatButton from '@/components/landing/ActionFloatButton.vue'
import FooterLanding from '@/components/landing/FooterLanding.vue'
import MenuComponent from '@/components/landing/MenuComponent.vue'

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const isScrolled = ref(false)

const route = useRoute()

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <MenuComponent :is-scrolled="isScrolled" />
  <main class="min-h-screen bg-gray-100">
    <RouterView />
  </main>

  <FooterLanding />

  <ActionFloatButton v-show="route.path !== '/schedule'" :is-scrolled="isScrolled" />
</template>
