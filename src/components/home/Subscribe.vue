<script setup lang="ts"></script>

<template>
  <div
    class="min-w-full bg-gray-100 lg:flex items-center justify-center lg:py-20 py-10 xl:px-36 md:px-10 px-4 mb-60"
  >
    <div class="lg:w-1/2 w-full">
      <div
        class="rounded-full shadow bg-white px-4 py-2 inline-flex items-center space-x-3 mx-auto text-gray-500 uppercase font-medium text-xs sm:text-sm"
      >
        <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
        <h1>S'abonner</h1>
        <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
      </div>
      <h1 class="font-bold lg:text-5xl text-2xl md:text-3xl mt-6">
        <span class="text-smart-blue">S'abonner</span> Pour obtenir la dernière
        mise à jour de notre part
      </h1>
    </div>
    <div class="lg:w-1/2 w-full lg:px-8">
      <p class="lg:mt-0 mt-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nihil
        praesentium incidunt ducimus itaque fugiat vel labore modi perferendis
        totam aut ipsam rerum odit, eum id, laboriosam molestias et iure.
      </p>
      <div class="block lg:hidden mt-10">
        <input
          type="text"
          placeholder="Email"
          class="text-sm w-full h-[50px] rounded-full px-4 outline-none"
        />
        <button
          type="button"
          class="bg-smart-blue w-full mt-3 h-[50px] px-4 uppercase text-sm font-bold rounded-full text-white"
        >
          s'inscre
        </button>
      </div>
      <div class="bg-white rounded-full mt-10 h-[50px] hidden lg:flex w-full">
        <input
          type="text"
          placeholder="Email"
          class="text-sm w-2/3 rounded-l-full px-4 outline-none"
        />
        <button
          type="button"
          class="bg-smart-blue w-1/3 px-4 uppercase text-sm font-bold rounded-full text-white"
        >
          S'inscrire !
        </button>
      </div>
    </div>
  </div>
</template>
