import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "",
    cityName: "seattle"
  },

  mutations: {
    adduserName(state, name: string) {
      state.userName = name;
    }
  },
  actions: {
    adduserName(context, name: string) {
      context.commit("adduserName", name);
    }
  }
});
