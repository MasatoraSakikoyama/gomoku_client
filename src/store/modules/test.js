import test from '@/api/test';

export default {
  namespaced: true,
  state: {
    data: null,
  },
  getters: {
    test(state) {
      return state.data;
    },
  },
  mutations: {
    setTest(state, { data }) {
      state.data = data;
    },
  },
  actions: {
    getTest({ commit }) {
      test
        .getTest()
        .then((response) => commit('setTest', { data: response.data }));
    },
  },
};
