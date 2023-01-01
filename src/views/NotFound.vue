<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import Link from "../types/Link";
const links: Array<Link> = [
  {
    label: "Page Introuvable",
    route: "not-found",
  },
];
</script>

<template>
  <Banner :links="links" :title="'Page Introuvable'" />
  <div
    class="sm:py-32 py-10 xl:px-36 px-6 md:px-10 sm:h-screen h-[28rem] flex justify-center items-center relative flex-col"
  >
    <h1 class="font-black lg:text-[18rem] text-[10rem] text-gray-300">404</h1>
    <router-link
      :to="{
        name: 'home',
      }"
      class="rounded-full w-1/2 text-center shadow hover:shadow-lg bg-white hover:bg-smart-blue border border-smart-blue text-smart-blue px-4 py-3 mt-6 hover:text-white uppercase font-medium text-sm sm:text-lg inline-block"
    >
      Retour a l'accueil
    </router-link>
    <h2
      class="absolute left-1/2 top-1/2 -translate-x-1/2 text-center -translate-y-1/2 sm:whitespace-nowrap font-black xl:text-[4rem] md:text-[2.5rem] text-[1.5rem]"
    >
      Oops! Cette page est introuvable
    </h2>
  </div>
</template>
