<template>
  <div>
    <nav class="items-center flex-wrap bg-teal-500 py-2 px-16">
      <router-link to="/">
        <div class="w-1/2 inline-block items-center flex-shrink-0 text-white">
          <font-awesome-icon
            class="text-2xl text-white"
            :icon="['fas', 'tasks']"
          />
          <span class="font-semibold text-xl tracking-tight pl-2"
            >TaskManager</span
          >
        </div>
      </router-link>

      <div class="w-1/2 inline-block text-right">
        <router-link v-if="!isAuthenticated" to="/signup">
          <div class="inline-block lg:mt-0">
            <font-awesome-icon
              class="text-lg text-teal-200 hover:text-white mx-6"
              :icon="['fas', 'user-plus']"
            />
            <!-- <span class="text-white lg:hidden hover:text-white mx-2">SignUp</span> -->
          </div>
        </router-link>
        <router-link v-if="!isAuthenticated" to="/login">
          <div class="inline-block lg:mt-0">
            <font-awesome-icon
              class="text-lg text-teal-200 hover:text-white"
              :icon="['fas', 'sign-in-alt']"
            />
          </div>
        </router-link>
        <router-link v-if="isAuthenticated" to="/tasks">
          <div class="inline-block lg:mt-0 mx-6 text-teal-200 hover:text-white">
            <span>Tasks</span>
          </div>
        </router-link>
        <router-link v-if="isAuthenticated" to="/">
          <div class="inline-block lg:mt-0 mx-6">
            <font-awesome-icon
              class="text-lg text-teal-200 hover:text-white"
              :icon="['fas', 'sign-out-alt']"
              @click="onSubmit()"
            />
          </div>
        </router-link>

        <!-- <span class="text-teal-200 hover:text-white mx-2">Login</span> -->
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    async onSubmit() {
      await this.logout();
    }
  }
};
</script>

<style></style>
