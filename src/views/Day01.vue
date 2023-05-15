<template>
  <div>
    <h2 class="my-4 text-2xl font-bold">下拉選單與搜尋對應列表</h2>
    <div class="w-1/3">
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
          <img
            v-if="item.area === forEachSelectedValue"
            :src="item.imgUrl"
            :alt="`pic-${item.area}`"
            class="mt-4 shadow"
          />
        </template>
      </div>
    </div>

    <div class="w-1/3 mt-10">
      <h3 class="capitalize my-4">filter select</h3>
      <select
        v-model="filterSelectedValue"
        class="w-full p-2 border border-gray-300 rounded-md"
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
  watch: {
    forEachSelectedValue(value) {
      this.forEachSelectedValue = value;
    },
    filterSelectedValue(value) {
      this.filterSelectedValue = value;
    },
  },
  created() {
    this.getTravelData();
    if (this.travelList.length > 0) {
      this.forEachSelectedValue = this.travelList[0].area;
      this.getTravelDataByForEach({
        target: { value: this.forEachSelectedValue },
      });
    }
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
        } else if (value === "") {
          this.getImgByForEach = "";
        }
      });
    },
  },
};
</script>
