import Vue from "vue";
import Vuex from "vuex";
import Lots from "./modules/lots";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    Lots,
  },
});