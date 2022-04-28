import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Layout from "../views/backstage/Layout/index.vue";
import Login from "../views/backstage/Login/index.vue";
import ErrorPage from "../views/backstage/ErrorPage";
import NavPage from "../views/client/NavPage/index.vue";

// 解决高版本router的bug
// 解决vue-cli和vue-router版本冲突问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "nav_page",
    path: "/home",
    component: NavPage,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: Layout,
  },
  {
    name: "not_found",
    path: "/404",
    component: ErrorPage,
  },
  {
    path: "*", // 此处需特别注意至于最底部
    redirect: "/404",
  },
];

const router = new VueRouter({
  routes,
});

// 导航守卫
// 建立免登陆白名单
const whiteList = ["/home", "/login", "/404"];
router.beforeEach((to, from, next) => {
  // 匹配到错误路径
  // 判断用户登陆状态
  if (store.getters.token) {
    next();
  } else {
    // 在免登陆白名单中，则直接进入
    console.log(to.path)
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login"); // 否则全部重定向到登录页
    }
  }
});

export default router;
