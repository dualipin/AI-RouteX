<script setup lang="ts">
import NotificationsHeader from './NotificationsHeader.vue'

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<template>
  <div
    class="sticky top-0 left-0 z-30 flex items-center bg-white/50 px-6 py-2 shadow-md shadow-black/5 backdrop-blur-sm"
  >
    <button type="button" class="sidebar-toggle text-lg font-semibold text-gray-900">
      <i class="ri-menu-line"></i>
    </button>

    <ul class="ml-auto flex items-center">
      <li class="dropdown mr-1">
        <button
          type="button"
          class="dropdown-toggle mr-4 flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="rounded-full hover:bg-gray-100"
            viewBox="0 0 24 24"
            style=""
          >
            <path
              d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
            ></path>
          </svg>
        </button>
        <div
          class="dropdown-menu z-30 hidden w-full max-w-xs rounded-md border border-gray-100 bg-white shadow-md shadow-black/5"
        >
          <form action="" class="border-b border-b-gray-100 p-4">
            <div class="relative w-full">
              <input
                type="text"
                class="w-full rounded-md border border-gray-100 bg-gray-50 py-2 pr-4 pl-10 text-sm outline-none focus:border-blue-500"
                placeholder="Search..."
              />
              <i class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-900"></i>
            </div>
          </form>
        </div>
      </li>
      <li class="dropdown">
        <button
          type="button"
          class="dropdown-toggle mr-4 flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="rounded-full hover:bg-gray-100"
            viewBox="0 0 24 24"
            style=""
          >
            <path
              d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"
            ></path>
          </svg>
        </button>
        <div
          class="dropdown-menu z-30 hidden w-full max-w-xs rounded-md border border-gray-100 bg-white shadow-md shadow-black/5"
        >
          <div class="notification-tab flex items-center border-b border-b-gray-100 px-4 pt-4">
            <button
              type="button"
              data-tab="notification"
              data-tab-page="notifications"
              class="active mr-4 border-b-2 border-b-transparent pb-1 text-[13px] font-medium text-gray-400 hover:text-gray-600"
            >
              Notifications
            </button>
            <button
              type="button"
              data-tab="notification"
              data-tab-page="messages"
              class="mr-4 border-b-2 border-b-transparent pb-1 text-[13px] font-medium text-gray-400 hover:text-gray-600"
            >
              Messages
            </button>
          </div>
          <div class="my-2">
            <ul
              class="max-h-64 overflow-y-auto"
              data-tab-for="notification"
              data-page="notifications"
            >
              <li>
                <a href="#" class="group flex items-center px-4 py-2 hover:bg-gray-50">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    class="block h-8 w-8 rounded object-cover align-middle"
                  />
                  <div class="ml-2">
                    <div
                      class="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500"
                    >
                      New order
                    </div>
                    <div class="text-[11px] text-gray-400">from a user</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="group flex items-center px-4 py-2 hover:bg-gray-50">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    class="block h-8 w-8 rounded object-cover align-middle"
                  />
                  <div class="ml-2">
                    <div
                      class="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500"
                    >
                      New order
                    </div>
                    <div class="text-[11px] text-gray-400">from a user</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="group flex items-center px-4 py-2 hover:bg-gray-50">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    class="block h-8 w-8 rounded object-cover align-middle"
                  />
                  <div class="ml-2">
                    <div
                      class="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500"
                    >
                      New order
                    </div>
                    <div class="text-[11px] text-gray-400">from a user</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="group flex items-center px-4 py-2 hover:bg-gray-50">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    class="block h-8 w-8 rounded object-cover align-middle"
                  />
                  <div class="ml-2">
                    <div
                      class="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500"
                    >
                      New order
                    </div>
                    <div class="text-[11px] text-gray-400">from a user</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="group flex items-center px-4 py-2 hover:bg-gray-50">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    class="block h-8 w-8 rounded object-cover align-middle"
                  />
                  <div class="ml-2">
                    <div
                      class="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500"
                    >
                      New order
                    </div>
                    <div class="text-[11px] text-gray-400">from a user</div>
                  </div>
                </a>
              </li>
            </ul>
            <NotificationsHeader />
          </div>
        </div>
      </li>
      <button class="hover:scale-105" id="fullscreen-button" @click="toggleFullScreen()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="rounded-full hover:bg-gray-100"
          viewBox="0 0 24 24"
          style=""
        >
          <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"></path>
        </svg>
      </button>

      <li class="dropdown ml-3">
        <button type="button" class="dropdown-toggle flex items-center">
          <div class="relative h-10 w-10 flex-shrink-0">
            <div class="rounded-full bg-white p-1 focus:ring focus:outline-none">
              <img
                class="h-8 w-8 rounded-full"
                src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                alt=""
              />
              <div
                class="absolute top-0 left-7 h-3 w-3 animate-ping rounded-full border-2 border-white bg-lime-400"
              ></div>
              <div
                class="absolute top-0 left-7 h-3 w-3 rounded-full border-2 border-white bg-lime-500"
              ></div>
            </div>
          </div>
          <div class="p-2 text-left md:block">
            <h2 class="text-sm font-semibold text-gray-800">Martin Sanchez</h2>
            <p class="text-xs text-gray-500">Administrador</p>
          </div>
        </button>
        <ul
          class="dropdown-menu z-30 hidden w-full max-w-[140px] rounded-md border border-gray-100 bg-white py-1.5 shadow-md shadow-black/5"
        >
          <li>
            <a
              href="#"
              class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-[#f84525]"
              >Profile</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-[#f84525]"
              >Settings</a
            >
          </li>
          <li>
            <form method="POST" action="">
              <a
                role="menuitem"
                class="flex cursor-pointer items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-[#f84525]"
                @click="() => {}"
              >
                Log Out
              </a>
            </form>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
