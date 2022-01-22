import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Cameras from '../views/Cameras.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Cameras",
    component: Cameras,
  },
  {
    path: "/alert",
    name: "Alert",
    component: () =>
      import(/* webpackChunkName: "alert" */ "../views/Alert.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/delete",
    name: "Delete",
    component: () =>
      import(/* webpackChunkName: "delete" */ "../views/Delete.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
