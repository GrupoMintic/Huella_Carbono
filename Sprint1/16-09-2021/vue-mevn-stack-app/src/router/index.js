import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
 {
 path: "/home",
 name: "home",
 component: () => import("../components/ListComponent"),
 },
 {
 path: "/admin",
 name: "admin",
 component: () => import("../components/CreateComponent"),
 },
 {
 path: "/edit/:id",
 name: "edit",
 component: () => import("../components/EditComponent"),
 },
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
];
const router = new VueRouter({
 mode: "history",
 base: process.env.BASE_URL,
 routes,
});
export default router;
