import { io } from "socket.io-client";
import store from "../store/index.js";

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    this.socket.on("broadcast", (data) => {
      store.commit("addMessage", data);
    });
    this.socket.on("users", (users) => {
      store.commit("getUsers", users);
      console.log(users);
    });
  }

  message(msg) {
    this.socket.emit("message", msg);
  }

  adduser(name) {
    this.socket.emit("new-user", name);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
