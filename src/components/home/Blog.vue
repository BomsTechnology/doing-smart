<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import Article from "../Article.vue";
</script>
<template>
  <div class="w-full py-10 xl:px-36 md:px-10 px-4 relative bg-white">
    <div class="w-full flex justify-center">
      <div
        class="rounded-full shadow bg-white px-4 py-2 inline-flex items-center space-x-3 mx-auto text-gray-500 uppercase font-medium text-xs sm:text-sm"
      >
        <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
        <h1>Notre Blog</h1>
        <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
      </div>
    </div>
    <div class="mt-6">
      <h1 class="font-bold lg:text-5xl text-4xl text-center">
        <span class="text-smart-blue">Blog</span> & Nouvelles
      </h1>
    </div>
    <p class="py-10 max-w-3xl text-center mx-auto px-4 leading-7">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores rem
      sed velit cumque ipsa! Quibusdam nesciunt cumque quisquam dolor,
      doloremque officiis, dolorum voluptatem autem a unde cupiditate eveniet
      quae nostrum.
    </p>
    <div class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <Article />
      <Article />
      <Article />
    </div>
  </div>
</template>
