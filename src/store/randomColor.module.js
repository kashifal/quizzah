export default {
  namespaced: true,
  state: {
    color: "rgb(144, 21, 237)",
  },
  mutations: {
    setColor: function (state, payload) {
      let hue = Math.floor(Math.random() * 255);
      let saturation = Math.floor(Math.random() * 255);
      let lightness = Math.floor(Math.random() * 255);
      let over = Math.floor(Math.random() * 100);
      let grad = `rgb(${hue}, ${saturation}, ${lightness})`;
      state.color = grad;
    },
  },
};
