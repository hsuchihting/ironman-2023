<template>
  <div class="relative">
    <h2 class="text-3xl text-red-600 font-bold my-4">People Card</h2>

    <div class="grid lg:grid-cols-3 gap-4">
      <div v-for="item in users" :key="item.login.uuid">
        <div class="w-full">
          <div class="bg-white rounded-lg p-4 shadow-lg">
            <div>
              <img
                class="w-full object-cover"
                :src="item.picture.large"
                :alt="item.name.first"
              />
            </div>
            <div class="mt-4">
              <button
                type="button"
                @click="showInfoModal(item.login.uuid)"
                class="w-full bg-yellow-500 font-bold text-red-900 rounded-md p-4 hover:bg-yellow-800 hover:text-white duration-150"
              >
                Click and See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isShowInfoModal"
      class="absolute inset-0 bg-black/90 flex justify-center items-center"
    >
      <div class="bg-white shadow-md p-8 rounded-lg">
        <ul>
          <li class="w-full mb-4">
            <img
              class="object-cover w-full"
              :src="infoData.picture"
              :alt="infoData.name"
            />
          </li>
          <li class="pb-2">{{ infoData.name }}</li>
          <li class="pb-2">{{ infoData.gender }}</li>
          <li class="pb-2">{{ infoData.birthday }} ({{ infoData.age }})</li>
          <li class="pb-2">{{ infoData.phone }}</li>
          <li class="pb-2">{{ infoData.email }}</li>
          <li class="pb-2">{{ infoData.country }}</li>
        </ul>
        <div>
          <button
            type="button"
            @click="closeModal()"
            class="bg-red-600 p-2 text-white rounded-md w-full mt-5"
          >
            再見
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const randomApi = "https://randomuser.me/api/?results=6";

export default {
  data() {
    return {
      users: [],
      infoData: {
        name: "",
        picture: "",
        gender: "",
        birthday: "",
        age: "",
        phone: "",
        email: "",
        country: "",
      },
      isShowInfoModal: false,
    };
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

    showInfoModal(id) {
      this.isShowInfoModal = true;
      this.users.forEach((item) => {
        if (item.login.uuid === id) {
          this.infoData = {
            picture: item.picture.large,
            name: item.name.first + item.name.last,
            gender: item.gender,
            birthday: item.dob.date.split("T")[0],
            age: item.dob.age,
            phone: item.phone,
            email: item.email,
            country: item.location.country,
          };
        }
      });
    },
    closeModal() {
      this.isShowInfoModal = false;
    },
  },
};
</script>

<style></style>
