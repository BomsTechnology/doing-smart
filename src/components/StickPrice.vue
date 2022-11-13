<script setup lang="ts">
const props = defineProps<{
  price: String;
  title: String;
  description: String;
  size: String;
}>();
</script>
<template>
  <div
    :class="[
      props.size == 'long'
        ? 'flex bg-white  items-center shadow-lg rounded-l-full pr-2 space-x-3 w-64 md:w-72'
        : 'flex bg-white  items-center shadow-lg rounded-l-full pr-2 space-x-3 w-64',
    ]"
  >
    <div
      class="h-14 w-14 rounded-full bg-smart-blue flex justify-center items-center p-4"
    >
      <h1 class="font-bold text-white text-xl">{{ props.price }}</h1>
    </div>
    <div class="w-[90%] h-full py-1 flex flex-col justify-center text-sm">
      <h1 class="font-bold">
        {{ props.title }}
      </h1>
      <h1 v-if="props.description">{{ props.description }}</h1>
    </div>
  </div>
</template>
