import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store";
import router from "./router/index";
import "./assets/styles/fonts.css";
import "./assets/styles/content.css";
import "./assets/styles/null-style.css";
//Vue.config.productionTip = false;
Vue.use(VueRouter);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
