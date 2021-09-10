<template>
  <div class="box">
    <h1 class="brand">Chat Wizard</h1>

    <form v-on:submit.prevent="loginHandler">
      <label>Username</label>
      <input type="text" v-model="name" />
      <label>Room</label>
      <select>
        <option value="">Default</option>
        <!-- <option value="">Programming</option>
        <option value="">Memes</option> -->
      </select>
      <button>Join Chat</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import store from "../store/index.js";

export default {
  setup() {
    const name = ref("");

    const router = useRouter();

    const loginHandler = () => {
      store.commit("setUserName", name.value);
      router.push({ name: "Chat" });
    };

    return { loginHandler, name };
  },
};
</script>

<style>
.box {
  background-color: #d4ecdd;
  width: 25%;
  margin: 10rem auto;
  border-radius: 8px;
}
.brand {
  color: #152d35;
  padding-top: 2rem;
  margin-bottom: 3rem;
}
form {
  width: 75%;
  margin: auto;
}
label {
  display: block;
  text-align: left;
  font-size: 18px;
}
input {
  width: 100%;
  height: 30px;
  outline-color: #3db2ff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin-bottom: 2rem;
}
select {
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 18px;
  margin-bottom: 3rem;
}
.box button {
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 2rem;
  background-color: #345b63;
  color: azure;
  font-size: 18px;
  font-family: inherit;
}
@media only screen and (max-width: 767px) {
  .box {
    width: 80%;
  }
  form {
    width: 85%;
  }
}
</style>
