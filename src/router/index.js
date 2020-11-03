import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

//import store from "../store/index";
import JwtService from "../common/jwt.service";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      // public: true,
      onlyWhenLoggenOut: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      public: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      // public: true,
      onlyWhenLoggenOut: true
    }
  },

  {
    path: "/tasks",
    name: "Tasks",
    // meta: { requiresAuth: !store.state.loginAuth },
    component: () =>
      import(/* webpackChunkName: "Tasks" */ "../views/Tasks.vue")
  },
  // {
  //   path: "/tasks/completed",
  //   name: "taskCompleted",
  //   component: () =>
  //     import(/* webpackChunkName: "taskCompleted" */ "../views/Tasks.vue"),
  // },
  // {
  //   path: "/tasks/onprogress",
  //   name: "taskOnProgress",
  //   component: () =>
  //     import(/* webpackChunkName: "taskOnProgress" */ "../views/Tasks.vue"),
  // },
  // {
  //   path: "task/edit/:id",
  //   name: "taskEdit",
  //   component: () =>
  //     import(/* webpackChunkName: "taskEdit" */ "../views/EditTask.vue"),
  // },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "SignUp" */ "../views/SignUp.vue"),
    meta: {
      // public: true,
      onlyWhenLoggenOut: true
    }
  },

  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */
        "../views/NotFound"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const onlyWhenLoggenOut = to.matched.some(
    record => record.meta.onlyWhenLoggenOut
  );
  const loggedIn = !!JwtService.getToken();
  // console.log({ onlyWhenLoggenOut, loggedIn })
  if (loggedIn && onlyWhenLoggenOut && !isPublic) return next("/tasks");
  if (!loggedIn && !onlyWhenLoggenOut && !isPublic) return next("/login");
  next();
});

export default router;
