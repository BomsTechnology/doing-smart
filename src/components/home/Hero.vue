<script setup lang="ts">
import bg from "@/assets/bg1.jpg";
</script>

<template>
  <div class="h-screen bg-cover" :style="{ 'background-image': `url(${bg})` }">
    <div
      class="h-full w-full bg-black/50 relative flex justify-center flex-col items-center"
    >
      <div
        class="rounded-full bg-white px-4 py-2 mt-12 text-gray-500 uppercase font-medium text-xs sm:text-sm mb-10"
      >
        Digital Agency
      </div>
      <h1
        class="font-bold text-4xl lg:text-7xl max-w-4xl mx-auto text-white text-center tracking-widest"
      >
        <span class="text-smart-blue"> Doing Smart</span> Agence numérique
      </h1>
      <h6 class="font-medium text-white text-xl lg:text-3xl mt-14">
        Prennez en main votre processus de digitalisation
      </h6>
      <router-link
        :to="{ name: 'contact' }"
        class="bg-smart-blue px-8 py-2 text-white mt-16 rounded-full"
        >Contactez nous</router-link
      >
    </div>
  </div>
</template>
