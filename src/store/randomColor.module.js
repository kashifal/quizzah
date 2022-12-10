export default {
  namespaced: true,
  state: {
    color: "rgb(144, 21, 237)",
  },
  mutations: {
    setColor: function (state, payload) {
      const hue = Math.floor(Math.random() * 255);
      const saturation = Math.floor(Math.random() * 255);
      const lightness = Math.floor(Math.random() * 255);
      const over = Math.floor(Math.random() * 100);
      const grad = `rgb(${hue}, ${saturation}, ${lightness})`;
      state.color = grad;
    },
  },
};
