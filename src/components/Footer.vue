<script setup lang="ts">
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="w-full bg-[#193334] text-white xl:px-36 px-4 mt-52 md:pt-44 pt-80 relative"
  >
    <div
      style="transform: translateX(-50%)"
      class="p-4 md:p-10 xl:w-3/4 w-[92%] left-1/2 md:max-h-96 bg-smart-blue md:mt-0 mt-8 rounded-md absolute -top-44 z-10 flex flex-col-reverse items-center md:flex-row"
    >
      <div class="md:w-3/4 w-full space-y-6 px-4 md:mt-0 mt-4">
        <h1 class="font-bold text-2xl sm:text-4xl">
          Nous aimons les défis petits et grands - quel est le vôtre ?
        </h1>
        <p class="my-4 text-sm md:text-lg">
          Nous n'avons pas peur des défis. Au contraire, nous aimons remettre en
          question ce que nous pensons déjà savoir. Parce que ce n'est qu'alors
          que nous pourrons créer les meilleurs résultats pour nos clients.
        </p>
        <router-link
          :to="{ name: 'contact' }"
          class="bg-[#193334] px-4 py-3 inline-block text-white rounded"
          >Contactez nous</router-link
        >
      </div>
      <div class="md:w-1/4 w-full relative">
        <img
          src="@/assets/footer.svg"
          class="md:h-full md:block hidden h-32 w-full absolute -top-10 -right-10 z-10"
        />
        <img
          src="@/assets/local1.jpg"
          class="z-20 md:h-full w-full object-cover h-60 rounded -mt-20"
          alt=""
        />
      </div>
    </div>
    <footer class="w-full text-white relative mt-10">
      <div class="grid md:grid-cols-2 py-8 grid-cols-1 gap-8 lg:grid-cols-4">
        <div>
          <img
            src="@/assets/logo2.png"
            alt="logo-doing-smart"
            class="object-cover h-8"
          />
          <p class="text-sm py-6">
            Doing Smart Sarl est une entreprise spécialisée dans le marketing
            digital. Nous accompagnons les entreprises dans leurs déploiements
            sur les médias sociaux.
          </p>
          <div class="flex mt-2 space-x-2 items-center">
            <a
              href="https://www.facebook.com/profile.php?id=100069228429506&mibextid=LQQJ4d"
              target="_blank"
              class="flex justify-center items-center bg-smart-blue p-2 rounded-full"
            >
              <svg
                class="h-5 w-5 text-white"
                viewBox="0 0 40 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 20.1117C0 30.055 7.22167 38.3233 16.6667 40V25.555H11.6667V20H16.6667V15.555C16.6667 10.555 19.8883 7.77833 24.445 7.77833C25.8883 7.77833 27.445 8 28.8883 8.22167V13.3333H26.3333C23.8883 13.3333 23.3333 14.555 23.3333 16.1117V20H28.6667L27.7783 25.555H23.3333V40C32.7783 38.3233 40 30.0567 40 20.1117C40 9.05 31 0 20 0C9 0 0 9.05 0 20.1117Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              class="flex justify-center items-center bg-smart-blue p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <title>Logo Youtube</title>
                <path
                  d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"
                />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              class="flex justify-center items-center bg-smart-blue p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <title>Logo Twitter</title>
                <path
                  d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
                />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              class="flex justify-center items-center bg-smart-blue p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <title>Logo Instagram</title>
                <path
                  d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                />
                <path
                  d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h1 class="font-bold text-xl sm:text-2xl">Liens utiles</h1>
          <ul class="mt-4 space-y-2 text-sm">
            <li>
              <router-link :to="{ name: 'about-us' }" class="hover:underline"
                >A Propos de nous</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'service' }" class="hover:underline">
                Services</router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <h1 class="font-bold text-xl sm:text-2xl">Soutien</h1>
          <ul class="mt-4 space-y-2 text-sm">
            <li>
              <router-link :to="{ name: 'contact' }" class="hover:underline"
                >Contact</router-link
              >
            </li>
            <li><a href="#" class="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h1 class="font-bold text-xl sm:text-2xl">Coordonées</h1>
          <p class="text-sm py-4">
            N'hésitez pas à nous contacter et à nous joindre !!
          </p>
          <div class="space-y-2">
            <h2
              class="flex space-x-2 items-center font-medium upppercase text-sm"
            >
              <EnvelopeIcon class="w-5 h-5 text-smart-blue" />
              <span>contactdoingsmart@gmail.com</span>
            </h2>
            <h2
              class="flex space-x-2 items-center font-medium upppercase text-sm"
            >
              <PhoneIcon class="w-5 h-5 text-smart-blue" />
              <span>+237 657 52 58 12</span>
            </h2>
            <h2
              class="flex space-x-2 items-center font-medium upppercase text-sm"
            >
              <MapPinIcon class="w-5 h-5 text-smart-blue" />
              <span>Ndokoti, Base Ketch</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="border-t py-2 text-center text-sm">
        © Copyright 2022 - Doing Smart - Tous droits réservés
      </div>
    </footer>
  </div>
</template>
