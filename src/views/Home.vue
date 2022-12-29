<script setup lang="ts">
import Hero from "@/components/home/Hero.vue";
import Teams from "@/components/home/Teams.vue";
import Services from "@/components/home/Services.vue";
import Portfolio from "@/components/home/Portfolio.vue";
import Training from "@/components/home/Training.vue";
import Subscribe from "@/components/home/Subscribe.vue";
import Blog from "@/components/home/Blog.vue";
import About from "@/components/home/About.vue";
import Mission from "@/components/home/Mission.vue";
import Highlight from "@/components/home/Highlight.vue";
import ContactSection from "@/components/ContactSection.vue";
import Testimonials from "@/components/home/Testimonials.vue";
</script>
<template>
  <Hero />
  <Services />
  <About />
  <Mission />

  <Portfolio />
  <Training />
  <Teams />
  <Testimonials />
  <ContactSection />
  <Highlight />
  <Blog />
  <Subscribe />
</template>
