<script setup lang="ts">
import { PresentationChartBarIcon } from "@heroicons/vue/24/solid";
import Service from "../types/Service";
const props = defineProps<{
  data: Service;
}>();
</script>
<template>
  <div
    class="hover:bg-gray-900 bg-gray-900 h-60 sm:bg-white group shadow duration-500 transition-all rounded-xl overflow-hidden relative"
  >
    <div
      class="absolute group-hover:top-0 top-0 sm:-top-full w-full h-full transition-all duration-500"
    >
      <img src="@/assets/bg3.png" class="w-full h-full object-cover" alt="" />
    </div>
    <div class="flex flex-col justify-center items-center h-full w-full">
      <span>
        <img :src="data.image" class="w-18 h-18 object-cover" />
      </span>
      <h1
        class="group-hover:text-white sm:text-gray-900 text-white w-3/4 transition-all duration-500 mt-8 text-xl font-bold text-center"
      >
        {{ data.shortName }}
      </h1>
    </div>
  </div>
</template>
