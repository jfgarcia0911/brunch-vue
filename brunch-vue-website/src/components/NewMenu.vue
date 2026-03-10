<script>
export default {
  data() {
    return {
      items: [
        {
          image: "/tikka-chicken-2d.png",
          title: 'Meals',
          description: "Lorem ipsum dolar sit amet, consectetur adipisicing elit sed do oculis",
          price: "$14.95"
        },
        {
          image: "/soup-of-the-day-2d.png",
          title: 'Meals',
          description: "Lorem ipsum dolar sit amet, consectetur adipisicing elit sed do oculis",
          price: "$7.95"
        },
        {
          image: "/plain-papadums-2d.png",
          title: 'Meals',
          description: "Lorem ipsum dolar sit amet, consectetur adipisicing elit sed do oculis",
          price: "$1.95"
        },
        {
          image: "/yellow-curry-2d.png",
          title: 'Meals',
          description: "Lorem ipsum dolar sit amet, consectetur adipisicing elit sed do oculis",
          price: "$15.95"
        },{
          image: "/chicken-curry-2d.png",
          title: 'Meals',
          description: "Lorem ipsum dolar sit amet, consectetur adipisicing elit sed do oculis",
          price: "$12.95"
        },{
          image: "/spicy-meatballs-2d.png",
          title: 'Meals',
          description: "Lorem ipsum dolar sit amet, consectetur adipisicing elit sed do oculis",
          price: "$18.95"
        },

      ],
    }
  },
}
</script>

<template>
  <section class="h-210 bg-darkgray">
    <div
      :style="{ backgroundImage: `url(/new-menu-bg.png)` }"
      class="flex bg-cover bg-center h-210 w-full"
    >
      <div class="h-150 w-full bg-light opacity-80 mt-auto">
        <div class="flex justify-center flex-col items-center">
          <h1 class="font-['Cookie'] text-[77.11px] text-darkgray mt-4">Discover</h1>
          <p class="font-semibold text-[47.59px] text-[#996600] -mt-11">OUR NEW MENU</p>
        </div>
        <div  class="w-full flex flex-wrap justify-center  mt-7">
          <div v-for="(item,index) in items" :key="index" class="flex items-center justify-center w-1/2 mb-16">
            <div class="bg-white h-18 w-18 rounded-full items-center flex justify-center">
              <img
                :src="item.image"
                alt="Tikka Chicken Dish"
                class="w-10 h-10 object-contain"
              />
            </div>
            <div class="text-darkgray ml-2 w-80">
              <h1 class="text-[18.45px] mb-2 font-bold">{{item.title}}</h1>
              <p class="text-[16.7px] leading-tight">
                {{item.description}}
                <span class="font-bold">{{item.price}} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
