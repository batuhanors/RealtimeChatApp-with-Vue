import { createStore } from "vuex";

export default createStore({
  state: {
    message: [],
    username: null,
  },
  mutations: {
    addMessage(state, msg) {
      state.message.push(msg);
    },
    setUserName(state, username) {
      state.username = username;
    },
  },
  actions: {},
  modules: {},
});
