import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/Gallery/Gallery.vue"),
  },
  {
    path: "/our-worlds",
    name: "Our-Worlds",
    component: () =>
      import(/* webpackChunkName: "our-worlds" */ "../views/OurWorlds/OurWorlds.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
