<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import Link from "../types/Link";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PencilIcon,
  ClockIcon,
} from "@heroicons/vue/24/solid";
const links: Array<Link> = [
  {
    label: "Contact",
    route: "contact",
  },
];
</script>

<template>
  <Banner :links="links" :title="'Contactez nous'" />
  <div class="bg-gray-100 w-full">
    <div
      class="py-10 lg:pb-20 xl:px-36 md:px-10 px-4 flex flex-col justify-center items-center"
    >
      <div
        class="rounded-full shadow bg-white px-6 py-2 text-gray-500 uppercase font-medium text-xs sm:text-sm inline-block"
      >
        Informations de contact
      </div>
      <div class="mt-6">
        <h1 class="font-bold lg:text-5xl text-4xl">
          <span class="text-smart-blue">Contacter</span> & S'unir
        </h1>
      </div>
      <p class="mt-6 text-center max-w-lg text-gray-500">
        vous souhaitez en savoir plus sur nos expertises, notre agence digitale
        et les talents qui l animent ? Venez discuter avec eux de votre projet
        et obtenez des solutions pertinentes !
      </p>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
        <div class="bg-white shadow-xl rounded-3xl p-4">
          <div
            class="flex lg:flex-row flex-col lg:items-start lg:justify-start justify-center items-center lg:space-x-3 space-x-0 lg:space-y-0 space-y-3"
          >
            <div>
              <MapPinIcon class="lg:w-10 lg:h-10 h-12 w-12 text-gray-900" />
            </div>
            <div class="lg:text-left text-center">
              <h3 class="font-bold text-gray-900 text-sm">Localisation...</h3>
              <h1 class="font-bold text-smart-blue text-xl">
                Rendez-nous visite
              </h1>
              <p class="text-gray-500 text-sm mt-2 whitespace-normal break-all">
                Ndokoti, Base Ketch
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-xl rounded-3xl p-4">
          <div
            class="flex lg:flex-row flex-col lg:items-start lg:justify-start justify-center items-center lg:space-x-3 space-x-0 lg:space-y-0 space-y-3"
          >
            <div>
              <PhoneIcon class="lg:w-10 lg:h-10 h-12 w-12 text-gray-900" />
            </div>
            <div class="lg:text-left text-center">
              <h3 class="font-bold text-gray-900 text-sm">24*7 Service...</h3>
              <h1 class="font-bold text-smart-blue text-xl">Appelez-nous</h1>
              <p
                class="text-gray-500 md:text-left text-sm text-center whitespace-normal break-all mt-2"
              >
                +237 657 52 58 12
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-xl rounded-3xl p-4">
          <div
            class="flex lg:flex-row flex-col lg:items-start lg:justify-start justify-center items-center lg:space-x-3 space-x-0 lg:space-y-0 space-y-3"
          >
            <div>
              <EnvelopeIcon class="lg:w-10 lg:h-10 h-12 w-12 text-gray-900" />
            </div>
            <div class="lg:text-left text-center">
              <h3 class="font-bold text-gray-900 text-sm">
                Laissez un message...
              </h3>
              <h1 class="font-bold text-smart-blue text-xl">Adresse mail</h1>
              <p
                class="text-gray-500 md:text-left text-sm text-center whitespace-normal break-all mt-2"
              >
                contactdoingsmart@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-xl rounded-3xl p-4">
          <div
            class="flex lg:flex-row flex-col lg:items-start lg:justify-start justify-center items-center lg:space-x-3 space-x-0 lg:space-y-0 space-y-3"
          >
            <div>
              <ClockIcon class="lg:w-10 lg:h-10 h-12 w-12 text-gray-900" />
            </div>
            <div class="lg:text-left text-center">
              <h3 class="font-bold text-gray-900 text-sm">
                Heures de Travail...
              </h3>
              <h1 class="font-bold text-smart-blue text-xl">
                Horaire d'ouverture
              </h1>
              <p
                class="text-gray-500 md:text-left text-sm whitespace-normal break-all text-center mt-2"
              >
                Lun – Sam : 09h – 18h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:min-h-screen bg-white bg-no-repeat w-full overflow-hidden">
      <div
        class="w-full h-full lg:pt-10 py-10 lg:pb-20 xl:px-36 md:px-10 px-4 flex xl:flex-row flex-col xl:justify-start xl:items-start justify-center items-center"
      >
        <div class="xl:w-1/4 w-full h-full">
          <div
            class="w-full rounded-3xl flex flex-col justify-center items-center px-6 py-10 text-white bg-smart-blue"
          >
            <div class="h-20 w-20 rounded-full p-2 bg-white">
              <img
                src="@/assets/online_support_blue.png"
                class="h-full w-full object-cover"
                alt=""
              />
            </div>
            <h1 class="font-bold mt-4 text-xl">Chat With Live !</h1>
            <p class="text-sm text-center mt-2">
              Echangez directement avec un membre de notre équipe
            </p>

            <a
              target="_blank"
              href="'whatsapp://send?text=Bonjour, j'aurais besoin de vos services'"
              class="rounded-full shadow hover:shadow-lg bg-white hover:bg-smart-blue-2 px-4 py-3 mt-6 text-smart-blue hover:text-white uppercase font-medium text-xs sm:text-sm inline-block"
            >
              let's chat
            </a>
          </div>
        </div>
        <div
          class="xl:w-3/4 w-full z-10 flex lg:justify-end lg:flex-row flex-col justify-center relative"
        >
          <img
            src="@/assets/img28.png"
            class="object-cover justify-center lg:h-full mx-auto sm:w-auto w-60 bg-transparent -left-10 lg:absolute z-10"
            alt=""
          />

          <div
            class="lg:w-1/2 w-full h-auto bg-white p-4 rounded-3xl shadow-xl sm:p-6"
          >
            <div
              class="rounded-full shadow bg-white px-4 py-2 inline-flex items-center space-x-3 mx-auto text-gray-500 uppercase font-medium text-xs sm:text-sm"
            >
              <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
              <h1>Nous contacter</h1>
              <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
            </div>
            <div class="my-6">
              <h1 class="font-bold lg:text-5xl text-4xl text-left">
                <span class="text-smart-blue">Contacter</span> & S'unir
              </h1>
            </div>
            <form>
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
                  <label for="email" class="text-sm font-semibold"
                    >E-mail</label
                  >
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
                  <label for="phone" class="text-sm font-semibold"
                    >Téléphone</label
                  >
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
    </div>
    <div
      class="h-60 w-full sm:h-96 bg-gray-100 rounded-xl flex items-center justify-center"
    >
      <iframe
        class="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1614.0037904658373!2d9.74186621096476!3d4.043597282872684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1668340031208!5m2!1sen!2scm"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
