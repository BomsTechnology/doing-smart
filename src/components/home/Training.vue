<script setup lang="ts">
import bg from "@/assets/training2.jpg";
import CommunityManger from "../training/CommunityManger.vue";
import PubFacebook from "../training/PubFacebook.vue";
import Design from "../training/Design.vue";
import Website from "../training/Website.vue";
import { ref } from "vue";

const show = ref(1);
</script>
<template>
  <div
    :style="`background-image: url(${bg})`"
    class="w-full bg-no-repeat bg-cover bg-fixed"
  >
    <div
      class="bg-white/90 w-full lg:py-20 py-10 xl:px-36 md:px-10 px-4 relative text-black"
    >
      <div class="w-full flex justify-center">
        <div
          class="rounded-full shadow bg-smart-blue px-4 py-2 inline-flex items-center space-x-3 mx-auto text-white uppercase font-medium text-xs sm:text-sm"
        >
          <div class="w-2 h-2 bg-white rounded-full"></div>
          <h1>Nos Formations</h1>
          <div class="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div class="mt-6">
        <h1 class="font-bold lg:text-5xl text-4xl text-center">
          <span class="text-smart-blue">Formations</span>
        </h1>
      </div>
      <p class="text-center mt-4">
        Nous proposons des formations sur les métiers du digital et du
        numérique. Les formations sont :
      </p>
      <div
        class="justify-start rounded-full lg:flex hidden space-x-8 mt-8 mx-auto px-1 bg-smart-blue"
      >
        <button
          type="button"
          @click="show = 1"
          :class="[
            show == 1
              ? 'bg-white px-4 py-5 text-lg rounded-l-full text-smart-blue border-y-4 font-bold border-smart-blue'
              : 'bg-smart-blue px-4 py-5 text-lg rounded-l-full text-white border-b-4 font-bold border-smart-blue',
          ]"
        >
          Community Management
        </button>
        <button
          type="button"
          @click="show = 2"
          :class="[
            show == 2
              ? 'bg-white px-4 py-5 text-lg  text-smart-blue border-y-4 font-bold border-smart-blue'
              : 'bg-smart-blue px-4 py-5 text-lg text-white border-b-4 font-bold border-smart-blue',
          ]"
        >
          Publicité Facebook
        </button>
        <button
          type="button"
          @click="show = 3"
          :class="[
            show == 3
              ? 'bg-white px-4 py-5 text-lg  text-smart-blue border-y-4 font-bold border-smart-blue'
              : 'bg-smart-blue px-4 py-5 text-lg text-white border-b-4 font-bold border-smart-blue',
          ]"
        >
          Infographie
        </button>
        <button
          type="button"
          @click="show = 4"
          :class="[
            show == 4
              ? 'bg-white px-4 py-5 text-lg  text-smart-blue border-y-4 font-bold border-smart-blue'
              : 'bg-smart-blue px-4 py-5 text-lg text-white border-b-4 font-bold border-smart-blue',
          ]"
        >
          Création de site web
        </button>
      </div>

      <div
        class="justify-start lg:hidden flex flex-col rounded-full space-y-8 mt-8 mx-auto px-2"
      >
        <button
          type="button"
          @click="show = 1"
          :class="[
            show == 1
              ? 'bg-white p-2 text-sm rounded-full text-smart-blue border-4 font-bold border-smart-blue'
              : 'bg-smart-blue p-2 text-sm rounded-full text-white border-4 font-bold border-smart-blue',
          ]"
        >
          Community Manager
        </button>
        <button
          type="button"
          @click="show = 2"
          :class="[
            show == 2
              ? 'bg-white p-2 text-sm rounded-full text-smart-blue border-4 font-bold border-smart-blue'
              : 'bg-smart-blue p-2 text-sm rounded-full text-white border-4 font-bold border-smart-blue',
          ]"
        >
          Publicité Facebook
        </button>
        <button
          type="button"
          @click="show = 3"
          :class="[
            show == 3
              ? 'bg-white p-2 text-sm rounded-full text-smart-blue border-4 font-bold border-smart-blue'
              : 'bg-smart-blue p-2 text-sm rounded-full text-white border-4 font-bold border-smart-blue',
          ]"
        >
          Graphic Design
        </button>
        <button
          type="button"
          @click="show = 4"
          :class="[
            show == 4
              ? 'bg-white p-2 text-sm rounded-full text-smart-blue border-4 font-bold border-smart-blue'
              : 'bg-smart-blue p-2 text-sm rounded-full text-white border-4 font-bold border-smart-blue',
          ]"
        >
          Création de site web
        </button>
      </div>

      <div class="py-6">
        <CommunityManger v-if="show == 1" />
        <PubFacebook v-if="show == 2" />
        <Design v-if="show == 3" />
        <Website v-if="show == 4" />
      </div>
    </div>
  </div>
</template>
