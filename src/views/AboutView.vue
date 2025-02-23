<script setup lang="ts">
import CardAbout from '@/components/landing/CardAbout.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-tl pt-26 pb-10">
    <div class="container mx-auto p-4 text-center text-lg">
      <h1 class="mt-10 text-center text-4xl font-bold">¿Quienes Somos?</h1>
      <p class="mt-3 text-lg">
        Somos un grupo de personas que estamos comprometidos con la mejora del sistema de transporte
        publico del municipio de Macuspana
      </p>

      <h2 class="mt-16 text-4xl font-bold">¿Que pretendemos?</h2>
      <p class="mt-3">
        Se pretende que la plataforma en linea
        <span class="rounded-md bg-black px-2 font-semibold text-white">AI</span> RouteX funcione
        como una herramienta en la que cualquier persona que desee viajar dentro del municipio sepa
        que ruta tomar, costos y pueda identifica la unidad que debe tomar o si esta ya salio de la
        parada. Asi como tomar sus medidas si el transporte se encuentra lleno.
      </p>
    </div>
    <div
      class="mx-4 mt-16 grid grid-cols-1 gap-10 rounded-3xl bg-gradient-to-tl from-green-200 to-blue-800 p-10 shadow md:mx-16 md:grid-cols-3 md:p-20"
    >
      <CardAbout>
        <template #title> <i class="bi bi-flag mr-3"></i>Misión </template>
        <p>
          Ser una plataforma que facilite el acceso a información del transporte público, mejorando
          la experiencia de viaje de los usuarios.
        </p>
      </CardAbout>
      <CardAbout>
        <template #title> <i class="bi bi-award mr-3"></i>Valores </template>
        <ul class="list-disc pl-5">
          <li>Compromiso</li>
          <li>Innovación</li>
          <li>Transparencia</li>
          <li>Responsabilidad</li>
        </ul>
      </CardAbout>
      <CardAbout>
        <template #title> <i class="bi bi-eye mr-3"></i>Visión </template>
        Ser la plataforma líder en información de transporte público, reconocida por su precisión y
        utilidad.
      </CardAbout>
    </div>
  </div>
</template>
