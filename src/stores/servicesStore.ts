import { defineStore } from "pinia";

import Service from "../types/Service";
import services from "../data/services";

export const useServiceStore = defineStore("service", {
  state: () => ({
    services: services,
  }),

  getters: {
    serviceById(state) {
      return (id: string): Array<Service> =>
        state.services.filter(
          (service: Service) => service.slug === id
        ) as unknown as Array<Service>;
    },
  },
});
