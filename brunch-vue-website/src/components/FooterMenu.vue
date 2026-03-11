<script>
export default {
  data() {
    return {
      items: [
        {
          image: '/food-footer.png',
          title: 'Lorem ipsum dolor sit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
          date: 'Food / 16th March, 2019',
        },
        {
          image: '/spices-footer.png',
          title: 'Lorem ipsum dolor sit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
          date: 'Spices / 16th March, 2019',
        },
        {
          image: '/chicken-curry-footer.png',
          title: 'Lorem ipsum dolor sit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
          date: 'Chicken Curry / 16th March, 2019',
        },
      ],
    }
  },
}
</script>
<template>
  <section class="h-204 bg-darkgray">
    <div class="h-204 bg-light ">
      <div class="flex flex-col justify-center h-full">
        <div class="flex justify-center flex-col items-center">
          <h1 class="font-['Cookie'] text-[77.11px] text-darkgray mt-4">Discover</h1>
          <p class="font-semibold text-[47.59px] text-[#996600] -mt-11">OUR NEW MENU</p>
        </div>
        <div class="mt-10">
          <div class="flex flex-wrap items-center justify-center w-full gap-2 lg:gap-8">
            <!-- Card -->
            <div v-for="(item, index) in items" :key="index" class="w-30 sm:w-50 lg:w-75 xl:w-85 lg:h- xl:h-124 bg-white">
              <div>
                <img :src="item.image" alt="Food Menu" />
              </div>
              <div class="m-4 lg:m-6 text-darkgray">
                <h2 class="font-bold text-[14px]">Food / 16th March, 2019</h2>
                <div class="my-3">
                  <h1 class="font-bold text-[12px] md:text-[14px] lg:text-[16.67px]">Lorem ipsum dolor sit</h1>
                  <p class="text-[10px] md:text-[14px] lg:text-[16.67px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  </p>
                </div>
                <button class="font-bold text-[14px]">READ MORE</button>
                <div class="h-2 w-20 bg-[#996600]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
