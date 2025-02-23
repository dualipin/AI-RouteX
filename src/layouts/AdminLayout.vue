<script setup lang="ts">
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue'
import SideMenuAdmin from '@/components/admin/SidebarAdmin.vue'
</script>

<template>
  <HeaderAdmin />
  <SideMenuAdmin />
  <div class="font-inter text-gray-800">
    <main class="main w-full bg-gray-200 transition-all md:ml-64 md:w-[calc(100%-256px)]">
      <RouterView />
    </main>
  </div>
</template>
