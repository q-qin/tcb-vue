import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path:'/user/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "user" */ '../views/User/Login.vue'),
    meta:{
      title:'登录'
    }
  },
  {
    path:'/user/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "user" */ '../views/User/Register.vue'),
    meta:{
      title:'注册'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
