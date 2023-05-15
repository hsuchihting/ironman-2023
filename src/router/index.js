import { createRouter, createWebHistory } from "vue-router";

const routes = [];
for (let i = 1; i <= 30; i++) {
  const route = {
    path: `/day${i < 10 ? "0" + i : i}`,
    name: `Day${i < 10 ? "0" + i : i}`,
    component: () => import(`../views/Day${i < 10 ? "0" + i : i}.vue`),
  };
  routes.push(route);
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
