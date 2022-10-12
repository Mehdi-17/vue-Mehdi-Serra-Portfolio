import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ParcoursSectionView from "../views/ParcoursSection.vue";
import getPresentationText from "../constants/constants";
import { experiences, formation, projets } from "../constants/constants";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: {text: getPresentationText()}
    },
    {
      path: "/experience",
      name: "experience",
      component: ParcoursSectionView,
      props : {title: "expériences", contents: experiences},
    },
    {
      path: "/formation",
      name: "formation",
      component: ParcoursSectionView,
      props : {title: "formation", contents: formation},
    },
    {
      path: "/projects",
      name: "projets",
      component: ParcoursSectionView,
      props : {title: "Projets", contents: []},
    },
    {
      path: "/hobbies",
      name: "hobbies",
      component: ParcoursSectionView,
      props : {title: "Hobbies"},
    },
  ],
});

export default router;
