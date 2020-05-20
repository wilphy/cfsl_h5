import Vue from "vue";
import router from "./router.js";
import axios from "axios";
import App from "./App.vue";

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://bl.7yue.pro/v1/classic/latest?appkey=RdshydjBvcYZhMZC";
axios.defaults.timeout = 8000;

Vue.use(axios);


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
