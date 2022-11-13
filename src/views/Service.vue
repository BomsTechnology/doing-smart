<script setup lang="ts">
import {
  UserGroupIcon,
  AcademicCapIcon,
  GlobeEuropeAfricaIcon,
  CheckCircleIcon,
} from "@heroicons/vue/24/solid";
import Banner from "@/components/Banner.vue";
import type { Link } from "../components/Banner.vue";
const links: Array<Link> = [
  {
    label: "Services",
    route: "service",
  },
];
</script>

<template>
  <Banner :links="links" :title="'Nos Services'" />
  <div class="w-full py-10 xl:px-48 px-10 relative">
    <img
      src="@/assets/star2.png"
      class="absolute top-10 right-10 lg:h-60 h-28 opacity-70"
      alt=""
    />
    <img
      src="@/assets/star.png"
      class="absolute bottom-0 left-0 lg:h-60 h-28 opacity-70"
      alt=""
    />

    <div class="grid gap-6 lg:grid-cols-3 grid-cols-1 mt-10">
      <div
        class="h-96 bg-[#193334] rounded-md shadow-xl z-10 text-white py-4 px-2"
      >
        <div
          class="flex flex-col space-y-4 justify-center items-center py-4 px-2 h-1/2"
        >
          <GlobeEuropeAfricaIcon class="md:h-16 md:w-16 w-12 h-12" />
          <h1 class="text-xl font-bold md:text-2xl">Placement de personnel</h1>
        </div>
        <div class="h-1/2">
          <ul class="text-sm space-y-4 px-8">
            <li class="flex space-x-2 items-center">
              <CheckCircleIcon class="h-5 w-5 text-gray-500" />
              <span
                >Placement des Community Manager au sein des entreprises</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        class="h-96 bg-smart-blue rounded-md shadow-xl z-10 text-white py-4 px-2"
      >
        <div
          class="flex flex-col space-y-4 justify-center items-center py-4 px-2 h-1/2"
        >
          <AcademicCapIcon class="md:h-16 md:w-16 w-12 h-12" />
          <h1 class="text-xl font-bold md:text-2xl">Formations</h1>
        </div>
        <div class="h-1/2">
          <ul class="text-sm space-y-4 px-8">
            <li class="flex space-x-2 items-center">
              <CheckCircleIcon class="h-5 w-5 text-[#193334]" />
              <span>Formation en Community Management</span>
            </li>
            <li class="flex space-x-2 items-center">
              <CheckCircleIcon class="h-5 w-5 text-[#193334]" />
              <span>Formation Conception Graphique</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="h-96 bg-gray-500 rounded-md shadow-xl z-10 text-white py-4 px-2"
      >
        <div
          class="flex flex-col space-y-4 justify-center items-center py-4 px-2 h-1/2"
        >
          <UserGroupIcon class="md:h-16 md:w-16 w-12 h-12" />
          <h1 class="text-xl font-bold md:text-2xl text-center">
            Accompagnement d'entreprise
          </h1>
        </div>
        <div class="h-1/2">
          <ul class="text-sm space-y-4 px-8">
            <li class="flex space-x-2 items-center">
              <CheckCircleIcon class="h-5 w-5 text-smart-blue" />
              <span>Création Stratégie Marketing digitale</span>
            </li>
            <li class="flex space-x-2 items-center">
              <CheckCircleIcon class="h-5 w-5 text-smart-blue" />
              <span>Gestion des réseaux sociaux</span>
            </li>
            <li class="flex space-x-2 items-center">
              <CheckCircleIcon class="h-5 w-5 text-smart-blue" />
              <span>Consultation et audit Marketing</span>
            </li>
            <li class="flex space-x-2 items-center">
              <CheckCircleIcon class="h-5 w-5 text-smart-blue" />
              <span>Création identité visuel</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
