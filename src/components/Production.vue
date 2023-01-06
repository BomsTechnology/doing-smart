<script setup lang="ts">
import Customer from "../types/Customer";
const props = defineProps<{
  data: Customer;
}>();
</script>

<template>
  <a
    :href="data.link"
    target="_blank"
    class="h-72 rounded-3xl overflow-hidden group relative"
  >
    <img :src="data.image" class="w-full h-full object-cover" alt="" />
    <div
      class="absolute px-10 top-0 w-full h-full group-hover:bg-black/80 sm:bg-transparent bg-black/60 flex transition-all duration-700 flex-col justify-center items-center text-center text-white"
    >
      <h2
        class="font-medium sm:text-lg group-hover:text-smart-blue text-smart-blue sm:text-transparent transition-all"
      >
        {{ data.category }}
      </h2>
      <h1
        class="sm:text-3xl font-bold tracking-widest mt-3 group-hover:text-white text-white sm:text-transparent transition-all"
      >
        {{ data.customerName }}
      </h1>
      <div
        class="mt-4 group-hover:text-white text-white sm:text-transparent transition-all"
      >
        <p>
          <strong>{{ data.followers }} </strong> <span>Followers</span> -
          <strong>{{ data.interactions }}</strong> Interactions
        </p>
        <p>{{ data.publications }}</p>
      </div>
    </div>
  </a>
</template>
