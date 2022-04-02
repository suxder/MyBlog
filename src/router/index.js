import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/backstage/Layout/index.vue";
import Login from "../views/backstage/Login/index.vue";
const dashboard = (resolve) =>
  require(["../views/backstage/Dashboard/index.vue"], resolve);

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "登陆",
    component: Login,
  },
  {
    path: "/",
    name: "首页",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: dashboard,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

// 导航守卫：使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    let token = localStorage.getItem("Authorization");

    if (token === null || token === "") {
      next("/login");
    } else {
      next();
    }
  }
});

export default router;
