<template>
  <div class="md:flex">
    <div
      class="container mx-auto mt-8 lg:mt-16 max-w-sm rounded text-white text-center"
    >
      <span class="text-6xl">Welcome</span>
      <span class="block text-2xl">This is your task manager app</span>
      <router-link v-if="!loginStatus" to="/login">
        <div class="inline-block lg:m-4 ">
          <button
            type="submit"
            value="Login"
            class="w-40  font-medium bg-blue-500 hover:bg-blue-700 text-white text-center py-1 px-2 rounded"
          >
            LogIn
          </button>
        </div>
      </router-link>
      <router-link v-if="!loginStatus" to="/signup">
        <div class="block lg:mt-0">
          if you don't have an account
          <span class="text-blue-400 hover:text-blue-600">Sign Up</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import TheNavigation from "@/components/TheNavigation.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    //TheNavigation
  },
  computed: {
    ...mapGetters("auth", ["loginStatus"])
  }
};
</script>
