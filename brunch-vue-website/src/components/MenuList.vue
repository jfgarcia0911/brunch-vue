<script>
export default {
  data() {
    return {
      titles: [
        {
          title: 'Meals',
        },
        {
          title: 'Spices',
        },
        {
          title: 'Book',
        },
        {
          title: 'Gallery',
        },
      ],
    }
  },
}
</script>

<template>
  <section class="h-400 bg-darkgray">
    <div
      :style="{ backgroundImage: `url(/menu-list-bg.png)` }"
      class="flex bg-cover bg-center h-300 w-full items-center justify-center"
    >
      <div class="bg-light opacity-80 w-270 h-258 grid grid-cols-4 auto-rows-fr place-items-center">
        <div class="col-span-4">
          <h1 class="font-['Cookie'] text-darkgray text-[77px] leading-none text-center">India</h1>
          <h2 class="font-semibold text-[48px] leading-none text-center text-[#996600]">
            ON YOUR PLATE
          </h2>
        </div>

        <div>
          <img
            src="/tikka-chicken.png"
            alt="Tikka Chicken Dish"
            class="w-67.5 h-64.5 object-cover"
          />
        </div>
        <div>
          <h1 class="text-center font-bold text-[18px]">TIKKA CHICKEN</h1>
          <p class="text-center w-40 leading-none text-[16.7px] my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          </p>
          <p class="text-center font-bold text-[16.15px]">$14.95</p>
        </div>
        <div>
          <img src="/spicy-wedges.png" alt="Spicy Wedges Dish" class="w-67.5 h-64.5 object-cover" />
        </div>
        <div>
          <h1 class="text-center font-bold text-[18px]">SPICY WEDGES</h1>
          <p class="text-center w-40 leading-none text-[16.7px] my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          </p>
          <p class="text-center font-bold text-[16.15px]">$10.95</p>
        </div>
        <div>
          <h1 class="text-center font-bold text-[18px]">CHICKEN CURRY</h1>
          <p class="text-center w-40 leading-none text-[16.7px] my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          </p>
          <p class="text-center font-bold text-[16.15px]">$14.95</p>
        </div>
        <div>
          <img
            src="/chicken-curry.png"
            alt="Chicken CUrry Dish"
            class="w-67.5 h-64.5 object-cover"
          />
        </div>
        <div>
          <h1 class="text-center font-bold text-[18px]">RED CURRY</h1>
          <p class="text-center w-40 leading-none text-[16.7px] my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          </p>
          <p class="text-center font-bold text-[16.15px]">$18.95</p>
        </div>
        <div>
          <img src="/red-curry.png" alt="Red Curry Dish" class="w-67.5 h-64.5 object-cover" />
        </div>
        <div>
          <img
            src="/spicy-veggies.png"
            alt="Spicy Veggies Dish"
            class="w-67.5 h-64.5 object-cover"
          />
        </div>
        <div>
          <h1 class="text-center font-bold text-[18px]">SPICY VEGGIES</h1>
          <p class="text-center w-40 leading-none text-[16.7px] my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          </p>
          <p class="text-center font-bold text-[16.15px]">$11.95</p>
        </div>
        <div>
          <img src="/spicy-mix.png" alt="Spicy Mix Dish" class="w-67.5 h-64.5 object-cover" />
        </div>
        <div>
          <h1 class="text-center font-bold text-[18px]">SPICY Mix</h1>
          <p class="text-center w-40 leading-none text-[16.7px] my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          </p>
          <p class="text-center font-bold text-[16.15px]">$11.95</p>
        </div>
      </div>
    </div>
    <div class="h-100">
      <div class="w-full h-full bg-light relative text-darkgray">
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-[29.17px] mt-22 mb-6">Traditional cuisine made easy</h1>
          <p class="w-170 text-[18.75px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </p>
        </div>
        <!-- Circle -->
        <div class="flex items-center justify-center mt-11 mb-10">
          <div v-for="n in 3" :key="n" class="bg-darkgray h-6 w-6 rounded-full"></div>
        </div>
        <div  class="flex items-center justify-center gap-6">
          <h1 v-for="(item, index) in titles" :key="index" class="text-[16.67px] font-bold">{{item.title}}</h1>
        </div>
        <div class="absolute top-0 left-0">
          <img src="/left-flower.png" alt="Flower Design" />
        </div>
        <div class="absolute top-0 right-0">
          <img src="/right-flower.png" alt="Flower Design" />
        </div>
      </div>
    </div>
  </section>
</template>
