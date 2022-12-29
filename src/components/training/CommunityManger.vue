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
          50 000 XFA
        </h1>
      </div>
      <div
        class="lg:h-28 lg:w-28 h-20 w-20 p-4 flex justify-center items-center rounded-full shadow-2xl hover:shadow-smart-blue hover:rotate-12 transition-all bg-gray-800 absolute lg:-left-16 left-0 -top-10 -rotate-12"
      >
        <h1 class="text-white font-bold text-sm lg:text-xl text-center">
          1 Mois
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
            <span>01 Mois en présentiel</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Freelance</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Emplois garantis pour les 03 meilleurs</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>02 mois de suivi</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Attestation de formation</span>
          </li>
        </ul>
      </div>
      <div class="flex flex-col justify-start">
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
      </div>
    </div>
  </div>
  <div class="grid lg:grid-cols-4 mt-8 gap-6 md:grid-cols-2 grid-cols-1">
    <div
      class="bg-gray-800 flex flex-col space-y-4 justify-center items-center p-4 rounded-xl"
    >
      <h1 class="text-smart-blue text-sm">Module 1</h1>
      <h3 class="text-white font-bold lg:text-xl">Marketing Digitale</h3>
    </div>
    <div
      class="bg-gray-800 flex flex-col space-y-4 justify-center items-center p-4 rounded-xl"
    >
      <h1 class="text-smart-blue text-sm">Module 2</h1>
      <h3 class="text-white font-bold lg:text-xl">L'art de la vente</h3>
    </div>
    <div
      class="bg-gray-800 flex flex-col space-y-4 justify-center items-center p-4 rounded-xl"
    >
      <h1 class="text-smart-blue text-sm">Module 3</h1>
      <h3 class="text-white font-bold lg:text-xl">Outils du CM</h3>
    </div>
    <div
      class="bg-gray-800 flex flex-col space-y-4 justify-center items-center p-4 rounded-xl"
    >
      <h1 class="text-smart-blue text-sm">Module 4</h1>
      <h3 class="text-white font-bold lg:text-xl">Facebook & Wathsapp</h3>
    </div>
  </div>
</template>
