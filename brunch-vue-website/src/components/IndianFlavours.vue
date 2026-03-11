<template>
  <section class="bg-darkgray h-216 ">
    <div class="h-122">
      <div class="flex h-88.25 pt-3 mx-4 md:pt-18">
        <div class="flex flex-wrap  items-center justify-center w-full gap-17">
          <div class="md:w-80 lg:w-100 xl:w-138">
            <h1 class="text-white text-[24.17px] md:text-[29.17px] font-bold">Indian traditional flavours</h1>
            <p class="text-white text-[13.75px] md:text-[18.75px] mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim beniam, quis nostrud
              exercitation illamco laboris
            </p>
          </div>
          <img src="/indian-flavours.png" alt="Logo" class="w-70 md:w-80 lg:110 xl:w-131 md:h-60 lg:h-70 xl:h-88" />
        </div>
      </div>
    </div>
    <div class="bg-white h-94">
      <div class="flex justify-center items-center h-full">
        <div class="flex justify-between items-center w-270 mx-4 ">
          <!-- Card -->
        <div class="w-35 sm:w-40 md:w-50 lg:w-67 " v-for="(item, index) in items" :key="index">
          <div class="flex gap-1  ">
            <div v-for="n in item.circles" :key="n" class="bg-darkgray h-5 w-5 md:h-8 md:w-8 rounded-full"></div>
          </div>
          <h1 class="text-bold text-lg md:text-2xl mt-6 mb-7">{{item.title}}</h1>
          <p class="text-xs md:text-md">
            {{item.text}}
          </p>
        </div  >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          circles: 1,
          title: 'New tastes',
          text: 'Lorem ipsum dolor sit amet, consecte sectetur adipiscing elit, tation omne ullamco laboris nisi ut aliqilore.',
        },
        {
          circles: 2,
          title: 'New spices',
          text: 'Lorem ipsum dolor sit amet, consecte sectetur adipiscing elit, tation omne ullamco laboris nisi ut aliqilore.',
        },
        {
          circles: 3,
          title: 'New dishes',
          text: 'Lorem ipsum dolor sit amet, consecte sectetur adipiscing elit, tation omne ullamco laboris nisi ut aliqilore.',
        },
      ],
    }
  },
}
</script>
