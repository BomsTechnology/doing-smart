<script setup lang="ts">
import Team from "@/components/Team.vue";
import { useTeamStore } from "../../stores/teamsStore";

const teamStore = useTeamStore();
</script>

<template>
  <div class="w-full py-10 xl:px-36 md:px-10 px-4 relative bg-gray-100">
    <div class="w-full flex justify-center">
      <div
        class="rounded-full shadow bg-white px-4 py-2 mx-auto text-gray-500 uppercase font-medium text-xs sm:text-sm inline-block"
      >
        Notre Equipe
      </div>
    </div>
    <div class="mt-6">
      <h1 class="font-bold lg:text-5xl text-4xl text-center">
        <span class="text-smart-blue">Equipes</span> Membres
      </h1>
    </div>
    <p class="py-10 max-w-3xl text-center mx-auto px-4 leading-7">
      Nous avons une équipe dynamique, professionnelle et talentueuse qui prends
      à cœur la satisfaction du client et l’atteinte de ses objectifs.
    </p>
    <div
      class="grid w-full lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-6 mt-10"
    >
      <Team
        v-for="(team, index) in teamStore.teams"
        :key="index"
        :data="team"
      />
    </div>
  </div>
</template>
