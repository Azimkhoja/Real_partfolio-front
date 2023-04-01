import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../layout/AdminLayout.vue";
import MainLayout from "../layout/MainLayout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
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
    {
      path: "/",
      name: "adminLayout",
      component: AdminLayout,
    },
  ],
});

export default router;
