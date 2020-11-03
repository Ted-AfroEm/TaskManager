<template>
  <div id="app" class="w-full h-screen">
    <div class="background-image"></div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/taskpage">Task</router-link>|
      <router-link to="/signup">Sign Up</router-link>
    </div>-->
    <TheNavigation></TheNavigation>
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {
    TheNavigation
  }
};
</script>

<style>
body {
  background: url("./assets/backgroundlogin.jpg");
}
.background-image {
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: -1;
}
</style>
