<script setup lang="ts">
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useMotion } from '@vueuse/motion'

const image = 'https://picsum.photos/200/200'
// Datos del formulario
const form = ref({ name: '', email: '', message: '' })

// Validaciones
const rules = {
  name: { required, minLength: minLength(3) },
  email: { required, email },
  message: { required, minLength: minLength(10) },
}
const v$ = useVuelidate(rules, form)

// Estado
const isSubmitting = ref(false)
const successMessage = ref('')

// Referencias para las animaciones
const formMotion = ref(null)
const inputMotion = ref(null)
const buttonMotion = ref(null)
const imageMotion = ref(null)

// Animaciones con @vueuse/motion
useMotion(formMotion, {
  initial: { opacity: 0, x: 50 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.8 } },
})
useMotion(inputMotion, {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
})
useMotion(buttonMotion, {
  initial: { opacity: 0, scale: 0.9 },
  enter: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
})
useMotion(imageMotion, {
  initial: { opacity: 0, x: -50 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.8 } },
})

// Envío del formulario
const submitForm = async () => {
  v$.value.$touch()
  if (v$.value.$invalid) return

  isSubmitting.value = true
  successMessage.value = ''

  await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulación de envío

  successMessage.value = '¡Mensaje enviado con éxito!'
  isSubmitting.value = false
  form.value = { name: '', email: '', message: '' }
  v$.value.$reset()
}
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center gap-5 bg-gray-100 p-6 md:flex-row md:px-32"
  >
    <!-- Imagen decorativa -->
    <div
      ref="imageMotion"
      class="mb-6 hidden h-[40em] w-1/3 justify-center p-6 md:mb-0 md:flex md:w-1/2"
    >
      <img
        :src="image"
        alt="Contacto"
        class="h-full w-full rounded-2xl border border-gray-50 object-cover shadow-lg"
      />
    </div>

    <!-- Formulario -->
    <div
      ref="formMotion"
      class="w-full rounded-2xl bg-white p-8 shadow-2xl transition-all md:w-1/2"
    >
      <h2 class="mb-6 text-center text-3xl font-bold text-gray-800">Contáctanos</h2>

      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- Nombre -->
        <div ref="inputMotion">
          <label class="block font-semibold text-gray-700">Nombre</label>
          <input
            v-model="form.name"
            type="text"
            class="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            :class="{ 'border-red-500': v$.name.$error }"
            placeholder="Tu nombre"
          />
          <span v-if="v$.name.$error" class="text-sm text-red-500"
            >Debe tener al menos 3 caracteres</span
          >
        </div>

        <!-- Correo -->
        <div ref="inputMotion">
          <label class="block font-semibold text-gray-700">Correo Electrónico</label>
          <input
            v-model="form.email"
            type="email"
            class="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            :class="{ 'border-red-500': v$.email.$error }"
            placeholder="tucorreo@ejemplo.com"
          />
          <span v-if="v$.email.$error" class="text-sm text-red-500">Correo inválido</span>
        </div>

        <!-- Mensaje -->
        <div ref="inputMotion">
          <label class="block font-semibold text-gray-700">Mensaje</label>
          <textarea
            v-model="form.message"
            rows="4"
            class="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            :class="{ 'border-red-500': v$.message.$error }"
            placeholder="Escribe tu mensaje..."
          ></textarea>
          <span v-if="v$.message.$error" class="text-sm text-red-500">Mínimo 10 caracteres</span>
        </div>

        <!-- Botón de enviar -->
        <div class="flex justify-center">
          <button
            ref="buttonMotion"
            type="submit"
            :disabled="isSubmitting"
            class="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 md:w-auto dark:focus:ring-blue-800"
          >
            {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
          </button>
        </div>

        <!-- Mensaje de éxito -->
        <p v-if="successMessage" class="mt-4 text-center font-medium text-green-600">
          {{ successMessage }}
        </p>
      </form>
    </div>
  </div>
</template>
