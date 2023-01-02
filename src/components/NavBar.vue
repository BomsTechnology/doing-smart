<script setup lang="ts">
import { XMarkIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const open = ref(false);
const isScroll = ref(false);

document.addEventListener("scroll", function () {
  let bodyTopPosition = document.body.getBoundingClientRect().top;
  if (bodyTopPosition < -150) {
    isScroll.value = true;
  } else {
    isScroll.value = false;
  }
});

async function goTo(route: string): Promise<void> {
  open.value = false;
  router.push({ name: route });
}
</script>
<template>
  <nav
    :class="[
      isScroll
        ? 'w-full  xl:px-28 px-6  border-b py-4  z-40 fixed bg-white text-smart-black'
        : 'w-full lg:py-6 py-4  xl:px-28 px-6  z-40 fixed lg:bg-transparent text-white',
    ]"
  >
    <div class="py-2 flex lg:flex-row flex-col items-center justify-between">
      <div
        class="lg:w-82 flex justify-between items-center lg:w-auto w-full lg:px-0 px-3"
      >
        <router-link
          :to="{ name: 'home' }"
          class="text-title font-satisfy lg:text-3xl md:2xl text-xl font-bold md:block hidden"
        >
          <img
            src="@/assets/logo.png"
            alt="logo-doing-smart"
            class="object-cover h-8"
            v-if="isScroll"
          />
          <img
            v-else
            src="@/assets/logo2.png"
            alt="logo-doing-smart"
            class="object-cover h-8"
          />
        </router-link>
        <button
          type="button"
          @click="goTo('home')"
          class="text-title font-satisfy lg:text-3xl md:2xl text-xl font-bold md:hidden block"
        >
          <img
            src="@/assets/logo.png"
            alt="logo-doing-smart"
            class="object-cover h-6"
            v-if="isScroll"
          />
          <img
            v-else
            src="@/assets/logo2.png"
            alt="logo-doing-smart"
            class="object-cover h-6"
          />
        </button>
        <div class="relative block lg:hidden" @click="open = !open">
          <button
            v-if="!open"
            type="button"
            class="hover:text-title text-smart-blue focus:text-title focus:outline-none"
            aria-label="toggle menu"
          >
            <Bars3Icon class="h-6 w-6 fill-current" />
          </button>
        </div>
      </div>
      <div
        class="space-x-3 lg:flex text-sm hidden items-center text-right uppercase"
      >
        <router-link
          :to="{ name: 'home' }"
          class="inline-block px-4 py-2 rounded hover:bg-smart-blue hover:text-white transition-colors"
          >Accueil</router-link
        >
        <router-link
          :to="{ name: 'about-us' }"
          class="inline-block px-4 py-2 rounded hover:bg-smart-blue hover:text-white transition-colors"
          >A propos de nous</router-link
        >
        <router-link
          :to="{ name: 'service' }"
          class="inline-block px-4 py-2 rounded hover:bg-smart-blue hover:text-white transition-colors"
          >Services</router-link
        >
        <router-link
          :to="{ name: 'contact' }"
          class="inline-block lg:px-4 px-3 py-2 rounded hover:bg-smart-blue hover:text-white transition-colors"
          >Contact</router-link
        >
        <div class="inline-flex -mt-1 space-x-2 items-center">
          <a
            href="#"
            class="flex justify-center items-center space-x-2 hover:underline font-semibold"
          >
            <svg
              :class="[
                isScroll
                  ? 'h-5 w-5 text-smart-blue'
                  : 'h-5 w-5 text-white hover:text-smart-blue',
              ]"
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
            class="flex justify-center items-center space-x-2 hover:underline font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="[
                isScroll
                  ? 'h-5 w-5 text-smart-blue'
                  : 'h-5 w-5 text-white hover:text-smart-blue',
              ]"
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
            class="flex justify-center items-center space-x-2 hover:underline font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="[
                isScroll
                  ? 'h-5 w-5 text-smart-blue'
                  : 'h-5 w-5 text-white hover:text-smart-blue',
              ]"
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
            class="flex justify-center items-center space-x-2 hover:underline font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="[
                isScroll
                  ? 'h-5 w-5 text-smart-blue'
                  : 'h-5 w-5 text-white hover:text-smart-blue',
              ]"
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
    </div>
  </nav>
  <Transition
    enter-active-class="transition duration-500"
    enter-from-class="opacity-0 translate-x-full absolute"
    enter-to-class="opacity-1 translate-x-0"
    leave-active-class="transition duration-500"
    leave-from-class="opacity-1/2 translate-x-0"
    leave-to-class="translate-x-1/2 opacity-0 "
  >
    <nav
      v-if="open"
      class="fixed h-screen w-2/3 bg-white shadow top-0 right-0 z-50"
    >
      <div class="flex justify-end items-center p-4">
        <button
          @click="open = !open"
          v-if="open"
          type="button"
          class="hover:text-title text-smart-blue focus:text-title focus:outline-none"
          aria-label="toggle menu"
        >
          <XMarkIcon class="h-8 w-8 fill-current" />
        </button>
      </div>
      <div class="flex flex-col h-3/4 justify-between">
        <div class="">
          <button
            type="button"
            @click="goTo('home')"
            class="block w-full text-left px-3 py-2 hover:bg-smart-blue border-y hover:text-white transition-colors"
          >
            Accueil
          </button>
          <button
            type="button"
            @click="goTo('about-us')"
            class="block w-full text-left px-3 py-2 hover:bg-smart-blue border-b hover:text-white transition-colors"
          >
            A propos de nous
          </button>
          <button
            type="button"
            @click="goTo('service')"
            class="block w-full text-left px-3 py-2 hover:bg-smart-blue border-b hover:text-white transition-colors"
          >
            Services
          </button>

          <button
            type="button"
            @click="goTo('contact')"
            class="block w-full text-left px-3 py-2 hover:bg-smart-blue border-b hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>
        <div class="flex justify-center items-center space-x-3">
          <a
            href="#"
            class="p-2 rounded-full border-2 border-smart-blue text-smart-blue flex justify-center items-center"
          >
            <svg
              class="w-5 h-5"
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
            class="p-2 rounded-full border-2 border-smart-blue text-smart-blue flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
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
          <a
            href="#"
            class="p-2 rounded-full border-2 border-smart-blue text-smart-blue flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
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
            class="p-2 rounded-full border-2 border-smart-blue text-smart-blue flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <title>Logo Youtube</title>
              <path
                d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  </Transition>
</template>
