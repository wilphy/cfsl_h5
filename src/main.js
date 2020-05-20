import Vue from "vue";
import router from "./router.js";
import axios from "axios";
import VueAxios from 'vue-axios'
import App from "./App.vue";

Vue.config.productionTip = false;

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

Vue.use(VueAxios,axios);


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
