import Vue from "vue";
import App from "./App.vue";

import router from "./router/index.js";
import { createPinia } from "pinia";
const store = createPinia();

Vue.config.productionTip = false;
Vue.use(store);
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
