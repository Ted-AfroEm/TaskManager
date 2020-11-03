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
        class="z-0 container mx-auto mt-8 lg:mt-16 max-w-sm rounded shadow-2xl bg-white"
      >
        <span v-if="regstrationSuccess">
          <signupSuccess></signupSuccess>
        </span>
        <div v-if="!regstrationSuccess" class="p-8">
          <div class="text-black text-left font-bold text-xl">Sign Up</div>
          <span class="text-gray-500"
            >Please fill in this form to create an account!</span
          >
          <hr />
          <form onsubmit="return false" class="form-example py-2">
            <div class>
              <div>
                <input
                  class="w-5/12 p-2 outline-none bg-gray-100 focus:bg-white"
                  type="text"
                  name="FirstName"
                  placeholder="First Name"
                  v-model="firstName"
                />
                <span class="w-2/12 px-6"></span>
                <input
                  class="w-5/12 p-2 outline-none bg-gray-100 focus:bg-white"
                  type="text"
                  name="LastName"
                  placeholder="Last Name"
                  v-model="lastName"
                />
              </div>
              <span class="text-red-500 text-sm" v-show="nameValid"
                >Please enter at least 4 characters.</span
              >
              <div>
                <input
                  class="w-full p-2 mt-4 outline-none bg-gray-100 focus:bg-white"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  v-model="email"
                />
              </div>
              <span class="text-red-500 text-sm" v-show="EmailExist"
                >A user with this email address already exists</span
              >
              <!-- <span class="text-red-500 text-sm">{{ registerError }}</span> -->
              <div>
                <input
                  class="w-full p-2 mt-4 outline-none bg-gray-100 focus:bg-white"
                  type="password"
                  name="password"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <span class="text-red-500 text-sm" v-show="passValid"
                >Must have at least 6 characters</span
              >
              <div>
                <input
                  class="w-full p-2 mt-4 outline-none bg-gray-100 focus:bg-white"
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  v-model="validatePassword"
                />
              </div>
              <span class="text-red-500 text-sm" v-show="passwordMatch"
                >Please make sure your passwords match.</span
              >
            </div>
            <div class="pt-2">
              <input
                type="checkbox"
                id="TermsOfUse"
                value="TermsOfUse"
                v-model="checked"
              />
              <label class="text-gray-500" for="TermsOfUse">
                I accept the
                <span class="text-blue-400">Terms of Use</span> &
                <span class="text-blue-400">Privacy Policy</span>
              </label>
            </div>
            <span class="text-red-500 text-sm" v-show="TermsOfUse"
              >To signup, please accept terms of use & privacy policy.</span
            >
            <div class="text-left pt-4">
              <button
                type="submit"
                value="signup"
                class="px-4 py-2 font-medium bg-blue-500 hover:bg-blue-700 text-white text-center rounded"
                @click="
                  onSubmit(
                    firstName,
                    lastName,
                    email,
                    password,
                    validatePassword
                  )
                "
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import signupSuccess from "../components/SignUpSuccess";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      validatePassword: "",
      TermsOfUse: false,
      emailValid: false,
      checked: false,
      passwordMatch: false,
      passValid: false,
      nameValid: false,
      alert: null,
      loading: false
    };
  },
  components: {
    signupSuccess
  },
  computed: {
    ...mapGetters("auth", ["EmailExist", "regstrationSuccess"])
  },
  methods: {
    //...mapActions(["signUps"]),
    ...mapActions("auth", ["register"]),
    onSubmit(firstName, lastName, email, password, validatePassword) {
      //verification
      this.TermsOfUse = false;
      this.passwordMatch = false;
      this.passValid = false;
      this.nameValid = false;
      this.emailValid = false;
      if (firstName.length < 3) {
        this.nameValid = true;
        console.log("firstName should be longer than 3 char");
      } else if (password.length < 6) {
        this.passValid = true;
        console.log("password should be longer than 6 char");
      } else if (password !== validatePassword) {
        console.log("Reenter the same password");
        this.passwordMatch = true;
      } else if (this.checked === false) {
        this.TermsOfUse = true;
        console.log("To signup, please accept usage general condtions");
      } else {
        //
        this.loading = true;
        //await this.register({ firstName, lastName, email, password });
        this.register({ firstName, lastName, email, password }).then(() => {
          this.loading = false;
        });
        //console.log("Hola " + this.emailStatus);
        //await this.loading = false;

        if (this.emailStatus == "EAE") {
          this.emailValid = true;
        }
      }
    }
  }
};
</script>

<style></style>
