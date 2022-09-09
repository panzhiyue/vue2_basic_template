import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);
const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "../views/home"),
  },
];

const router = new Router({
  mode: "hash",
  routes,
});

export default router;
