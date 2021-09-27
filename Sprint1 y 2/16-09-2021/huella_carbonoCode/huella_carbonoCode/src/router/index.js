import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
 {
 path: "/tips",
 name: "tips",
 component: () => import("../components/TipsComponent"),
 },
 {
 path: "/menu",
 name: "menu",
 component: () => import("../components/MenuComponent"),
 },
 {
  path: "/calculo",
  name: "calculo",
  component: () => import("../components/CalculoHuella"),
  }, 
];
const router = new VueRouter({
 mode: "history",
 base: process.env.BASE_URL,
 routes,
});
export default router;
