<template>
  <div class="w-full">
    <div class="p-6 bg-red-800">
      <h1 class="text-4xl font-black text-yellow-200">
        2023 IT IRONMAN FRONT-END 30 DAYS CHALLENGE
      </h1>
      <ul class="flex items-center">
        <li v-for="(item, index) in links" :key="index" class="pl-4">
          <a :href="item.path">{{ item.name }}</a>
        </li>
      </ul>
    </div>

    <div class="flex w-full">
      <div class="w-1/5 bg-yellow-600">
        <ul>
          <li
            v-for="link in menu"
            :key="link.name"
            class="text-xl font-bold text-white px-6 py-4 hover:bg-yellow-200 duration-200 hover:text-yellow-600"
          >
            <router-link :to="link.path">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="w-4/5 bg-gray-100 p-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "TimCodingBlog",
          path: "https://hsuchihting.github.io/",
        },
        {
          name: "Github",
          path: "https://github.com/hsuchihting",
        },
        {
          name: "Facebook",
          path: "https://www.facebook.com/TimWriteCoding/",
        },
      ],
      menu: [
        { name: "Day01", path: "/day01" },
        { name: "Day02", path: "/day02" },
        { name: "Day03", path: "/day03" },
        { name: "Day04", path: "/day04" },
        { name: "Day05", path: "/day05" },
        { name: "Day06", path: "/day06" },
        { name: "Day07", path: "/day07" },
        { name: "Day08", path: "/day08" },
        { name: "Day09", path: "/day09" },
        { name: "Day10", path: "/day10" },
        { name: "Day11", path: "/day11" },
        { name: "Day12", path: "/day12" },
        { name: "Day13", path: "/day13" },
        { name: "Day14", path: "/day14" },
        { name: "Day15", path: "/day15" },
        { name: "Day16", path: "/day16" },
        { name: "Day17", path: "/day17" },
        { name: "Day18", path: "/day18" },
        { name: "Day19", path: "/day19" },
        { name: "Day20", path: "/day20" },
        { name: "Day21", path: "/day21" },
        { name: "Day22", path: "/day22" },
        { name: "Day23", path: "/day23" },
        { name: "Day24", path: "/day24" },
        { name: "Day25", path: "/day25" },
        { name: "Day26", path: "/day26" },
        { name: "Day27", path: "/day27" },
        { name: "Day28", path: "/day28" },
        { name: "Day29", path: "/day29" },
        { name: "Day30", path: "/day30" },
      ],
    };
  },
};
</script>

<style></style>
