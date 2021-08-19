import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiJoke : ""
  },
  mutations: {
    storeJoke: function(state, payload) {
      state.apiJoke = payload;
    }
  },
  actions: {},
  modules: {},
});
