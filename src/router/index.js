import { createRouter, createWebHistory } from "vue-router";
import EventsList from "../views/EventsList.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "EventsList",
    component: EventsList,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
