<script setup lang="ts">
import Production from "@/components/Production.vue";
import { useCustomerStore } from "../../stores/customersStore";

const customerStore = useCustomerStore();
</script>

<template>
  <div class="w-full lg:py-32 py-10 xl:px-36 md:px-10 px-4 relative bg-white">
    <div class="w-full flex justify-center">
      <div
        class="rounded-full shadow bg-white px-4 py-2 inline-flex items-center space-x-3 mx-auto text-gray-500 uppercase font-medium text-xs sm:text-sm"
      >
        <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
        <h1>Notre porfolio</h1>
        <div class="w-2 h-2 bg-smart-blue rounded-full"></div>
      </div>
    </div>
    <div class="mt-6">
      <h1 class="font-bold lg:text-5xl text-4xl text-center">
        <span class="text-smart-blue">Activités</span> & Réalisations
      </h1>
    </div>
    <p class="py-10 max-w-3xl text-center mx-auto px-4 leading-7 leading-7">
      ILS NOUS ONT FAIT CONFIANCE POURQUOI PAS VOUS 📲NOUS GÉRONS VOTRE
      COMMUNAUTÉ EN LIGNE À BONNE ESCIENCE ✅Nous vous attribuons un community
      manager recruté parmi les meilleurs apprenants lors de nos formations ✅
      occupez vous désormais de vos client en boutique nous gérons le reste ✅un
      contenu de qualité est généré quotidiennement ✅des shooting photo pour
      vos produits ✅des contenus vidéo pour vos produits. ✅un reporting
      mensuel des activités ✅création de base de données exploitable
    </p>
    <div class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <Production
        v-for="(customer, index) in customerStore.customers"
        :key="index"
        :data="customer"
      />
    </div>
  </div>
</template>
