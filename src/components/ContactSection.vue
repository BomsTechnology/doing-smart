<script setup lang="ts">
import bg from "@/assets/img29.jpg";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
  PencilIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="xl:h-screen bg-cover bg-no-repeat w-full overflow-hidden"
    :style="`background-image: url(${bg})`"
  >
    <div class="w-full xl:h-full z-0 bg-gray-200/50 absolute"></div>
    <div
      class="w-full h-full lg:pt-10 py-10 lg:pb-20 xl:px-36 md:px-10 px-4 flex xl:flex-row flex-col xl:justify-start justify-center items-center"
    >
      <div class="xl:w-1/3 w-full z-20">
        <div
          class="rounded-full shadow bg-white px-4 py-2 inline-flex items-center space-x-3 mx-auto text-gray-500 uppercase font-medium text-xs sm:text-sm"
        >
          <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
          <h1>Nous contacter</h1>
          <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
        </div>
        <div class="mt-6">
          <h1 class="font-bold lg:text-5xl text-4xl text-left">
            <span class="text-smart-blue">Contacter</span> & S'unir
          </h1>
        </div>
        <p class="py-6 text-gray-600 max-w-3xl text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          rem sed velit cumque ipsa! Quibusdam nesciunt
        </p>
        <div class="md:space-y-8 space-y-12 md:py-2 py-6">
          <div
            class="flex md:flex-row flex-col md:justify-start justify-center md:space-y-0 space-y-3 items-center md:space-x-3"
          >
            <div class="rounded-3xl bg-gray-900 inline-block p-4">
              <MapPinIcon class="w-10 h-10 text-white" />
            </div>
            <div>
              <h1
                class="font-bold text-gray-900 lg:text-lg md:text-left text-center"
              >
                Adresse de bureau :
              </h1>
              <p class="text-gray-700 md:text-left text-center">
                Ndokoti, Base Ketch
              </p>
            </div>
          </div>
          <div
            class="flex md:flex-row flex-col md:justify-start justify-center md:space-y-0 space-y-3 items-center md:space-x-3"
          >
            <div class="rounded-3xl bg-gray-900 inline-block p-4">
              <PhoneIcon class="w-10 h-10 text-white" />
            </div>
            <div>
              <h1
                class="font-bold text-gray-900 lg:text-lg md:text-left text-center"
              >
                Numéro de téléphone :
              </h1>
              <p class="text-gray-700 md:text-left text-center">
                +237 657 52 58 12
              </p>
            </div>
          </div>
          <div
            class="flex md:flex-row flex-col md:justify-start justify-center md:space-y-0 space-y-3 items-center md:space-x-3"
          >
            <div class="rounded-3xl bg-gray-900 inline-block p-4">
              <EnvelopeIcon class="w-10 h-10 text-white" />
            </div>
            <div>
              <h1
                class="font-bold text-gray-900 lg:text-lg md:text-left text-center"
              >
                Adresse mail :
              </h1>
              <p class="text-gray-700 md:text-left text-center">
                contactdoingsmart@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="xl:w-2/3 w-full z-10 flex lg:justify-end lg:flex-row flex-col justify-center relative"
      >
        <img
          src="@/assets/img28.png"
          class="object-cover justify-center lg:h-full w-60 sm:w-96 mx-auto bg-transparent lg:left-12 left-0 lg:absolute z-10"
          alt=""
        />

        <form
          class="lg:w-1/2 w-full h-auto bg-white p-4 rounded-3xl shadow-xl sm:p-6"
        >
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="text-sm font-semibold">Nom</label>
              <div class="relative mt-2">
                <UserIcon
                  class="h-7 w-7 text-smart-blue absolute top-3.5 left-3"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  id="name"
                  class="py-4 text-sm px-2 rounded-full bg-white w-full pl-12 focus:outline-none border focus:border-white focus:ring focus:ring-custom-yellow/80"
                />
              </div>
            </div>
            <div>
              <label for="email" class="text-sm font-semibold">E-mail</label>
              <div class="relative mt-2">
                <EnvelopeIcon
                  class="h-7 w-7 text-smart-blue absolute top-3.5 left-3"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  class="py-4 text-sm px-2 rounded-full bg-white w-full pl-12 focus:outline-none border focus:border-white focus:ring focus:ring-custom-yellow/80"
                />
              </div>
            </div>
            <div class="col-span-2">
              <label for="phone" class="text-sm font-semibold">Téléphone</label>
              <div class="relative mt-2">
                <PhoneIcon
                  class="h-7 w-7 text-smart-blue absolute top-3.5 left-3"
                />
                <input
                  type="text"
                  id="phone"
                  placeholder="Téléphone"
                  class="py-4 text-sm pr-2 rounded-full bg-white w-full pl-12 focus:outline-none border focus:border-white focus:ring focus:ring-custom-yellow/80"
                />
              </div>
            </div>
          </div>
          <div class="mt-6">
            <label for="message" class="text-sm font-semibold"
              >Comment Pouvons-nous Vous Aider?</label
            >
            <div class="relative mt-2">
              <PencilIcon
                class="h-7 w-7 text-smart-blue absolute top-3.5 left-3"
              />
              <textarea
                name="message"
                id="message"
                class="py-4 text-sm rounded-3xl pr-2 w-full h-52 pl-12 focus:outline-none border focus:border-white focus:ring focus:ring-custom-yellow/80"
              ></textarea>
            </div>
          </div>
          <div class="mt-10">
            <button
              type="button"
              class="bg-smart-blue py-4 px-6 w-full border text-white border-smart-blue hover:bg-transparent transition-colors hover:text-smart-blue rounded-full"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
