export default {
  namespaced: true,
  state: {
    quiz_history: [],
    total_quiz_quetions: "",
    total_quiz_answers: "",
    language: null,
  },
  mutations: {
    setHistory: function (state, payload) {
      state.quiz_history = [...state.quiz_history, payload];
      //questions
      state.total_quiz_quetions =
        typeof state.quiz_history !== "undefined" && state.quiz_history === 0
          ? ""
          : state.quiz_history
              .map((item) => item.total)
              .reduce((prev, next) => prev + next);
      //answers
      state.total_quiz_answers =
        typeof state.quiz_history !== "undefined" &&
        state.quiz_history.length === 0
          ? ""
          : state.quiz_history
              .map((item) => item.score)
              .reduce((prev, next) => prev + next);

      state.html_score_lang =
        typeof state.quiz_history !== "undefined" &&
        state.quiz_history.length === 0
          ? ""
          : state.quiz_history
              .map((item) => item.language.language)
              .reduce((prev, next) => prev + next);
    },
  },
};
