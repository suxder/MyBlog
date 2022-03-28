import router from "./index"

// 简单的导航守卫
const whiteRouter = ['/login']

router.beforeEach((to, next, from) => {
  const isToken = localStorage.getItem('token')
  if (isToken) {
    next()
  } else { // 无token
    whiteRouter.includes(to.path) ? next() : next('/login') // 如果路由在白名单中则放行，不在则跳转至login页面
  }
})
