<template>
  <section class="bg-darkgray h-216 ">
    <div class="h-122">
      <div class="flex h-88.25">
        <div class="flex mt-36.5 items-center justify-center w-full gap-17">
          <div class="w-138">
            <h1 class="text-white text-[29.17px] font-bold">Indian traditional flavours</h1>
            <p class="text-dargray text-[18.75px] mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim beniam, quis nostrud
              exercitation illamco laboris
            </p>
          </div>
          <img src="/indian-flavours.png" alt="Logo" class="w-131.75 h-88.25" />
        </div>
      </div>
    </div>
    <div class="bg-white h-94">
      <div class="flex justify-center">
        <!-- Card -->
        <div class="w-72 mt-10" v-for="(item, index) in items" :key="index">
          <div class="flex gap-1 mt-15">
            <div v-for="n in item.circles" :key="n" class="bg-darkgray h-8 w-8 rounded-full"></div>
          </div>
          <h1 class="text-bold text-2xl mt-6 mb-7">{{item.title}}</h1>
          <p>
            {{item.text}}
          </p>
        </div  >
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
