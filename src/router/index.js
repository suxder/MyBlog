import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/backstage/Layout/index.vue";
import Login from "../views/backstage/Login/index.vue";
import store from "../store";

// 解决高版本router的bug
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: Layout,
    redirect: "/login",
  },
  {
    path: "/login",
    name: "登陆",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "仪表盘",
    component: Layout
  }
];

const router = new VueRouter({
  routes,
});

// 导航守卫
// 建立免登陆白名单
const whiteList = ["home"];
router.beforeEach((to, from, next) => {
  // 若去往login，则直接放行
  if (to.path === "/login") {
    next();
  } else {
    // 去往其他页面，先判断是否在白名单中
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      console.log("放行");
      next();
    } else {
      // 不在免登陆白名单中，则判断是否有token
      let token = store.getters.token;
      if (token === null || token === "") {
        // 既不在白名单中，也没有token，重定向到登录页
        next("/login");
      } else {
        // 不在登陆白名单中，但有token，则放行
        next();
      }
    }
  }
});

export default router;
