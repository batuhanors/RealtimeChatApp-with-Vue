import { createStore } from "vuex";

export default createStore({
  state: {
    message: [],
    username: "",
    users: [],
  },
  mutations: {
    addMessage(state, msg) {
      state.message.push(msg);
    },
    setUserName(state, username) {
      state.username = username;
    },
    getUsers(state, users) {
      state.users = [];
      state.users.push(users);
      console.log(state.users);
    },
    clearUsers(state) {
      state.users = [];
    },
  },
  actions: {},
  modules: {},
});
