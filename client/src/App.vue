<template>
  <router-view />
</template>

<script>
import SocketioService from "./services/socketioService.js";

export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
