<script setup lang="ts">
import Teams from "@/components/home/Teams.vue";
import Banner from "@/components/Banner.vue";
import { CheckCircleIcon, PlayCircleIcon } from "@heroicons/vue/24/solid";
import Link from "../types/Link";
const links: Array<Link> = [
  {
    label: "A propos de nous",
    route: "about-us",
  },
];
</script>

<template>
  <Banner :links="links" :title="'A propos de nous'" />
  <div
    class="bg-white py-10 sm:py-32 flex flex-col-reverse items-center lg:space-x-12 xl:px-36 px-6 md:px-10"
  >
    <div class="relative lg:mt-0 mt-4 w-full h-[500px]">
      <a
        href="#"
        class="h-2/3 sm:w-1/2 w-4/6 absolute z-20 p-2 right-5 top-20 bg-white rounded-3xl overflow-hidden"
      >
        <img
          src="@/assets/local1.jpg"
          class="object-cover w-full h-full rounded-3xl"
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
        class="h-full sm:w-2/3 w-5/6 bottom-0 p-2 bg-white absolute z-10 rounded-3xl overflow-hidden"
      >
        <img
          src="@/assets/local2.jpg"
          class="object-cover w-full h-full rounded-3xl"
        />
      </div>
    </div>
    <div class="w-full">
      <div class="w-full flex lg:justify-start justify-center">
        <div
          class="rounded-full shadow bg-white px-4 py-2 inline-flex items-center space-x-3 mx-auto text-gray-500 uppercase font-medium text-xs sm:text-sm"
        >
          <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
          <h1>A propos de nous</h1>
          <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
        </div>
      </div>

      <div
        class="flex items-center lg:flex-row flex-col justify-center lg:justify-between"
      >
        <h1
          class="font-bold lg:text-5xl text-4xl mt-6 max-w-xl lg:text-left text-center"
        >
          <span class="text-smart-blue">Introduction</span> À la meilleure
          agence numérique !
        </h1>
        <p
          class="py-6 text-gray-500 lg:max-w-xs md:max-w-xl lg:text-left text-center"
        ></p>
        <div
          class="border-2 rounded-3xl w-48 text-center flex flex-col justify-center items-center h-48 uppercase"
        >
          <h1 class="font-black text-7xl text-smart-blue">5</h1>
          <h2 class="sm:text-lg font-medium">ANS</h2>
          <h4 class="text-sm">d'expérience</h4>
        </div>
      </div>
      <div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
          <div class="bg-white shadow-xl rounded-3xl p-4">
            <div
              class="flex lg:flex-row justify-center items-center flex-col lg:items-start lg:space-x-3 lg:space-y-0 space-y-3"
            >
              <div class="lg:w-1/4 w-full flex justify-center items-center">
                <div class="bg-smart-blue rounded-full p-3">
                  <img
                    src="@/assets/holding_dollar.png"
                    class="h-14 w-14 object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div class="lg:w-3/4 w-full lg:text-left text-center">
                <h3 class="font-bold text-gray-900 text-xl">
                  Meilleur prix garanti
                </h3>
                <p class="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  quos
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white shadow-xl rounded-3xl p-4">
            <div
              class="flex lg:flex-row justify-center items-center flex-col lg:items-start lg:space-x-3 lg:space-y-0 space-y-3"
            >
              <div class="lg:w-1/4 w-full flex justify-center items-center">
                <div class="bg-gray-900 rounded-full p-3">
                  <img
                    src="@/assets/tools.png"
                    class="h-14 w-14 object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div class="lg:w-3/4 w-full lg:text-left text-center">
                <h3 class="font-bold text-gray-900 text-xl">
                  Analyse financière
                </h3>
                <p class="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  quos
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white shadow-xl rounded-3xl p-4">
            <div
              class="flex lg:flex-row justify-center items-center flex-col lg:items-start lg:space-x-3 lg:space-y-0 space-y-3"
            >
              <div class="lg:w-1/4 w-full flex justify-center items-center">
                <div class="bg-smart-blue rounded-full p-3">
                  <img
                    src="@/assets/user_settings.png"
                    class="h-14 w-14 object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div class="lg:w-3/4 w-full lg:text-left text-center">
                <h3 class="font-bold text-gray-900 text-xl">
                  Equipe professionelle
                </h3>
                <p class="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  quos
                </p>
              </div>
            </div>
          </div>
        </div>
        <p class="py-6 text-gray-500 max-w-xl mx-auto mt-4 text-center">
          Doing Smart Sarl est une entreprise spécialisée dans le marketing
          digital. Nous accompagnons les entreprises dans leurs déploiements sur
          les médias sociaux. Ceci se fait par la création d’une identité
          visuelle propre à l’entreprise, lui permettant de se démarquer des
          autres ainsi augmentant sa valeur, sa notoriété et par conséquents sa
          clientèle et son chiffre d’affaire.
        </p>
      </div>
    </div>
  </div>
  <Teams />
</template>
