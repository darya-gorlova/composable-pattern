import { createRouter, createWebHashHistory } from "vue-router";
import Page from "../pages/Page.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/learn-composables",
      name: "Page",
      component: Page,
    },
  ],
});

export default router;
