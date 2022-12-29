<script setup lang="ts"></script>

<template>
  <div class="w-full z-10 px-6 py-10">
    <div
      class="max-w-6xl rounded-3xl bg-smart-blue z-10 text-white py-8 lg:px-12 px-8 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
    >
      <div
        class="flex-col flex justify-center items-center md:border-r border-r-0 lg:border-b-0 border-b p-4"
      >
        <img
          src="@/assets/test_passed.png"
          class="sm:w-20 sm:h-20 object-cover"
          alt=""
        />
        <h1 class="font-black sm:text-6xl text-4xl my-2">3k+</h1>
        <p class="sm:text-lg text-sm">Projets achevés</p>
      </div>
      <div
        class="flex-col flex justify-center items-center lg:border-r md:border-0 lg:border-b-0 md:border-b border-b p-4"
      >
        <img
          src="@/assets/user_account.png"
          class="sm:w-20 sm:h-20 object-cover"
          alt=""
        />
        <h1 class="font-black sm:text-6xl text-4xl my-2">20k+</h1>
        <p class="sm:text-lg text-sm">Client Satisfait</p>
      </div>
      <div
        class="flex-col flex justify-center items-center md:border-r border-r-0 md:border-b-0 border-b p-4"
      >
        <img
          src="@/assets/trophy.png"
          class="sm:w-20 sm:h-20 object-cover"
          alt=""
        />
        <h1 class="font-black sm:text-6xl text-4xl my-2">13k+</h1>
        <p class="sm:text-lg text-sm">Récompemsé</p>
      </div>
      <div class="flex-col flex justify-center items-center p-4">
        <img
          src="@/assets/five_of_five.png"
          class="sm:w-20 sm:h-20 object-cover"
          alt=""
        />
        <h1 class="font-black sm:text-6xl text-4xl my-2">99%</h1>
        <p class="sm:text-lg text-sm">Taux de satisfaction</p>
      </div>
    </div>
  </div>
</template>
