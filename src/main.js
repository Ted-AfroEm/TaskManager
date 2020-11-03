import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";
//import vuetify from '@/plugins/vuetify';
import "./assets/css/style.css";
import "./icons";
import ApiService from "./services/api.service";
import { BASEURL } from "./config/constants";

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) =>
//   Promise.all([store.dispatch("checkAuth")]).then(next)
// );

// router.beforeEach((to, from, next) => {
//   if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
//   else next();
// });

console.log({ BASEURL });

ApiService.init(BASEURL);

new Vue({
  router,
  store,
  //vuetify,
  render: h => h(App)
}).$mount("#app");
