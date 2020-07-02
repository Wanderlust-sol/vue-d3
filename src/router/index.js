import Vue from "vue";
import VueRouter from "vue-router";

import SoundChart from "../views/SoundChart.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/sound",
    component: SoundChart,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
