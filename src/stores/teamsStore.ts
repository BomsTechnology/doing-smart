import { defineStore } from "pinia";

import Team from "../types/Team";
import teams from "../data/teams";

export const useTeamStore = defineStore("team", {
  state: () => ({
    teams: teams,
  }),
});
