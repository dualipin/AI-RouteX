<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="mb-6 text-3xl font-bold text-gray-800">Users Management</h1>

    <!-- Search and Add User Section -->
    <div class="mb-6 flex items-center justify-between">
      <div class="relative">
        <input
          type="text"
          placeholder="Search users..."
          class="rounded-lg border py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <span class="absolute top-2.5 left-3 text-gray-400"> 🔍 </span>
      </div>
      <button class="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Add New User
      </button>
    </div>

    <!-- Users Table -->
    <div class="overflow-hidden rounded-lg bg-white shadow-md">
      <table class="min-w-full">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Name
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Email
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Role
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Status
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="user in users" :key="user.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ user.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ user.role }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="
                  user.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                "
                class="inline-flex rounded-full px-2 text-xs leading-5 font-semibold"
              >
                {{ user.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button class="mr-3 text-blue-600 hover:text-blue-400">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="text-red-600 hover:text-red-900">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const users = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'Inactive',
  },
  // Add more users as needed
])
</script>
