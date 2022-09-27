import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SectionView from "../views/Section.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/experience",
      name: "experience",
      component: SectionView,
      props : {title: "Expérience"},
    },
    {
      path: "/formation",
      name: "formation",
      component: SectionView,
      props : {title: "Formation"},
    },
    {
      path: "/projects",
      name: "projets",
      component: SectionView,
      props : {title: "Projets"},
    },
    {
      path: "/hobbies",
      name: "hobbies",
      component: SectionView,
      props : {title: "Hobbies"},
    },
  ],
});

export default router;
