<script setup lang="ts">
import { StarIcon, UserIcon } from "@heroicons/vue/24/solid";
import Testimonial from "../types/Testimonial";
const props = defineProps<{
  data: Testimonial;
}>();
</script>

<template>
  <div class="shadow-lg bg-gray-900 min-h-60 rounded-3xl px-8">
    <div
      class="sm:w-20 sm:h-20 w-32 h-32 object-cover rounded-full p-1.5 mx-auto sm:mx-0 -mt-8 bg-gray-800"
    >
      <img
        v-if="data.image"
        :src="data.image"
        class="w-full h-full object-cover rounded-full"
        alt=""
      />
      <UserIcon v-else class="w-full h-full text-white rounded-3xl" />
    </div>
    <p class="py-6 text-sm leading-relaxed border-b border-gray-50">
      {{ data.message }}
    </p>
    <div class="flex items-center justify-between py-4">
      <div>
        <h1 class="text-lg font-bold">{{ data.name }}</h1>
        <p class="-mt-1 text-sm">{{ data.post }}</p>
      </div>
      <div class="flex items-center justify-end space-x-1">
        <StarIcon
          v-for="i in data.star"
          :key="i"
          class="w-4 h-4 text-smart-blue"
        />
        <StarIcon
          v-for="i in 5 - data.star"
          :key="i"
          class="w-4 h-4 text-white"
        />
      </div>
    </div>
  </div>
</template>
