<template>
  <div>
    <div
      v-if="loading"
      class="z-20 absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center"
    >
      <font-awesome-icon
        class="text-green-400 text-6xl opacity-100"
        id="loading"
        :icon="['fas', 'spinner']"
        spin
      />
    </div>
    <div
      v-if="loading"
      class="z-10 absolute top-0 right-0 left-0 bottom-0 bg-black"
      style="opacity: 0.7"
    ></div>

    <div
      class="absolute mt-12 top-0 right-0 left-0 bottom-0 flex justify-center items-center"
    >
      <div
        class="z-0  w-3/4 md:w-3/4 lg:w-2/3 xl:w-1/3 pb-6 rounded shadow-2xl bg-white"
      >
        <div
          class="bg-blue-500 text-white text-left font-semibold text-xl py-2 px-2 pl-4"
        >
          <span>Login</span>
        </div>
        <form onsubmit="return false" class="form-example py-2">
          <div class="py-4 ml-16 mr-2">
            <label class="mr-4 focus:text-blue-600" for="name">
              <font-awesome-icon
                class="text-xl text-gray-500 hover:text-blue-500"
                :icon="['fas', 'user']"
              />
            </label>
            <input
              class="rounded w-3/4 outline-none focus:shadow-lg focus:placeholder-transparent"
              type="email"
              name="email"
              placeholder="Login"
              required
              v-model="email"
            />
          </div>
          <div class="py-4 ml-16 mr-2">
            <label class="mr-4" for="email">
              <font-awesome-icon
                class="text-xl text-gray-500 hover:text-blue-500"
                :icon="['fas', 'lock']"
              />
            </label>
            <input
              class="rounded w-3/4 outline-none focus:shadow-lg focus:placeholder-transparent"
              type="password"
              name="password"
              placeholder="Password"
              required
              v-model="password"
            />
          </div>
          <span v-if="loginStatus" class="text-red-600 text-sm mx-2 px-10 py-2"
            >Incorrect username or password.
          </span>
          <!-- <span class="text-red-600 text-sm mx-2 px-10 py-2"
        >{{ loginError }}
      </span> -->
          <div class="text-right px-2">
            <button
              type="submit"
              value="Login"
              @click="onSubmit(email, password)"
              class="font-medium bg-blue-500 hover:bg-blue-700 text-white text-center py-1 px-2 rounded"
            >
              LOGIN
            </button>
          </div>
          <router-link to="/signup">
            <div class="inline-block ml-4">
              if you don't have an account
              <span class="text-blue-400 hover:text-blue-600">Sign Up</span>
            </div>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false
    };
  },
  computed: {
    ...mapGetters("auth", ["loginStatus"]),
    ...mapState({
      isAuthenticated: state => state.auth.isAuthenticated
    })
    //...mapState(["errors"])
  },
  methods: {
    // ...mapActions(["logins"]),
    // async onSubmit(email, password) {
    //   await this.logins({ email, password });
    //   if (this.loginStatus) {
    //     this.email = "";
    //     this.password = "";
    //     this.$router.push("/tasks");
    //   }
    // }

    ...mapActions("auth", ["login"]),
    onSubmit(email, password) {
      this.loading = true;
      this.login({ email, password }).then(() => {
        this.loading = false;

        if (this.isAuthenticated) {
          this.email = "";
          this.password = "";
          this.$router.push("/tasks");
        }
      });
      //console.log(res);
    }
  }
};
</script>

<style></style>
