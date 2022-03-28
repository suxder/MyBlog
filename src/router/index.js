import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/backstage/Layout/index.vue'
import Login from '../views/backstage/Login/index.vue'
const dashboard = resolve => require(['../views/backstage/Dashboard/index.vue'], resolve)

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: '登陆',
    component: Login
  },
  {
    path: '/',
    name: '首页',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: dashboard
    }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
