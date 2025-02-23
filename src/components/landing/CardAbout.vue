<template>
  <div
    class="rounded-lg border border-slate-300 bg-slate-800 p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl"
  >
    <h3 class="mb-4 text-3xl font-semibold">
      <slot name="title" />
    </h3>
    <div>
      <slot />
    </div>
  </div>
</template>
