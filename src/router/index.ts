import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const NavBar = () => import("@/components/NavBar.vue");
const Footer = () => import("@/components/Footer.vue");

import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    isAdmin?: boolean;
    requiresAuth?: boolean;
  }
}
const websiteName: String = "Doing Smart";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    components: {
      default: () => import("@/views/Home.vue"),
      navbar: NavBar,
      footer: Footer,
    },
    meta: {
      title: "Agence de marketing digital - Accueil | " + websiteName,
    },
  },
  {
    path: "/service",
    name: "service",
    components: {
      default: () => import("@/views/Service.vue"),
      navbar: NavBar,
      footer: Footer,
    },
    meta: {
      title: "Agence de marketing digital - Services | " + websiteName,
    },
  },

  {
    path: "/contact",
    name: "contact",
    components: {
      default: () => import("@/views/Contact.vue"),
      navbar: NavBar,
      footer: Footer,
    },
    meta: {
      title: "Agence de marketing digital - Contact | " + websiteName,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// router.beforeEach(async (to, from, next) => {
//   const userStore = useUserStore();
//   if (to.meta.requiresAuth) {
//     if (await userStore.getCurrentUser()) {
//       if (to.meta.isAdmin) {
//         if (userStore.currentUser.type == "admin") {
//           next();
//         } else {
//           next({ name: "home" });
//         }
//       } else {
//         next();
//       }
//     } else {
//       next({ name: "login" });
//     }
//   } else {
//     next();
//   }
// });

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
