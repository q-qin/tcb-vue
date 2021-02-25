import Vue, { ComponentOptions, AsyncComponent } from 'vue'
import VueRouter, { RouteConfig,RedirectOption } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue';

Vue.use(VueRouter)
type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent

interface IRouteProps{
  path: string
  name?: string
  component?: Component
  redirect?: RedirectOption
  meta?: any,
  children?: RouteConfig[]
  hidden?:boolean
}

export const routes: Array<IRouteProps> = [
  {
    path: '/',
    name: 'Home',
    redirect:'/index',
    component: MainLayout,
    meta:{title:'首页'},
    children:[{
      path:'index',
      name:'index',
      meta:{title:'首页'},
      component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
    }]
  },
  {
    path:'/user/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "user" */ '../views/User/Login.vue'),
    meta:{
      title:'登录'
    },
    hidden:true
  },
  {
    path:'/user/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "user" */ '../views/User/Register.vue'),
    meta:{
      title:'注册'
    },
    hidden:true
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title:'关于我们',
    },
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
