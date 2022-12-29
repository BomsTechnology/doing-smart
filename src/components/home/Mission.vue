<script setup lang="ts">
import bg from "@/assets/bg2.png";
</script>

<template>
  <div
    :style="`background-image: url(${bg})`"
    class="w-full lg:max-h-[28rem] overflow-hidden relative bg-cover bg-gray-800 text-white"
  >
    <div
      class="xl:px-48 px-6 md:px-10 lg:py-0 py-10 h-full w-full flex lg:flex-row flex-col justify-center items-center bg-gray-800/70"
    >
      <div class="relative inline-block">
        <img
          src="@/assets/img21.png"
          class="lg:w-[30rem] w-[25rem] opacity-50"
          alt=""
        />
        <div
          style="transform: translate(-50%, -50%)"
          class="absolute top-1/2 left-1/2 flex flex-col w-full h-full justify-center items-center"
        >
          <div
            class="rounded-full shadow bg-white px-4 py-2 inline-flex items-center space-x-3 text-gray-500 uppercase font-medium text-xs sm:text-sm"
          >
            <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
            <h1>Avis client</h1>
            <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
          </div>
          <div class="w-full px-4 mt-6">
            <h1 class="font-bold lg:text-4xl text-center text-2xl md:text-3xl">
              <span class="text-smart-blue">Mission</span> ce que nous visons
              pour vous
            </h1>
          </div>
          <p class="w-full lg:px-20 px-10 text-center mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            esse quasi labore mollitia,
          </p>
        </div>
      </div>
      <div class="lg:ml-10 lg:mt-0 mt-8">
        <div
          class="flex md:flex-row flex-col md:space-y-0 space-y-8 items-center"
        >
          <div class="flex flex-col justify-center items-center max-w-[14rem]">
            <div class="circle-wrap">
              <div class="circle">
                <div class="mask full-1">
                  <div class="fill-1 bg-smart-blue"></div>
                </div>
                <div class="mask half">
                  <div class="fill-1 bg-smart-blue"></div>
                </div>
                <div class="inside-circle bg-gray-800">96%</div>
              </div>
            </div>
            <div class="text-center w-full mt-3">
              <h1 class="font-bold text-lg">Marketing</h1>
              <p class="text-sm mt-1 text-gray-200">
                amet consectetur adipisicing elit. Porro iste,
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center max-w-[14rem]">
            <div class="circle-wrap">
              <div class="circle">
                <div class="mask full-2">
                  <div class="fill-2 bg-smart-blue"></div>
                </div>
                <div class="mask half">
                  <div class="fill-2 bg-smart-blue"></div>
                </div>
                <div class="inside-circle bg-gray-800">90%</div>
              </div>
            </div>
            <div class="text-center w-full mt-3">
              <h1 class="font-bold text-lg">Solution</h1>
              <p class="text-sm mt-1 text-gray-200">
                amet consectetur adipisicing elit. Porro iste,
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center max-w-[14rem]">
            <div class="circle-wrap">
              <div class="circle">
                <div class="mask full-3">
                  <div class="fill-3 bg-smart-blue"></div>
                </div>
                <div class="mask half">
                  <div class="fill-3 bg-smart-blue"></div>
                </div>
                <div class="inside-circle bg-gray-800">95%</div>
              </div>
            </div>
            <div class="text-center w-full mt-3">
              <h1 class="font-bold text-lg">Succès</h1>
              <p class="text-sm mt-1 text-gray-200">
                amet consectetur adipisicing elit. Porro iste,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle-wrap {
  display: grid;
  grid-template-columns: repeat(1, 160px);
  grid-gap: 80px;
  width: 150px;
  height: 150px;
  background: #d9d7da;
  border-radius: 50%;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill-1,
.circle-wrap .circle .fill-2,
.circle-wrap .circle .fill-3 {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}

.circle-wrap .inside-circle {
  width: 124px;
  height: 124px;
  border-radius: 50%;
  line-height: 120px;
  text-align: center;
  margin-top: 13px;
  margin-left: 13px;
  color: white;
  position: absolute;
  z-index: 30;
  font-weight: 700;
  font-size: 2em;
}

/* color animation */

.mask .fill-1 {
  clip: rect(0px, 75px, 150px, 0px);
}

.mask.full-1,
.circle .fill-1 {
  animation: fill-1 ease-in-out 3s;
  transform: rotate(155deg);
}

@keyframes fill-1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(155deg);
  }
}

/* 2nd bar */

.mask .fill-2 {
  clip: rect(0px, 75px, 150px, 0px);
}

.mask.full-2,
.circle .fill-2 {
  animation: fill-2 ease-in-out 3s;
  transform: rotate(150deg);
}

@keyframes fill-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(150deg);
  }
}

/* 3rd progress bar */
.mask .fill-3 {
  clip: rect(0px, 75px, 150px, 0px);
}

.mask.full-3,
.circle .fill-3 {
  animation: fill-3 ease-in-out 3s;
  transform: rotate(153deg);
}

@keyframes fill-3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(153deg);
  }
}
</style>
