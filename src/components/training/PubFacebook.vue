<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div
    class="relative mt-10 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center md:space-x-8"
  >
    <div
      class="p-4 flex items-start sm:flex-row flex-col sm:space-y-0 space-y-4 relative"
    >
      <div
        class="lg:h-28 lg:w-28 h-20 w-20 p-4 flex justify-center items-center rounded-full shadow-2xl hover:shadow-smart-blue hover:-rotate-12 transition-all bg-gray-800 absolute right-0 -top-10 rotate-12"
      >
        <h1 class="text-white font-bold text-sm lg:text-xl text-center">
          10 000 XFA
        </h1>
      </div>
      <div
        class="lg:h-28 lg:w-28 h-20 w-20 p-4 flex justify-center items-center rounded-full shadow-2xl hover:shadow-smart-blue hover:rotate-12 transition-all bg-gray-800 absolute lg:-left-16 left-0 -top-10 -rotate-12"
      >
        <h1 class="text-white font-bold text-sm lg:text-xl text-center">
          03 Jours
        </h1>
      </div>
      <div class="flex flex-col justify-start">
        <h1
          class="font-bold bg-smart-blue text-white border-r inline-block px-8 py-2 text-xl"
        >
          Avantages
        </h1>
        <ul class="lg:text-lg text-sm space-y-4 px-8 mt-4">
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Création Business Manager</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Choix du Budget publicitaire</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Ciblage, Création audience</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Test A/B</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Création d'ensemble de publicités</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Simulation</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Analyse des indicateurs de performance (KPI)</span>
          </li>
        </ul>
      </div>
      <!-- <div class="flex flex-col justify-start">
        <h1
          class="font-bold bg-smart-blue text-white inline-block px-8 py-2 text-xl"
        >
          Débouchés
        </h1>
        <ul class="lg:text-lg text-sm space-y-4 px-8 mt-4">
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Community Manager</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Accompagnement des e-commerçants</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Responsable des contenus</span>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>
