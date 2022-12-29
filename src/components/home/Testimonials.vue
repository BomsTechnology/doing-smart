<script setup lang="ts">
import bg from "@/assets/bg2.png";
import Testimonial from "@/components/Testimonial.vue";
</script>
<template>
  <div
    :style="`background-image: url(${bg})`"
    class="w-full overflow-hidden relative bg-cover bg-gray-800 text-white"
  >
    <div
      class="py-10 lg:py-20 xl:px-52 px-6 md:px-10 h-full w-full bg-gray-800/70"
    >
      <div class="flex lg:justify-start justify-center w-full">
        <div
          class="rounded-full shadow bg-white px-4 py-2 flex items-center space-x-3 text-gray-500 uppercase font-medium text-xs sm:text-sm"
        >
          <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
          <h1>Avis client</h1>
          <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
        </div>
      </div>
      <div
        class="mt-6 flex lg:flex-row flex-col lg:justify-start justify-center items-center lg:space-x-10 space-x-0 lg:space-y-0 space-y-4"
      >
        <h1 class="font-bold lg:text-5xl text-2xl md:text-3xl">
          <span class="text-smart-blue">Commentaires</span> de clients
        </h1>
        <p class="sm:w-2/5 w-full lg:px-0 px-4 lg:text-left text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At odit,
          vero beatae repellat a consectetur quaerat omnis possimus perspiciatis
          illum assumenda laborum
        </p>
      </div>
      <div
        class="grid w-full lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 mt-10 sm:mt-20"
      >
        <Testimonial />
      </div>
    </div>
  </div>
</template>
