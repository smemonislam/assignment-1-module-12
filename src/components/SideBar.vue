<script setup></script>

<template>
  <aside
    id="cta-button-sidebar"
    class="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-slate-900 border-r">
      <ul class="flex flex-col space-y-2">
        <!-- ITEM -->
        <li class="text-sm text-gray-500">
          <a
            href="#"
            class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
          >
            <div class="pr-2">
              <svg
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>Dashboard</div>
          </a>
        </li>

        <!-- Section Devider -->
        <div
          class="section border-b pt-4 mb-4 text-xs text-gray-600 border-gray-700 pb-1 pl-3"
        >
          Products
        </div>
        <!-- ITEM -->
        <li class="text-sm text-gray-500">
          <a
            href="#"
            class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
          >
            <div class="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>
            </div>
            <div>Product List</div>
          </a>
        </li>

        <!-- Section Devider -->
        <div
          class="section border-b pt-4 mb-4 text-xs text-gray-600 border-gray-700 pb-1 pl-3"
        >
          Work
        </div>

        <!-- ITEM -->
        <li class="text-sm text-gray-500">
          <a
            href="#"
            class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
          >
            <div class="pr-2">
              <svg
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
            </div>
            <div>Tasks</div>
          </a>
        </li>

        <!-- ITEM -->
        <li class="text-sm text-gray-500">
          <a
            href="#"
            class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
          >
            <div class="pr-2">
              <svg
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>Errors &amp; Bugs</div>
          </a>
        </li>

        <!-- Section Devider -->
        <div
          class="section border-b pt-4 mb-4 text-xs text-gray-600 border-gray-700 pb-1 pl-3"
        >
          Managment
        </div>

        <!-- List ITEM -->
        <li class="text-sm text-gray-500">
          <a
            href="#"
            @click.prevent="selected = selected === 'Team' ? '' : 'Team'"
            class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
          >
            <div class="pr-2">
              <svg
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <div>Team</div>
            <div
              class="absolute right-1.5 transition-transform duration-300"
              :class="{ 'rotate-180': selected === 'Team' }"
            >
              <svg
                class="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </a>

          <div
            class="pl-4 pr-2 overflow-hidden transition-all transform translate duration-300 max-h-0"
            :style="
              selected === 'Team'
                ? 'max-height: ' + $el.scrollHeight + 'px'
                : ''
            "
            style=""
          >
            <ul
              class="flex flex-col mt-2 pl-2 text-gray-500 border-l border-gray-700 space-y-1 text-xs"
            >
              <!-- Item -->
              <li class="text-sm text-gray-500">
                <a
                  href="#"
                  class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
                >
                  <div>Users List</div>
                </a>
              </li>
              <!-- Item -->
              <li class="text-sm text-gray-500">
                <a
                  href="#"
                  class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
                >
                  <div>Create User</div>
                </a>
              </li>
            </ul>
          </div>
        </li>

        <!-- List ITEM -->
        <li class="text-sm text-gray-500">
          <a
            href="#"
            @click.prevent="
              selected = selected === 'Projects' ? '' : 'Projects'
            "
            class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
          >
            <div class="pr-2">
              <svg
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
            </div>
            <div>Projects</div>
            <div
              class="absolute right-1.5 transition-transform duration-300"
              :class="{ 'rotate-180': selected === 'Projects' }"
            >
              <svg
                class="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </a>

          <div
            class="pl-4 pr-2 overflow-hidden transition-all transform translate duration-300 max-h-0"
            :style="
              selected === 'Projects'
                ? 'max-height: ' + $el.scrollHeight + 'px'
                : ''
            "
            style=""
          >
            <ul
              class="flex flex-col mt-2 pl-2 text-gray-500 border-l border-gray-700 space-y-1 text-xs"
            >
              <!-- Item -->
              <li class="text-sm text-gray-500">
                <a
                  href="#"
                  class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
                >
                  <div>List</div>
                </a>
              </li>
              <!-- Item -->
              <li class="text-sm text-gray-500">
                <a
                  href="#"
                  class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
                >
                  <div>Create Project</div>
                </a>
              </li>
            </ul>
          </div>
        </li>

        <!-- List ITEM -->
        <li class="text-sm text-gray-500">
          <a
            href="#"
            @click.prevent="selected = selected === 'Tasks' ? '' : 'Tasks'"
            class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
          >
            <div class="pr-2">
              <svg
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
            </div>
            <div>Tasks</div>
            <div
              class="absolute right-1.5 transition-transform duration-300"
              :class="{ 'rotate-180': selected === 'Tasks' }"
            >
              <svg
                class="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </a>

          <div
            class="pl-4 pr-2 overflow-hidden transition-all transform translate duration-300 max-h-0"
            :style="
              selected === 'Tasks'
                ? 'max-height: ' + $el.scrollHeight + 'px'
                : ''
            "
            style=""
          >
            <ul
              class="flex flex-col mt-2 pl-2 text-gray-500 border-l border-gray-700 space-y-1 text-xs"
            >
              <!-- Item -->
              <li class="text-sm text-gray-500">
                <a
                  href="#"
                  class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
                >
                  <div>List</div>
                </a>
              </li>
              <!-- Item -->
              <li class="text-sm text-gray-500">
                <a
                  href="#"
                  class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
                >
                  <div>My tasks</div>
                </a>
              </li>
              <li class="text-sm text-gray-500">
                <a
                  href="#"
                  class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
                >
                  <div>Create Task</div>
                </a>
              </li>

              <li class="text-sm text-gray-500">
                <a
                  href="#"
                  class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
                >
                  <div>Active Task</div>
                </a>
              </li>
              <li class="text-sm text-gray-500">
                <a
                  href="#"
                  class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
                >
                  <div>In Progress</div>
                </a>
              </li>
              <li class="text-sm text-gray-500">
                <a
                  href="#"
                  class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
                >
                  <div>Closed Task</div>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped></style>
