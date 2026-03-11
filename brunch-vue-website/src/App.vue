<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HeroSection from './components/HeroSection.vue'
import MainNavbar from './components/MainNavbar.vue';
import IndianFlavours from './components/IndianFlavours.vue';
import MenuList from './components/MenuList.vue';
import NewMenu from './components/NewMenu.vue';
import BookingForm from './components/BookingForm.vue';
import FooterMenu from './components/FooterMenu.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
      <MainNavbar/>
      <HeroSection  />
      <IndianFlavours/>
      <MenuList/>
      <NewMenu/>
      <BookingForm/>
      <FooterMenu/>
      <Footer/>

  </header>

</template>

<style scoped>

</style>
