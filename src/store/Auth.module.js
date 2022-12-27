export default {
  namespaced: true,
  state: {
    Auth: false,
  },
  mutations: {
    setAuth: function (state) {
      state.Auth = !state.Auth;
    },
  },
};
