<template>
  <div>
    <h2 class="text-3xl text-red-600 font-bold my-4">Select</h2>
    <div class="grid lg:grid-cols-2 gap-2">
      <div class="w-full">
        <h3 class="capitalize my-4">forEach select</h3>
        <select
          v-model="forEachSelectedValue"
          class="w-full p-2 border border-gray-300 rounded-md"
          @change="getTravelDataByForEach($event)"
        >
          <option value="">---請選擇---</option>
          <option
            v-for="item in travelList"
            :key="item.id"
            :value="item.area"
            :id="item.id"
          >
            {{ item.area }}
          </option>
        </select>

        <div
          class="rounded-md overflow-hidden object-cover flex justify-center items-center"
        >
          <template v-for="item in travelList" :key="item.id">
            <div
              class="w-full lg:flex lg:items-start"
              v-if="item.area === forEachSelectedValue"
            >
              <img
                :src="item.imgUrl"
                :alt="`pic-${item.area}`"
                class="mt-4 shadow w-full lg:w-1/2"
              />
              <div class="ml-4 mt-4">
                <h3 class="text-amber-700 text-2xl font-bold">
                  {{ item.name }}
                </h3>
                <p class="text-gray-600">地點：{{ item.area }}</p>
                <p class="text-gray-600">介紹：{{ item.description }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="w-full">
        <h3 class="capitalize my-4">filter select</h3>
        <select
          v-model="filterSelectedValue"
          class="w-full p-2 border border-gray-300 rounded-md"
          @change="getTravelDataByFilter($event)"
        >
          <option value="">---請選擇---</option>
          <option
            v-for="item in travelList"
            :key="item.id"
            :value="item.area"
            :id="item.id"
          >
            {{ item.area }}
          </option>
        </select>

        <div
          class="rounded-md overflow-hidden object-cover flex justify-center items-center"
        >
          <template v-for="item in travelList" :key="item.id">
            <div
              class="w-full lg:flex lg:items-start"
              v-if="item.area === filterSelectedValue"
            >
              <img
                :src="item.imgUrl"
                :alt="`pic-${item.area}`"
                class="mt-4 shadow w-full lg:w-1/2"
              />
              <div class="ml-4 mt-4">
                <h3 class="text-blue-700 text-2xl font-bold">
                  {{ item.name }}
                </h3>
                <p class="text-gray-600">地點：{{ item.area }}</p>
                <p class="text-gray-600">介紹：{{ item.description }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const travelApi =
  "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";

export default {
  name: "HomeView",
  data() {
    return {
      travelList: [],
      forEachSelectedValue: "",
      filterSelectedValue: "",
      getImgByForEach: "",
    };
  },
  created() {
    this.getTravelData();
  },
  methods: {
    getTravelData() {
      this.$http.get(travelApi).then((res) => {
        this.travelList = res.data.data;
      });
    },
    getTravelDataByForEach(e) {
      const value = e.target.value;
      this.travelList.forEach((item) => {
        if (item.area === value) {
          this.getImgByForEach = item.imgUrl;
        }
      });
    },
    getTravelDataByFilter(e) {
      const value = e.target.value;
      this.travelList.filter((item) => {
        if (item.area === value) {
          this.getImgByForEach = item.imgUrl;
        }
      });
    },
  },
};
</script>
