<script setup>
import heroImage from '@/assets/images/heroImage.png'
</script>

<template>
  <section class=" max-h-250">
    <div :style="{ backgroundImage: `url(${heroImage})` }" class="flex bg-cover bg-center h-250 w-full">
      <div class="flex flex-col items-center justify-center bg-light opacity-80  h-118 w-189.5 mx-auto mt-75" >
        <h1 class="font-['Cookie'] text-[104.17px] text-[#333333] bg-red-500 leading-0 mb-3.5">Brunch</h1>
        <div>
        <p class=" text-[#996600] text-[76.99px]  ">FULL WEBSITE</p>
        </div>
        <button class="bg-white text-[38.49px] text-[#333333] font-semibold h-14.5 w-67" >READ MORE</button>
      </div>
    </div>
  </section>
</template>


