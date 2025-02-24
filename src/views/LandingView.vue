<script setup lang="ts">
import HeroComponent from '@/components/landing/HeroComponent.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const services = ref([
  {
    title: 'La placita',
    description: 'Siempre disponible, uniendo Macuspana.',
    image: 'https://random.imagecdn.app/400/250',
  },
  {
    title: 'La central',
    description: 'Mas cerca de lo mas lejos.',
    image: 'https://random.imagecdn.app/400/250',
  },
  {
    title: 'San Carlos',
    description: 'Ciudad Hermana.',
    image: 'https://random.imagecdn.app/400/250',
  },
])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <!-- Navbar -->

    <!-- Hero -->
    <HeroComponent />

    <!-- Principales Paradas -->
    <section id="services" class="container mx-auto px-4 py-16">
      <h2 class="mb-10 text-center text-4xl font-semibold text-gray-700">Principales Paradas</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <RouterLink
          to="autobuses"
          v-for="service in services"
          :key="service.title"
          class="transform overflow-hidden rounded-lg bg-white text-center shadow-lg transition duration-300 hover:scale-105"
        >
          <img :src="service.image" :alt="service.title" class="h-40 w-full rounded object-cover" />
          <div class="py-4">
            <h3 class="mt-4 text-xl font-semibold">{{ service.title }}</h3>
            <p class="mt-2 text-gray-600">{{ service.description }}</p>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Principales Rutas -->
    <section
      id="testimonials"
      class="mx-4 rounded-4xl bg-gradient-to-tl from-green-200 to-blue-800 py-16 text-white shadow-2xl shadow-blue-200"
    >
      <h2 class="text-deep-black mb-10 text-center text-4xl font-semibold">Principales Rutas</h2>
      <div class="container mx-auto px-4">
        <div class="grid gap-6 md:grid-cols-3">
          <div
            v-for="testimonial in ['El Jobo.', 'Gran Poder.', 'Belen']"
            :key="testimonial"
            class="transform rounded-lg bg-slate-800 p-6 text-center text-gray-50 shadow-lg transition duration-300 hover:scale-105"
          >
            <p class="italic">"{{ testimonial }}"</p>
            <p class="mt-4 font-semibold">⭐️⭐️⭐️⭐️⭐️</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contact" class="container mx-auto px-4 py-16 text-center">
      <h2 class="mb-10 text-4xl font-semibold text-gray-700">Contáctanos</h2>
      <p class="mb-6 text-lg text-gray-600">
        Encuéntranos en el centro de la ciudad o llámanos al (936) 107-5728.
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d474.96647407438945!2d-92.59053854169716!3d17.757272304784127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1740267229196!5m2!1ses-419!2smx"
        width="100%"
        height="450"
        style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>

    <!-- Botón flotante -->
  </div>
</template>
