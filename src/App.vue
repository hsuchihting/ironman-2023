<template>
  <div class="w-full">
    <div class="p-6 bg-red-800 border-b-2 border-white">
      <h1 class="text-4xl font-black text-yellow-200">
        2023 IT IRONMAN FRONT-END 30 DAYS CHALLENGE
      </h1>
      <ul class="flex items-center">
        <li v-for="(item, index) in links" :key="index" class="pt-4 pr-8">
          <a
            :href="item.path"
            class="text-white font-bold hover:underline hover:font-black"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </div>

    <div class="flex w-full">
      <div class="w-1/5 bg-yellow-600">
        <ul>
          <li
            v-for="link in routerPath"
            :key="link.name"
            class="text-xl font-bold text-white px-6 py-4 hover:bg-yellow-200 duration-200 hover:text-yellow-600 border-r-4 border-gray-300"
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
      menu: [],
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
    };
  },
  computed: {
    routerPath() {
      const articleList = [
        {
          text: "下拉選單",
        },
        {
          text: "卡片元件與彈窗",
        },
        {
          text: "可搜尋資料的欄位",
        },
        {
          text: "多個複選框",
        },
        {
          text: "多個條件回傳值來判斷",
        },
        {
          text: "假日顯示不同顏色",
        },
        {
          text: "陣列重組",
        },
        {
          text: "重組資料",
        },
        {
          text: "多筆資料組合",
        },
        {
          text: "分頁",
        },
        {
          text: "基本後台版型",
        },
      ];
      const menuList = [];
      for (let i = 1; i <= articleList.length; i++) {
        const pathObj = {
          name: `Day${i < 10 ? "0" + i : i} - ${articleList[i - 1].text}`,
          path: `/day${i < 10 ? "0" + i : i}`,
        };
        menuList.push(pathObj);
      }
      return (this.menu = menuList);
    },
  },
};
</script>

<style></style>
