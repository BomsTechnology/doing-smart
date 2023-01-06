import { defineStore } from "pinia";

import Customer from "../types/Customer";
import customers from "../data/customers";

export const useCustomerStore = defineStore("customer", {
  state: () => ({
    customers: customers,
  }),
});
