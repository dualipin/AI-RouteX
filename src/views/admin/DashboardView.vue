<template>
  <!-- Content -->
  <div class="p-6">
    <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div class="rounded-md border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
        <div class="mb-6 flex justify-between">
          <div>
            <div class="mb-1 flex items-center">
              <div class="text-2xl font-semibold">10</div>
            </div>
            <div class="text-sm font-medium text-gray-400">Rutas</div>
          </div>
          <div class="dropdown">
            <button type="button" class="dropdown-toggle text-gray-400 hover:text-gray-600">
              <i class="ri-more-fill"></i>
            </button>
            <ul
              class="dropdown-menu z-30 hidden w-full max-w-[140px] rounded-md border border-gray-100 bg-white py-1.5 shadow-md shadow-black/5"
            >
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Profile</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>

        <a href="/gebruikers" class="text-sm font-medium text-[#f84525] hover:text-red-800">View</a>
      </div>
      <div class="rounded-md border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
        <div class="mb-4 flex justify-between">
          <div>
            <div class="mb-1 flex items-center">
              <div class="text-2xl font-semibold">1000</div>
              <div
                class="ml-2 rounded bg-emerald-500/10 p-1 text-[12px] leading-none font-semibold text-emerald-500"
              >
                +30%
              </div>
            </div>
            <div class="text-sm font-medium text-gray-400">Usuarios Activos</div>
          </div>
          <div class="dropdown">
            <button type="button" class="dropdown-toggle text-gray-400 hover:text-gray-600">
              <i class="ri-more-fill"></i>
            </button>
            <ul
              class="dropdown-menu z-30 hidden w-full max-w-[140px] rounded-md border border-gray-100 bg-white py-1.5 shadow-md shadow-black/5"
            >
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Profile</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
        <a href="/dierenartsen" class="text-sm font-medium text-[#f84525] hover:text-red-800"
          >View</a
        >
      </div>
      <div class="rounded-md border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
        <div class="mb-6 flex justify-between">
          <div>
            <div class="mb-1 text-2xl font-semibold">50</div>
            <div class="text-sm font-medium text-gray-400">Vehículos en paradas</div>
          </div>
          <div class="dropdown">
            <button type="button" class="dropdown-toggle text-gray-400 hover:text-gray-600">
              <i class="ri-more-fill"></i>
            </button>
            <ul
              class="dropdown-menu z-30 hidden w-full max-w-[140px] rounded-md border border-gray-100 bg-white py-1.5 shadow-md shadow-black/5"
            >
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Profile</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
        <a href="" class="text-sm font-medium text-[#f84525] hover:text-red-800">View</a>
      </div>
    </div>
    <div class="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div
        class="relative mb-4 flex w-full min-w-0 flex-col rounded bg-gray-50 p-6 break-words shadow-lg lg:mb-0 dark:bg-gray-800"
      >
        <div class="mb-0 rounded-t border-0 px-0">
          <div class="flex flex-wrap items-center px-4 py-2">
            <div class="relative w-full max-w-full flex-1 flex-grow">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-50">
                Ocupación de paradas
              </h3>
            </div>
          </div>
          <div class="block w-full overflow-x-auto">
            <table class="w-full border-collapse items-center bg-transparent">
              <thead>
                <tr>
                  <th
                    class="border border-r-0 border-l-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold whitespace-nowrap text-gray-500 uppercase dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100"
                  >
                    Parada
                  </th>
                  <th
                    class="border border-r-0 border-l-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold whitespace-nowrap text-gray-500 uppercase dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100"
                  >
                    Rutas
                  </th>
                  <th
                    class="min-w-140-px border border-r-0 border-l-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold whitespace-nowrap text-gray-500 uppercase dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-gray-700 dark:text-gray-100">
                  <th
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 text-left align-middle text-xs whitespace-nowrap"
                  >
                    La Placita
                  </th>
                  <td
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 align-middle text-xs whitespace-nowrap"
                  >
                    20
                  </td>
                  <td
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 align-middle text-xs whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <span class="mr-2">70%</span>
                      <div class="relative w-full">
                        <div class="flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
                          <div
                            style="width: 70%"
                            class="flex flex-col justify-center bg-blue-600 text-center whitespace-nowrap text-white shadow-none"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="text-gray-700 dark:text-gray-100">
                  <th
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 text-left align-middle text-xs whitespace-nowrap"
                  >
                    La Central
                  </th>
                  <td
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 align-middle text-xs whitespace-nowrap"
                  >
                    10
                  </td>
                  <td
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 align-middle text-xs whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <span class="mr-2">40%</span>
                      <div class="relative w-full">
                        <div class="flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
                          <div
                            style="width: 40%"
                            class="flex flex-col justify-center bg-blue-500 text-center whitespace-nowrap text-white shadow-none"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="text-gray-700 dark:text-gray-100">
                  <th
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 text-left align-middle text-xs whitespace-nowrap"
                  >
                    Parisina
                  </th>
                  <td
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 align-middle text-xs whitespace-nowrap"
                  >
                    5
                  </td>
                  <td
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 align-middle text-xs whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <span class="mr-2">45%</span>
                      <div class="relative w-full">
                        <div class="flex h-2 overflow-hidden rounded bg-pink-200 text-xs">
                          <div
                            style="width: 45%"
                            class="flex flex-col justify-center bg-pink-500 text-center whitespace-nowrap text-white shadow-none"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="text-gray-700 dark:text-gray-100">
                  <th
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 text-left align-middle text-xs whitespace-nowrap"
                  >
                    San Carlos
                  </th>
                  <td
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 align-middle text-xs whitespace-nowrap"
                  >
                    4
                  </td>
                  <td
                    class="border-t-0 border-r-0 border-l-0 p-4 px-4 align-middle text-xs whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <span class="mr-2">60%</span>
                      <div class="relative w-full">
                        <div class="flex h-2 overflow-hidden rounded bg-red-200 text-xs">
                          <div
                            style="width: 60%"
                            class="flex flex-col justify-center bg-red-500 text-center whitespace-nowrap text-white shadow-none"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="rounded-md border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
        <div class="mb-4 flex items-start justify-between">
          <div class="font-medium">Proximas salidas programadas</div>
          <div class="dropdown">
            <button type="button" class="dropdown-toggle text-gray-400 hover:text-gray-600">
              <i class="ri-more-fill"></i>
            </button>
            <ul
              class="dropdown-menu z-30 hidden w-full max-w-[140px] rounded-md border border-gray-100 bg-white py-1.5 shadow-md shadow-black/5"
            >
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Profile</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="overflow-hidden">
          <table class="w-full min-w-[540px]">
            <tbody>
              <tr>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <div class="flex items-center">
                    <a
                      href="#"
                      class="ml-2 truncate text-sm font-medium text-gray-600 hover:text-blue-500"
                      >El Jobo</a
                    >
                  </div>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span class="text-[13px] font-medium text-gray-400">19-02-2025</span>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span class="text-[13px] font-medium text-gray-400">12:00</span>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <div class="dropdown">
                    <button
                      type="button"
                      class="dropdown-toggle flex h-6 w-6 items-center justify-center rounded bg-gray-50 text-sm text-gray-400 hover:text-gray-600"
                    >
                      <i class="ri-more-2-fill"></i>
                    </button>
                    <ul
                      class="dropdown-menu z-30 hidden w-full max-w-[140px] rounded-md border border-gray-100 bg-white py-1.5 shadow-md shadow-black/5"
                    >
                      <li>
                        <a
                          href="#"
                          class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                          >Profile</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                          >Settings</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                          >Logout</a
                        >
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <div class="flex items-center">
                    <a
                      href="#"
                      class="ml-2 truncate text-sm font-medium text-gray-600 hover:text-blue-500"
                      >Gran Poder</a
                    >
                  </div>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span class="text-[13px] font-medium text-gray-400">19-02-2025</span>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span class="text-[13px] font-medium text-gray-400">13:00</span>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <div class="dropdown">
                    <button
                      type="button"
                      class="dropdown-toggle flex h-6 w-6 items-center justify-center rounded bg-gray-50 text-sm text-gray-400 hover:text-gray-600"
                    >
                      <i class="ri-more-2-fill"></i>
                    </button>
                    <ul
                      class="dropdown-menu z-30 hidden w-full max-w-[140px] rounded-md border border-gray-100 bg-white py-1.5 shadow-md shadow-black/5"
                    >
                      <li>
                        <a
                          href="#"
                          class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                          >Profile</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                          >Settings</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                          >Logout</a
                        >
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
      <div
        class="rounded-md border border-gray-100 bg-white p-6 shadow-md shadow-black/5 lg:col-span-2"
      >
        <div class="mb-4 flex items-start justify-between">
          <div class="font-medium">Otras Estadísticas</div>
          <!-- <div class="dropdown">
                <button type="button" class="dropdown-toggle text-gray-400 hover:text-gray-600"><i
                    class="ri-more-fill"></i></button>
                <ul
                  class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                  <li>
                    <a href="#"
                      class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                  </li>
                </ul>
              </div> -->
        </div>
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div class="rounded-md border border-dashed border-gray-200 p-4">
                <div class="flex items-center mb-0.5">
                  <div class="text-xl font-semibold">10</div>
                  <span
                    class="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">$80</span>
                </div>
                <span class="text-gray-400 text-sm">Active</span>
              </div>
              <div class="rounded-md border border-dashed border-gray-200 p-4">
                <div class="flex items-center mb-0.5">
                  <div class="text-xl font-semibold">50</div>
                  <span
                    class="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">+$469</span>
                </div>
                <span class="text-gray-400 text-sm">Completed</span>
              </div>
              <div class="rounded-md border border-dashed border-gray-200 p-4">
                <div class="flex items-center mb-0.5">
                  <div class="text-xl font-semibold">4</div>
                  <span
                    class="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">-$130</span>
                </div>
                <span class="text-gray-400 text-sm">Canceled</span>
              </div>
            </div> -->
        <!-- <div>
              <canvas id="order-chart"></canvas>
            </div> -->
      </div>
      <div
        class="rounded-md border border-gray-100 bg-white p-4 shadow-md shadow-black/5 lg:col-span-3"
      >
        <div class="mb-4 flex items-start justify-between">
          <div class="font-medium">Rutas en curso</div>
          <div class="dropdown">
            <button type="button" class="dropdown-toggle text-gray-400 hover:text-gray-600">
              <i class="ri-more-fill"></i>
            </button>
            <ul
              class="dropdown-menu z-30 hidden w-full max-w-[140px] rounded-md border border-gray-100 bg-white py-1.5 shadow-md shadow-black/5"
            >
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Profile</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-span-3">
          <table class="w-full">
            <thead>
              <tr>
                <th
                  class="rounded-tl-md rounded-bl-md bg-gray-50 px-4 py-2 text-left text-[12px] font-medium tracking-wide text-gray-400 uppercase"
                >
                  Ruta
                </th>
                <th
                  class="bg-gray-50 px-4 py-2 text-left text-[12px] font-medium tracking-wide text-gray-400 uppercase"
                >
                  Tiempo en ruta
                </th>
                <th
                  class="rounded-tr-md rounded-br-md bg-gray-50 px-4 py-2 text-left text-[12px] font-medium tracking-wide text-gray-400 uppercase"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <div class="flex items-center">
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      class="block h-8 w-8 rounded object-cover"
                    />
                    <a
                      href="#"
                      class="ml-2 truncate text-sm font-medium text-gray-600 hover:text-blue-500"
                      >Belen</a
                    >
                  </div>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span class="text-[13px] font-medium text-emerald-500">00:22:35</span>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span
                    class="inline-block rounded bg-emerald-500/10 p-1 text-[12px] leading-none font-medium text-emerald-500"
                    >Por llegar</span
                  >
                </td>
              </tr>
              <tr>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <div class="flex items-center">
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      class="block h-8 w-8 rounded object-cover"
                    />
                    <a
                      href="#"
                      class="ml-2 truncate text-sm font-medium text-gray-600 hover:text-blue-500"
                      >Tronchadero</a
                    >
                  </div>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span class="text-[13px] font-medium text-emerald-500">00:22:35</span>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span
                    class="inline-block rounded bg-emerald-500/10 p-1 text-[12px] leading-none font-medium text-emerald-500"
                    >Por llegar</span
                  >
                </td>
              </tr>
              <tr>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <div class="flex items-center">
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      class="block h-8 w-8 rounded object-cover"
                    />
                    <a
                      href="#"
                      class="ml-2 truncate text-sm font-medium text-gray-600 hover:text-blue-500"
                      >20 Noviembre</a
                    >
                  </div>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span class="text-[13px] font-medium text-emerald-500">00:22:35</span>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span
                    class="inline-block rounded bg-emerald-500/10 p-1 text-[12px] leading-none font-medium text-emerald-500"
                    >Por llegar</span
                  >
                </td>
              </tr>
              <tr>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <div class="flex items-center">
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      class="block h-8 w-8 rounded object-cover"
                    />
                    <a
                      href="#"
                      class="ml-2 truncate text-sm font-medium text-gray-600 hover:text-blue-500"
                      >San Fernando</a
                    >
                  </div>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span class="text-[13px] font-medium text-emerald-500">00:22:35</span>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span
                    class="inline-block rounded bg-emerald-500/10 p-1 text-[12px] leading-none font-medium text-emerald-500"
                    >Por llegar</span
                  >
                </td>
              </tr>
              <!-- <tr>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <div class="flex items-center">
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      class="block h-8 w-8 rounded object-cover"
                    />
                    <a
                      href="#"
                      class="ml-2 truncate text-sm font-medium text-gray-600 hover:text-blue-500"
                      >La via</a
                    >
                  </div>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span class="text-[13px] font-medium text-emerald-500">00:22:35</span>
                </td>
                <td class="border-b border-b-gray-50 px-4 py-2">
                  <span
                    class="inline-block rounded bg-emerald-500/10 p-1 text-[12px] leading-none font-medium text-emerald-500"
                    >Por llegar</span
                  >
                </td>
              </tr> -->
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-center">
                  <a href="#" class="text-sm font-medium text-[#f84525] hover:text-red-800"
                    >Ver más</a
                  >
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- End Content -->
</template>
<!-- <script setup lang="js">
// start: Sidebar
import Chart from "chart.js/auto"


const sidebarToggle = document.querySelector('.sidebar-toggle')
const sidebarOverlay = document.querySelector('.sidebar-overlay')
const sidebarMenu = document.querySelector('.sidebar-menu')
const main = document.querySelector('.main')
sidebarToggle.addEventListener('click', function (e) {
  e.preventDefault()
  main.classList.toggle('active')
  sidebarOverlay.classList.toggle('hidden')
  sidebarMenu.classList.toggle('-translate-x-full')
})
sidebarOverlay.addEventListener('click', function (e) {
  e.preventDefault()
  main.classList.add('active')
  sidebarOverlay.classList.add('hidden')
  sidebarMenu.classList.add('-translate-x-full')
})
document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    const parent = item.closest('.group')
    if (parent.classList.contains('selected')) {
      parent.classList.remove('selected')
    } else {
      document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function (i) {
        i.closest('.group').classList.remove('selected')
      })
      parent.classList.add('selected')
    }
  })
})
// end: Sidebar



// start: Popper
const popperInstance = {}
document.querySelectorAll('.dropdown').forEach(function (item, index) {
  const popperId = 'popper-' + index
  const toggle = item.querySelector('.dropdown-toggle')
  const menu = item.querySelector('.dropdown-menu')
  menu.dataset.popperId = popperId
  popperInstance[popperId] = Popper.createPopper(toggle, menu, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
      {
        name: 'preventOverflow',
        options: {
          padding: 24,
        },
      },
    ],
    placement: 'bottom-end'
  });
})
document.addEventListener('click', function (e) {
  const toggle = e.target.closest('.dropdown-toggle')
  const menu = e.target.closest('.dropdown-menu')
  if (toggle) {
    const menuEl = toggle.closest('.dropdown').querySelector('.dropdown-menu')
    const popperId = menuEl.dataset.popperId
    if (menuEl.classList.contains('hidden')) {
      hideDropdown()
      menuEl.classList.remove('hidden')
      showPopper(popperId)
    } else {
      menuEl.classList.add('hidden')
      hidePopper(popperId)
    }
  } else if (!menu) {
    hideDropdown()
  }
})

function hideDropdown() {
  document.querySelectorAll('.dropdown-menu').forEach(function (item) {
    item.classList.add('hidden')
  })
}
function showPopper(popperId) {
  popperInstance[popperId].setOptions(function (options) {
    return {
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }
  });
  popperInstance[popperId].update();
}
function hidePopper(popperId) {
  popperInstance[popperId].setOptions(function (options) {
    return {
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }
  });
}
// end: Popper



// start: Tab
document.querySelectorAll('[data-tab]').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    const tab = item.dataset.tab
    const page = item.dataset.tabPage
    const target = document.querySelector('[data-tab-for="' + tab + '"][data-page="' + page + '"]')
    document.querySelectorAll('[data-tab="' + tab + '"]').forEach(function (i) {
      i.classList.remove('active')
    })
    document.querySelectorAll('[data-tab-for="' + tab + '"]').forEach(function (i) {
      i.classList.add('hidden')
    })
    item.classList.add('active')
    target.classList.remove('hidden')
  })
})
// end: Tab



// start: Chart
new Chart(document.getElementById('order-chart'), {
  type: 'line',
  data: {
    labels: generateNDays(7),
    datasets: [
      {
        label: 'Active',
        data: generateRandomData(7),
        borderWidth: 1,
        fill: true,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgb(59 130 246 / .05)',
        tension: .2
      },
      {
        label: 'Completed',
        data: generateRandomData(7),
        borderWidth: 1,
        fill: true,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgb(16 185 129 / .05)',
        tension: .2
      },
      {
        label: 'Canceled',
        data: generateRandomData(7),
        borderWidth: 1,
        fill: true,
        pointBackgroundColor: 'rgb(244, 63, 94)',
        borderColor: 'rgb(244, 63, 94)',
        backgroundColor: 'rgb(244 63 94 / .05)',
        tension: .2
      },
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function generateNDays(n) {
  const data = []
  for (let i = 0; i < n; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    data.push(date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric'
    }))
  }
  return data
}
function generateRandomData(n) {
  const data = []
  for (let i = 0; i < n; i++) {
    data.push(Math.round(Math.random() * 10))
  }
  return data
}
// end: Chart

const fullscreenButton = document.getElementById('fullscreen-button');

        fullscreenButton.addEventListener('click', toggleFullscreen);

        function toggleFullscreen() {
          if (document.fullscreenElement) {
            // If already in fullscreen, exit fullscreen
            document.exitFullscreen();
          } else {
            // If not in fullscreen, request fullscreen
            document.documentElement.requestFullscreen();
          }
        }
</script> -->
