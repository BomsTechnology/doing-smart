<script setup lang="ts">
import Service from "@/components/Service.vue";
import { PhoneArrowUpRightIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div>
    <div class="bg-gray-100 sm:py-32 py-10 lg:flex xl:px-36 px-6 md:px-10">
      <div class="lg:w-2/5 w-full">
        <div>
          <div
            class="rounded-full shadow bg-white px-4 py-2 text-gray-500 uppercase font-medium text-xs sm:text-sm inline-block"
          >
            Liste des services
          </div>
          <div class="mt-6">
            <h1 class="font-bold lg:text-5xl text-2xl md:text-3xl">
              <span class="text-smart-blue">Services</span> Nous Pouvons vous
              aider
            </h1>
          </div>
          <p class="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nisi esse ad, molestias ipsam temporibus repudiandae necessitatibus
            enim, provident vero aliquam officia expedita aperiam dignissimos
            illum possimus ea error in!
          </p>
          <ul class="mt-6 text-xs space-y-2 sm:text-sm">
            <li class="flex items-center space-x-2">
              <div
                class="border border-smart-blue h-auto block rounded-full p-1"
              >
                <div class="h-2 w-2 rounded-full bg-smart-blue"></div>
              </div>
              <span
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
              >
            </li>
            <li class="flex items-center space-x-2">
              <div
                class="border border-smart-blue h-auto block rounded-full p-1"
              >
                <div class="h-2 w-2 rounded-full bg-smart-blue"></div>
              </div>
              <span
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
              >
            </li>
          </ul>
          <button
            type="button"
            class="rounded-full shadow hover:shadow-lg bg-smart-blue hover:bg-smart-blue-2 px-4 py-3 mt-6 text-white uppercase font-medium text-xs sm:text-sm inline-block"
          >
            Plus de services
          </button>
        </div>
      </div>
      <div
        class="lg:w-3/5 w-full grid-cols-1 grid sm:grid-cols-2 lg:pl-8 lg:mt-0 mt-6 gap-4"
      >
        <Service />
        <Service />
        <Service />
        <Service />
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
  </div>
</template>
