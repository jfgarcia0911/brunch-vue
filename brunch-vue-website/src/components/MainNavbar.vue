
<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="text-white text-[35.02px] absolute top-5 w-full">
    <div class=" mx-auto w-300">
      <div class="flex justify-between items-center font-bold">
        <!-- Logo / Brand -->
        <div class="shrink-0">
          <h1 class=" font-bold ">BRUNCH</h1>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-3">
          <a href="#" class=" hover:text-gray-900 px-3 py-2 ">WELCOME</a>
          <a href="#" class=" hover:text-gray-900 px-3 py-2  ">MENU</a>
          <a href="#" class=" hover:text-gray-900 px-3 py-2  ">EVENTS</a>
          <a href="#" class=" hover:text-gray-900 px-3 py-2  ">CONTACT</a>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            @click="toggleMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md  hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            aria-controls="mobile-menu"
            :aria-expanded="isMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon: menu open/close -->
            <svg
              :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state -->
    <div
      id="mobile-menu"
      v-show="isMenuOpen"
      class="md:hidden"
    >
      <div class=" ">
        <a href="#" class=" font-bold">WELCOME</a>
        <a href="#" class=" font-bold">MENU</a>
        <a href="#" class=" font-bold">EVENTS</a>
        <a href="#" class=" font-bold">CONTACT</a>
      </div>
    </div>
  </nav>
</template>
