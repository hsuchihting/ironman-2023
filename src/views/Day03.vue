<template>
  <div>
    <h2 class="tracking-wide font-bold text-2xl text-red-600 mb-4">
      Filter Input
    </h2>

    <div class="grid lg:grid-cols-2 gap-1">
      <div class="w-full lg:flex lg:items-center">
        <select
          class="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2"
          v-model="input.type"
        >
          <option
            v-for="(item, index) in typeList"
            :key="index"
            :value="item.label"
          >
            {{ item.label }}
          </option>
        </select>
        <input
          v-model.trim="input.text"
          placeholder="請輸入搜尋文字"
          type="text"
          class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2"
        />
        <button type="button" class="p-2 bg-yellow-500 rounded-md">
          Search
        </button>
      </div>
    </div>
    <div class="mt-10">
      <table class="w-full border border-gray-400 text-center">
        <thead>
          <tr class="bg-red-700 text-white">
            <th class="p-2">頭像</th>
            <th class="p-2">名字</th>
            <th class="p-2">生日</th>
            <th class="p-2">性別</th>
            <th class="p-2">國籍</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b-2 border-b-gray-300"
            v-for="item in filterUser"
            :key="item.login.uuid"
          >
            <td>
              <img
                class="w-full object-cover"
                :src="item.picture.large"
                :alt="item.name.first"
              />
            </td>
            <td class="capitalize p-2">{{ item.name.first }}</td>
            <td class="p-2">{{ item.dob.date.split("T")[0] }}</td>
            <td class="capitalize p-2">{{ item.gender }}</td>
            <td class="capitalize p-2">{{ item.location.country }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const randomApi = "https://randomuser.me/api/?results=6";
export default {
  data() {
    return {
      users: [],
      typeList: [
        {
          label: "all",
          value: "0",
        },
        {
          label: "male",
          value: "1",
        },
        {
          label: "female",
          value: "2",
        },
      ],
      input: {
        type: "all",
        text: "",
      },
    };
  },
  computed: {
    // 下拉選單篩選
    typeFilter() {
      if (this.input.type !== "all") {
        return this.users.filter((item) => {
          return item.gender === this.input.type;
        });
      } else {
        return this.users;
      }
    },
    // 文字輸入篩選
    filterUser() {
      if (this.input.text) {
        return this.typeFilter.filter((item) => {
          const dataName = item.name.first.toLowerCase();
          const filterText = this.input.text.toLowerCase();
          return dataName.indexOf(filterText) !== -1;
        });
      } else {
        return this.typeFilter;
      }
    },
  },
  mounted() {
    this.getApiDate();
  },
  methods: {
    getApiDate() {
      this.$http.get(randomApi).then((res) => {
        this.users = res.data.results;
      });
    },
  },
};
</script>

<style></style>
