export default {
  namespaced: true,
  state: {
    modal: false,
    data:[]
  },
  mutations: {
    setModal: function (state, payload) {
      state.modal = !state.modal;
      state.data = payload;
    },
  },
};
