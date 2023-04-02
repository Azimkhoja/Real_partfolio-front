import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../layout/AdminLayout.vue";
import MainLayout from "../layout/MainLayout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      name: "adminLayout",
      component: AdminLayout,
    },
    {
      path: "/",
      name: "mainLayout",
      component: MainLayout,
      // children: [
      //   {
      //     path: "/home",
      //     name: "home",
      //     component: () => import("@/views/HomeView.vue"),
      //   },
      //   {
      //     path: "/about",
      //     name: "about",
      //     component: () => import("@/views/AboutMeView.vue"),
      //   },
      //   {
      //     path: "/project",
      //     name: "projects",
      //     component: () => import("@/views/ProjectsView.vue"),
      //   },
      //   {
      //     path: "/contact",
      //     name: "contact",
      //     component: () => import("@/views/ContactView.vue"),
      //   },
      // ],
    },
  ],
});

export default router;
