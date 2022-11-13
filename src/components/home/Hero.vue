<script setup lang="ts">
import bg from "@/assets/logo_3d.jpg";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="h-screen bg-cover" :style="{ 'background-image': `url(${bg})` }">
    <div
      class="h-full w-full bg-black/90 relative flex justify-center flex-col items-center"
    >
      <h1 class="font-bold text-4xl lg:text-[80px] text-white tracking-widest">
        Doing Smart
      </h1>
      <h6 class="font-medium text-white text-xl lg:text-3xl mt-14">
        Agence de Marketing digitale
      </h6>
      <router-link
        :to="{ name: 'contact' }"
        class="bg-smart-blue px-4 py-2 text-white mt-20 rounded"
        >Contactez nous</router-link
      >
      <ChevronDownIcon class="mt-10 h-6 w-6 animate-bounce text-white" />
    </div>
  </div>
</template>
