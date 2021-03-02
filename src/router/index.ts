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
    children:[{
      path:'/index',
      name:'index',
      meta:{title:'工作台',icon:'dashboard'},
      component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
    },{
      path:'/usermgr',
      name:'usermgr',
      meta:{title:'员工管理',icon:'user'},
      component: () => import(/* webpackChunkName: "Manage" */ '../views/Manage/User.vue'),
    },{
      path:'/about',
      name:'about',
      meta:{title:'帮助',icon:'question-circle'},
      component: () => import(/* webpackChunkName: "home" */ '../views/Home/About.vue'),
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
]

const router = new VueRouter({
  routes
})

export default router
