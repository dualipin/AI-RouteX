<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  isScrolled: {
    type: Boolean,
    required: true,
  },
})

const route = useRoute()
const bottomOffset = ref('5px')

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  if (!(document.documentElement.clientWidth < 1024)) return
  if (documentHeight - scrollPosition <= 40) {
    bottomOffset.value = '50px' // 5px original + 40px offset
  } else {
    bottomOffset.value = '5px'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleClick = () => {
  console.log('Floating action button clicked')
}
</script>

<template>
  <div
    v-if="isScrolled || route.path !== '/'"
    :style="{ bottom: bottomOffset }"
    class="fixed right-5"
  >
    <button
      @click="handleClick"
      class="h-14 transform rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-4 text-lg text-white shadow-lg transition-transform hover:scale-110 hover:from-pink-600 hover:to-purple-600"
    >
      Echa un vistazo 🚀
    </button>
  </div>
</template>
