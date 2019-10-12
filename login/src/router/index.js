import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/page/home"
import Login from "@/page/login"
import Infor from "@/page/infor"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/log',
      name: 'login',
      component: Login
    },
    {
      path: '/infor',
      name: 'infor',
      component: Infor
    },
  ]
})
