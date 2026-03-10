<script>
export default {
  data() {
    return {
      items: [
        {
          image: "/polygon.png",
          title: 'How many people?',
          subTitle: "2 people",
        },
        {
          image: "/calendar.png",
          title: 'When is your?',
          subTitle: "17-02-2020",
        },
        {
          image: "/clock.png",
          title: 'Time',
          subTitle: "10:00am",
        },
        {
          image: "",
          title: 'Name',
          subTitle: "Full name",
        },
        {
          image: "",
          title: 'Email',
          subTitle: "Your email address",
        },
        {
          image: "",
          title: 'Phone',
          subTitle: "Your phone",
        },




      ],
    }
  },
}
</script>

<template>
  <section class="h-332">
    <div
      :style="{ backgroundImage: `url(/booking-form-bg.png)` }"
      class="flex bg-cover bg-center h-220 w-full"
    ></div>
    <div class="h-112 bg-darkgray text-white">
      <div>
        <div class="flex justify-center">
          <h1 class="font-[Cookie] text-[77.11px] text-center mt-5">Book here</h1>
        </div>
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="(item,index) in items" :key="index" class="font-bold text-[16.67px] w-1/3 mb-9 flex justify-center">
          <div>
            <h1>{{item.title}}</h1>
          <div class="border rounded-lg flex items-center justify-between px-2 mt-1 w-60">
            <h2 class="">{{item.subTitle}}</h2>
            <img v-if="item.image" :src="item.image" alt="Polygon">
          </div>
          </div>
        </div>
        <button class="border  w-60 rounded-lg font-bold text-[16.67px] mt-4">SUBMIT</button>
      </div>
    </div>
  </section>
</template>
