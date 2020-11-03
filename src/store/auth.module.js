import ApiService from "@/services/api.service";
import JwtService from "@/common/jwt.service";
import UserService from "@/common/user.service";

export default {
  namespaced: true,
  state: {
    errors: null,
    user: {
      Profile: JSON.parse(UserService.getUserData()),
      FirstName: JSON.parse(UserService.getUserData())
        ? JSON.parse(UserService.getUserData()).Name
        : "",
      token: null
    },
    isAuthenticated: !!JwtService.getToken(),
    registrationError: null,
    loginStatues: false,
    regstrationSuccess: null
  },

  getters: {
    currentUser(state) {
      return state.user.FirstName;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    loginError(state) {
      return state.errors;
    },
    EmailExist(state) {
      return state.registrationError;
    },
    loginStatus(state) {
      return state.loginStatues;
    },
    regstrationSuccess(state) {
      return state.regstrationSuccess;
    }
  },
  mutations: {
    setError(state, error) {
      state.errors = error;
    },
    setUser(state, user) {
      state.isAuthenticated = true;
      // state.user.firstName = user.user
      state.errors = {};
      JwtService.saveToken(user.token);
      state.user.token = JwtService.getToken();

      UserService.saveUserData(JSON.stringify(user.user));
      state.user.Profile = JSON.parse(UserService.getUserData());
      state.user.FirstName = JSON.parse(UserService.getUserData())
        ? JSON.parse(UserService.getUserData()).Name
        : "";
    },
    logOut(state) {
      state.isAuthenticated = false;
      state.user = {};
      state.errors = "";
      JwtService.destroyToken();
      UserService.destroyUserData();
    },
    setRegistrationError(state, value) {
      state.registrationError = value;
    },
    setRegstrationSuccess(state, value) {
      state.regstrationSuccess = value;
    },
    setLoginError(state, value) {
      state.loginStatues = value;
    }
  },
  actions: {
    async setUser(context, user) {
      context.commit("setUser", user);
    },
    async login(context, credentials) {
      try {
        let res = await ApiService.login({ user: credentials });
        context.commit("setUser", res.data);
        context.commit("setLoginError", false);
        console.log(res.data);
      } catch (err) {
        context.commit("setError", err.response.data.error);
        context.commit("setLoginError", true);
        console.log(err.response.data.error);
      }
    },
    async logout(context) {
      context.commit("logOut");
      context.commit("setLoginError", false);
    },
    async register(context, credentials) {
      try {
        let res = await ApiService.register({ user: credentials });
        context.commit("setUser", res.data);
        context.commit("setRegistrationError", false);
        context.commit("setRegstrationSuccess", true);
        console.log("Successfully Registered");
      } catch (err) {
        context.commit("setError", err.data.error);
        context.commit("setRegistrationError", true);
        //console.log(err.data.error);
      }
    },
    //to check if user is authenticated
    async checkAuth(context) {
      if (JwtService.getToken()) {
        try {
          let res = await ApiService.checkAuth(JwtService.getToken());
          context.commit("setUser", res.data);
        } catch (err) {
          context.commit("setError", err.response);
        }
      } else {
        context.commit("logOut");
      }
    }
    // async updateUser(context, payload) {
    //   const { firstName, lastName, email, password, image } = payload;
    // }
  }
};
