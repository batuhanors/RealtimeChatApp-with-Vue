<template>
  <div class="container">
    <ChatRoom />
  </div>
</template>

<script>
import ChatRoom from "../components/ChatRoom.vue";
import SocketioService from "../services/socketioService";

export default {
  components: { ChatRoom },
  setup() {},
};
</script>

<style></style>
