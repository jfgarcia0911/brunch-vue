<script setup>
import heroImage from '@/assets/images/heroImage.png'
</script>

<template>
  <section class=" max-h-250">
    <div :style="{ backgroundImage: `url(${heroImage})` }" class="flex bg-cover bg-center h-250 w-full">
      <div class="flex flex-col items-center justify-center bg-light opacity-80 h-80 md:h-118 w-140 md:w-189.5 mx-auto mt-75" >
        <h1 class="font-['Cookie'] text-[84.17px]  md:text-[104.17px] text-darkgray bg-red-500 leading-0 mb-3.5">Brunch</h1>
        <div>
        <p class=" text-[#996600] text-[56.99px] md:text-[76.99px]  ">FULL WEBSITE</p>
        </div>
        <button class="bg-white text-[28.49px] md:text-[38.49px] text-darkgray font-semibold  md:h-14.5 px-3 md:w-67" >READ MORE</button>
      </div>
    </div>
  </section>
</template>


