import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=> import('../views/home/Home')
const Category = ()=> import('../views/category/Category')
const Shopcart = ()=> import('../views/shopcart/ShopCart')
const Profiled = ()=> import('../views/profile/Profile')
const Detail = ()=> import('../views/detail/Detail')
const Login = ()=> import('../views/login/Login')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: Home,
    component: Home
  },
  {
    path: '/category',
    name: Category,
    component: Category
  },
  {
    path: '/shopcart',
    name: Shopcart,
    component: Shopcart
  },
  {
    path: '/profile',
    name: Profiled,
    component: Profiled
  },
  {
    path: '/detail/:iid',
    name: Detail,
    component: Detail
  },
  {
    path: '/login',
    name: Login,
    component: Login
  }
]

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

//重复点报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
return originalPush.call(this, location).catch(err => err)
}

export default router
