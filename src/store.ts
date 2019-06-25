import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    masking: false,
  },
  mutations: {
    SHOW_MASK(state) {
      state.masking = true;
    },
    HIDE_MASK(state) {
      state.masking = false;
    },
  },
  actions: {

  },
});
