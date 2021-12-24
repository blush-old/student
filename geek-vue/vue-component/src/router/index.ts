import { createRouter, createWebHistory } from "vue-router";
import View1 from "../views/View1.vue";
import View2 from "../views/View2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "view1",
      component: View1,
    },
    {
      path: "/view2",
      name: "view2",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: View2,
    },
  ],
});

export default router;
