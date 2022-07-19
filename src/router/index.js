import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,

  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //  component: () => 
  //     import(/* webpackChunkName: "about" */ "../views/Shop.vue"),
    
  },
]; 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
