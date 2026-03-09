<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HeroSection from './components/HeroSection.vue'
import MainNavbar from './components/MainNavbar.vue';
</script>

<template>
  <header>
      <MainNavbar/>
      <HeroSection  />

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
