export default {
  namespaced: true,
  state: {
    quiz_history:[],
    total:'',
    gotted:''
  },
  mutations: {
    setHistory: function (state, payload) {
      state.quiz_history = [...state.quiz_history, payload];
      setInterval(() => {
        console.log(state.quiz_history);
      },3000)
    },
  },
};
