export default {
  namespaced: true,
  state: {
    quiz_history: [],
    total_quiz_quetions: "",
    total_quiz_answers: "",
  },
  mutations: {
    setHistory: function (state, payload) {
      state.quiz_history = [...state.quiz_history, payload];
       state.total_quiz_quetions =
         typeof state.quiz_history !== "undefined" && state.quiz_history === 0
           ? ""
           : state.quiz_history
               .map((item) => item.total)
               .reduce((prev, next) => prev + next);
      state.total_quiz_answers =
        typeof state.quiz_history !== "undefined" &&
        state.quiz_history.length === 0
          ? ""
          : state.quiz_history
              .map((item) => item.score)
              .reduce((prev, next) => prev + next);
    },
  },
};
