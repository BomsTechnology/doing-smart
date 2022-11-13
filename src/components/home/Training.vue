<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="w-full py-10 xl:px-48 px-10 relative">
    <div>
      <h1 class="font-bold text-center text-2xl md:text-4xl">
        Notre formation Community Manager
      </h1>
    </div>
    <div
      class="relative mt-10 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center md:space-x-8"
    >
      <div class="p-4 flex flex-col items-center lg:items-start">
        <h1
          class="font-bold bg-smart-blue text-white inline-block px-8 py-2 text-xl"
        >
          Avantages
        </h1>
        <ul class="lg:text-lg text-sm space-y-4 px-8 mt-4">
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-4 w-4 text-[#193334]" />
            <span>01 Mois en présentiel</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-4 w-4 text-[#193334]" />
            <span>Freelance</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-4 w-4 text-[#193334]" />
            <span>Emplois garantis pour les 03 meilleurs</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-4 w-4 text-[#193334]" />
            <span>02 mois de suivi</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-4 w-4 text-[#193334]" />
            <span>Attestation de formation</span>
          </li>
        </ul>

        <h1
          class="font-bold bg-smart-blue text-white inline-block mt-10 px-8 py-2 text-xl"
        >
          Débouchés
        </h1>
        <ul class="lg:text-lg text-sm space-y-4 px-8 mt-4">
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-4 w-4 text-[#193334]" />
            <span>Community Manager</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-4 w-4 text-[#193334]" />
            <span>Accompagnement des e-commerçants</span>
          </li>
          <li class="flex space-x-2 items-center">
            <CheckCircleIcon class="lg:h-5 lg:w-5 h-4 w-4 text-[#193334]" />
            <span>Responsable des contenus</span>
          </li>
        </ul>
      </div>
      <div class="sm:block hidden relative lg:mt-0 mt-4">
        <div
          class="h-28 w-28 p-4 flex justify-center items-center rounded-full bg-red-500 absolute right-0 -top-10 rotate-12"
        >
          <h1 class="text-white font-bold text-xl text-center">50 000 XFA</h1>
        </div>
        <img
          src="@/assets/boy1.jpg"
          class="lg:w-96 lg:h-[500px] h-60 w-full object-cover rounded-xl shadow-2xl shadow-smart-blue-2"
        />
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
    <div class="flex justify-center items-center mt-8">
      <a
        href="#"
        class="bg-smart-blue py-2 px-4 hover:bg-smart-blue-2 font-bold text-white z-0 right-0 rounded-md inline-block mx-auto text-lg sm:text-xl"
      >
        Je m'inscris
      </a>
    </div>

    <div class="mt-10 p-4 flex justify-center">
      <iframe
        class="md:w-[500px] w-full h-[300px]"
        src="https://www.youtube.com/embed/glQvSaTpH0Y"
        title="Doing Smart - Pourquoi devenir community manager ?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
