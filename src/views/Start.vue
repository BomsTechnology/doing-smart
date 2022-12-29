<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
onMounted(async () => {
  setTimeout(() => {
    router.replace({
      name: "home",
    });
  }, 2000);
});
</script>
<template>
  <div class="h-screen bg-white flex justify-center items-center">
    <img
      src="@/assets/logo.png"
      alt="logo-doing-smart"
      class="object-cover sm:h-16 h-10 animate-pulse"
    />
  </div>
</template>
