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
          300 000 XFA
        </h1>
      </div>
      <div
        class="lg:h-28 lg:w-28 h-20 w-20 p-4 flex justify-center items-center rounded-full shadow-2xl hover:shadow-smart-blue hover:rotate-12 transition-all bg-gray-800 absolute lg:-left-16 left-0 -top-10 -rotate-12"
      >
        <h1 class="text-white font-bold text-sm lg:text-xl text-center">
          3 Mois
        </h1>
      </div>

      <div class="py-10">
        <p class="mt-6 text-center leading-7">
          Création de design grâce aux outils/logiciels de la suite Adobe.
          Devenir un graphiste professionnel après 3 mois.
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
            <span>Créer des visuels </span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span>Créer des vidéos pro </span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-3 w-3 text-[#193334]" />
            <span
              >Maitrise des logiciels Photoshop, Illustrator, Premier Pro,
              etc...
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center mt-8">
    <a
      href="https://wa.me/message/LTIV7YM22E5CB1"
      target="_blank"
      class="bg-smart-blue py-2 px-4 hover:bg-smart-blue-2 font-bold text-white z-0 right-0 rounded-full inline-block mx-auto text-lg sm:text-xl"
    >
      Je m'inscris
    </a>
  </div>
</template>
