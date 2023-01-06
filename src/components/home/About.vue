<script setup lang="ts">
import { CheckCircleIcon, PlayCircleIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div
    class="bg-white py-10 sm:py-32 flex lg:flex-row flex-col-reverse items-center lg:space-x-12 xl:px-48 px-6 md:px-10"
  >
    <div class="relative lg:w-1/2 lg:mt-0 mt-4 w-full h-[500px]">
      <a
        href="https://fb.watch/hU4unJk6OI/?mibextid=cr9u03"
        target="_blank"
        class="h-60 w-60 absolute z-20 p-2 left-5 top-5 bg-white rounded-full overflow-hidden"
      >
        <img
          src="@/assets/local1.jpg"
          class="object-cover w-full h-full rounded-full"
        />
        <div
          class="bg-white absolute top-1/2 left-1/2 h-16 w-16 rounded-full"
          style="transform: translate(-50%, -50%)"
        >
          <div
            class="absolute animate-ping inline-flex h-full w-full rounded-full bg-smart-blue opacity-75"
          ></div>

          <PlayCircleIcon
            class="relative inline-flex h-16 w-16 text-smart-blue"
          />
        </div>
      </a>
      <div
        class="h-[90%] w-2/3 absolute z-0 p-2 right-0 top-0 bg-white rounded-3xl overflow-hidden"
      >
        <img
          src="@/assets/local3.jpg"
          class="object-cover w-full h-full rounded-3xl"
        />
      </div>
      <div
        class="h-72 w-2/3 bottom-0 p-2 bg-white absolute z-10 rounded-3xl overflow-hidden"
      >
        <img
          src="@/assets/local2.jpg"
          class="object-cover w-full h-full rounded-3xl"
        />
      </div>
    </div>
    <div class="lg:w-1/2 w-full">
      <div
        class="rounded-full shadow bg-white px-4 py-2 inline-flex items-center space-x-3 mx-auto text-gray-500 uppercase font-medium text-xs sm:text-sm"
      >
        <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
        <h1>A propos de nous</h1>
        <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
      </div>
      <h1 class="font-bold lg:text-5xl text-4xl mt-6">
        <span class="text-smart-blue">Introduction</span> À la meilleure agence
        numérique !
      </h1>
      <p class="py-6 text-gray-500">
        Doing Smart Sarl est une entreprise spécialisée dans le marketing
        digital. Nous accompagnons les entreprises dans leurs déploiements sur
        les médias sociaux.
      </p>
      <div class="lg:flex items-start justify-between">
        <div>
          <router-link
            :to="{ name: 'about-us' }"
            class="rounded-full shadow hover:shadow-lg bg-smart-blue hover:bg-smart-blue-2 px-4 py-3 mt-6 text-white uppercase font-medium text-xs sm:text-sm inline-block"
          >
            En Savoir plus
          </router-link>
        </div>
        <div
          class="border-2 rounded-3xl lg:mt-0 mt-4 w-48 text-center flex flex-col justify-center items-center h-48 uppercase"
        >
          <h1 class="font-black text-7xl text-smart-blue">5</h1>
          <h2 class="sm:text-lg font-medium">ANS</h2>
          <h4 class="text-sm">d'expérience</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-polygon {
  -webkit-clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
}
</style>
