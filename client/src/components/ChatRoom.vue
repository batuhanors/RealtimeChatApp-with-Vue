<template>
  <div class="chat-container">
    <header class="chat-header">
      <h1>Chat Wizard</h1>
      <a id="leave-btn" class="btn" @click="leaveHandler">Leave Room</a>
    </header>
    <main class="chat-main">
      <div class="chat-sidebar">
        <h3>Room Name:</h3>
        <h2 id="room-name">Default</h2>
        <h3>Users</h3>
        <ul id="users"></ul>
      </div>
      <div class="chat-messages">
        <div v-for="message in $store.state.message" :key="message">
          <p>{{ message }}</p>
        </div>
      </div>
    </main>
    <div class="chat-form-container">
      <form @submit.prevent="sendMsg">
        <input
          id="msg"
          type="text"
          placeholder="Enter Message"
          required
          autocomplete="off"
          class="chat-input"
          v-model="input"
        />
        <button class="chat-btn">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import SocketioService from "../services/socketioService";
import store from "../store/index.js";

export default {
  setup() {
    const router = useRouter();
    const input = ref("");

    onMounted(() => {
      SocketioService.setupSocketConnection();
    });

    onBeforeUnmount(() => {
      SocketioService.disconnect();
    });

    const leaveHandler = () => {
      router.push({ name: "Login" });
    };

    const sendMsg = () => {
      SocketioService.message(store.state.username + ": " + input.value);
      input.value = "";
    };

    return { leaveHandler, input, sendMsg };
  },
};
</script>

<style>
.chat-container {
  max-width: 1100px;

  margin: 30px auto;
  overflow: hidden;
}

.chat-header {
  background: #152d35;
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chat-main {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.chat-sidebar {
  background: #1c353d;
  color: #fff;
  padding: 20px 20px 60px;
  overflow-y: scroll;
}

.chat-sidebar h2 {
  font-size: 20px;
  background: rgba(0, 0, 0, 0.1);
  color: azure;
  padding: 10px;
  margin-bottom: 20px;
}

.chat-sidebar h3 {
  margin-bottom: 15px;
}

.chat-sidebar ul li {
  padding: 10px 0;
}

.chat-messages {
  padding: 30px;
  max-height: 500px;
  overflow-y: scroll;
  background-color: azure;
}

.chat-messages .message {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  overflow-wrap: break-word;
}

.chat-messages .message .meta {
  font-size: 15px;
  font-weight: bold;
  color: #152d35;
  opacity: 0.7;
  margin-bottom: 7px;
}

.chat-messages .message .meta span {
  color: #777;
}

.chat-form-container {
  padding: 20px 30px;
  background-color: #152d35;
}

.chat-form-container form {
  display: flex;
}

.chat-form-container input[type="text"] {
  font-size: 16px;
  padding: 5px;
  height: 40px;
  flex: 1;
}

.btn,
.chat-btn {
  cursor: pointer;
  padding: 5px 15px;
  background: #d4ecdd;
  color: #000;
  border: 0;
  font-size: 18px;
}
.chat-btn {
  height: 50px;
  border-radius: 8px;
  width: 6rem;
}
</style>
