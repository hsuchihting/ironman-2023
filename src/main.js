import { createApp } from "vue";
import App from "./App.vue";
import "./style/style.css"; //在此引入
import router from "./router/index.js";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(router).use(VueAxios, axios).mount("#app");
