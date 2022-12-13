export default {
  namespaced: true,
  state: {
    quiz_history:[],
  },
  mutations: {
    setHistory: function (state, payload) {
      state.quiz_history = [...state.quiz_history, payload];
    },
  },
};
