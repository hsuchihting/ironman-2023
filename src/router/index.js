import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/day01",
    name: "Day01",
    component: () => import("../views/Day01.vue"),
  },
  {
    path: "/day02",
    name: "Day02",
    component: () => import("../views/Day02.vue"),
  },
  {
    path: "/day03",
    name: "Day03",
    component: () => import("../views/Day03.vue"),
  },
  {
    path: "/day04",
    name: "Day04",
    component: () => import("../views/Day04.vue"),
  },
  {
    path: "/day05",
    name: "Day05",
    component: () => import("../views/Day05.vue"),
  },
  {
    path: "/day06",
    name: "Day06",
    component: () => import("../views/Day06.vue"),
  },
  {
    path: "/day07",
    name: "Day07",
    component: () => import("../views/Day07.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
