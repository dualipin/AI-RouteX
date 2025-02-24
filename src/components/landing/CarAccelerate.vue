<script setup lang="ts">
import { ref, onMounted } from 'vue'

const started = ref<boolean>(false)
const showDust = ref<boolean>(false)

onMounted(() => {
  started.value = true
  setTimeout(() => {
    showDust.value = true
  }, 2600) // El polvo aparece casi al final del recorrido
})
</script>

<template>
  <div class="road">
    <div v-if="started" class="car">🚌</div>
    <div v-if="showDust" class="dust">💨</div>
  </div>
</template>

<style scoped>
.road {
  position: fixed;
  width: 100%;
  height: 100px;
  bottom: 50px;
  left: 10px;
  right: 10px;
  overflow: hidden;
  font-size: 4em;
}

.car {
  position: absolute;
  left: -100px;
  animation: reverse drive 3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

.dust {
  position: absolute;
  right: calc(100% - 100px); /* Se posiciona al final del recorrido */
  opacity: 0;
  animation: fadeDust 4s ease-out forwards;
}

@keyframes drive {
  0% {
    left: -100px;
    transform: scale(1);
  }
  100% {
    left: 100%;
    transform: scale(1.2);
  }
}

@keyframes fadeDust {
  0% {
    opacity: 0;
    transform: translateX(0);
  }
  50% {
    opacity: 1;
    transform: translateX(-10px);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
}

.car {
  position: absolute;
  left: -100px;
  animation: reverse drive 3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

.dust {
  position: absolute;
  right: calc(100% - 100px); /* Se posiciona al final del recorrido */
  opacity: 0;
  animation: fadeDust 4s ease-out forwards;
}

@keyframes drive {
  0% {
    left: -100px;
    transform: scale(1);
  }
  100% {
    left: 100%;
    transform: scale(1.2);
  }
}

@keyframes fadeDust {
  0% {
    opacity: 0;
    transform: translateX(0);
  }
  50% {
    opacity: 1;
    transform: translateX(-10px);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
}
</style>
