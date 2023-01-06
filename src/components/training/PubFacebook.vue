<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div
    class="relative mt-10 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center md:space-x-8"
  >
    <div
      class="p-4 flex items-center justify-center flex-col sm:space-y-0 space-y-4 relative max-w-2xl"
    >
      <div
        class="lg:h-28 lg:w-28 h-20 w-20 p-4 flex justify-center items-center rounded-full shadow-2xl hover:shadow-smart-blue hover:-rotate-12 transition-all bg-gray-800 absolute right-0 -top-10 rotate-12"
      >
        <h1 class="text-white font-bold text-sm lg:text-xl text-center">
          25 000 XFA
        </h1>
      </div>
      <div
        class="lg:h-28 lg:w-28 h-20 w-20 p-4 flex justify-center items-center rounded-full shadow-2xl hover:shadow-smart-blue hover:rotate-12 transition-all bg-gray-800 absolute lg:-left-16 left-0 -top-10 -rotate-12"
      >
        <h1 class="text-white font-bold text-sm lg:text-xl text-center">
          1 Semaine
        </h1>
      </div>

      <div class="py-10">
        <p class="mt-6 text-center">
          Ceci consiste faire la promotion d’une publication sur facebook afin
          de touchées des milliers voir des millions de personnes. Ceci aide à
          vendre les services et produits de son client.
        </p>
      </div>

      <div class="flex flex-col justify-start">
        <h1
          class="font-bold bg-smart-blue text-white border-r inline-block px-8 py-2 text-xl"
        >
          Vous Apprendrez
        </h1>
        <ul class="lg:text-lg text-sm space-y-4 px-8 mt-4">
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>La création d’un business manager </span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Le choix d’un objectif de publicité </span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span
              >La configuration des campagnes, ensembles des publicités et des
              publications.
            </span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>La définition du budget publicitaire</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>La définition du ciblage</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center mt-8">
    <a
      href="#"
      class="bg-smart-blue py-2 px-4 hover:bg-smart-blue-2 font-bold text-white z-0 right-0 rounded-full inline-block mx-auto text-lg sm:text-xl"
    >
      Je m'inscris
    </a>
  </div>
</template>
