<script setup lang="ts">
import bg from "@/assets/bg4.png";
import Banner from "@/components/Banner.vue";
import Link from "../types/Link";
import Service from "@/components/Service.vue";
import { PhoneArrowUpRightIcon } from "@heroicons/vue/24/outline";
import { useServiceStore } from "../stores/servicesStore";
const links: Array<Link> = [
  {
    label: "Services",
    route: "service",
  },
];
const serviceStore = useServiceStore();
</script>

<template>
  <Banner :links="links" :title="'Nos Services'" />
  <div>
    <div class="bg-gray-100 sm:py-32 py-10 xl:px-36 px-6 md:px-10">
      <div class="w-full grid-cols-1 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <Service
          v-for="(service, index) in serviceStore.services"
          :key="index"
          :data="service"
        />
      </div>
    </div>
    <div class="px-4 w-full">
      <div
        class="max-w-6xl rounded-2xl bg-smart-blue lg:h-40 text-white p-8 mx-auto sm:-mt-20 flex lg:flex-row flex-col justify-center items-center"
      >
        <div class="lg:flex items-center justify-center">
          <div
            class="flex items-center lg:justify-start justify-center lg:flex-row flex-col space-x-6 lg:border-r lg:border-b-0 border-b lg:pb-0 pb-6 border-white w-full pr-4"
          >
            <div class="border border-white inline-block p-4 rounded-full">
              <PhoneArrowUpRightIcon class="w-8 h-8" />
            </div>
            <div class="lg:text-left text-center">
              <h1 class="text-xl">Contactez-nous</h1>
              <p class="text-4xl font-bold">987 233 0000</p>
            </div>
          </div>
          <p class="lg:p-4 p-4 lg:text-left text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            inventore eaque maxime. Suscipit dignissimos cum molestiae,
          </p>
        </div>
        <div class="lg:w-1/3 w-full flex justify-center lg:p-0 p-4">
          <button
            type="button"
            class="bg-white px-6 py-2 uppercase font-medium rounded-full text-smart-blue hover:bg-smart-blue-2 hover:text-white transition-colors"
          >
            prennez rendez-vous
          </button>
        </div>
      </div>
    </div>
    <div class="min-h-screen">
      <div
        class="py-10 xl:px-36 px-6 md:px-10 w-full flex flex-col justify-center items-center"
      >
        <div
          class="rounded-full shadow bg-white px-6 py-2 text-gray-500 uppercase font-medium text-xs sm:text-sm inline-block"
        >
          Notre processus
        </div>
        <div class="mt-6">
          <h1 class="font-bold lg:text-5xl text-4xl">
            <span class="text-smart-blue">Processus</span> a Suivre
          </h1>
        </div>
        <p class="mt-6 text-center max-w-lg text-gray-500">
          Nous suivons une méthodologie minutieuse dans le but de satisfaire
          notre clientèle
        </p>
      </div>
      <div
        class="bg-no-repeat bg-center sm:pb-32 pb-10 pt-10 xl:px-36 px-6 md:px-10 w-full overflow-hidden grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 gap-10"
        :style="`background-image: url(${bg})`"
      >
        <div>
          <div
            class="bg-white h-80 w-80 rounded-full shadow-lg p-4 relative mx-auto"
          >
            <div
              class="h-10 w-10 rounded-full bg-smart-blue flex justify-center items-center absolute top-5 right-10 p-8"
            >
              <span class="text-white font-black text-3xl">01 </span>
            </div>
            <div
              class="border-gray-200 rounded-full h-full w-full border-4 transition-all duration-500 hover:border-smart-blue flex justify-center items-center flex-col text-center"
            >
              <h1 class="text-xl font-bold">Projet de recherche</h1>
              <p class="mt-4 text-sm px-8 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem alias labore modi cum architecto consectetur
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="bg-white h-80 w-80 rounded-full shadow-lg p-4 relative mx-auto"
          >
            <div
              class="h-10 w-10 rounded-full bg-smart-blue flex justify-center items-center absolute top-5 right-10 p-8"
            >
              <span class="text-white font-black text-3xl">02</span>
            </div>
            <div
              class="border-gray-200 rounded-full h-full w-full border-4 transition-all duration-500 hover:border-smart-blue flex justify-center items-center flex-col text-center"
            >
              <h1 class="text-xl font-bold">Evaluer les plans</h1>
              <p class="mt-4 text-sm px-8 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem alias labore modi cum architecto consectetur
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="bg-white h-80 w-80 rounded-full shadow-lg p-4 relative mx-auto"
          >
            <div
              class="h-10 w-10 rounded-full bg-smart-blue flex justify-center items-center absolute top-5 right-10 p-8"
            >
              <span class="text-white font-black text-3xl">03</span>
            </div>
            <div
              class="border-gray-200 rounded-full h-full w-full border-4 transition-all duration-500 hover:border-smart-blue flex justify-center items-center flex-col text-center"
            >
              <h1 class="text-xl font-bold">Meilleurs résultats</h1>
              <p class="mt-4 text-sm px-8 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem alias labore modi cum architecto consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
