export default {
  namespaced: true,
  state: {
    dropdown: false,
  },
  mutations: {
    setDropdown: function (state) {
      state.dropdown = !state.dropdown;
    },
  },
};