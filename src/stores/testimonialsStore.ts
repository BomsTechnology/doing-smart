import { defineStore } from "pinia";

import Testimonial from "../types/Testimonial";
import testimonials from "../data/testimonials";

export const useTestimonialStore = defineStore("testimonial", {
  state: () => ({
    testimonials: testimonials,
  }),
});
