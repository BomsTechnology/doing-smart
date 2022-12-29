<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="shadow-lg bg-gray-900 min-h-60 rounded-3xl px-8">
    <div
      class="sm:w-20 sm:h-20 w-32 h-32 object-cover rounded-full p-1.5 mx-auto sm:mx-0 -mt-8 bg-gray-800"
    >
      <img
        src="@/assets/img9.jpg"
        class="w-full h-full object-cover rounded-full"
        alt=""
      />
    </div>
    <p class="py-6 text-sm leading-relaxed border-b border-gray-50">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nulla
      maxime nisi illo quo repellat i
    </p>
    <div class="flex items-center justify-between py-4">
      <div>
        <h1 class="text-lg font-bold">John Doe</h1>
        <p class="-mt-1 text-sm">Clients</p>
      </div>
      <div class="flex items-center justify-end space-x-1">
        <StarIcon class="w-4 h-4 text-smart-blue" />
        <StarIcon class="w-4 h-4 text-smart-blue" />
        <StarIcon class="w-4 h-4 text-smart-blue" />
        <StarIcon class="w-4 h-4 text-smart-blue" />
        <StarIcon class="w-4 h-4 text-white" />
      </div>
    </div>
  </div>
</template>
