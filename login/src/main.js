// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {saveCookie,getCookie} from "../static/js/cook"
import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  $,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

   
router.beforeEach((to, from, next) => {
   var str=getCookie("link");
 
  //  var brr=JSON.parse(str).inkl
    // console.log("ppp")
    // console.log(brr);
  //      if (!str) {
  //   alert("对不起您访问的页面必须登录有才能访问!!!!");
  //   next("/login");
  // } else {
  //   next();
  // }
  if(to.path == "/infor" ){
    // alert("l")
      if(!getCookie("link")){
        alert("对不起您访问的页面必须登录有才能访问!!!!");
        next("/log");
      }else{
        next();
      }
  }  else{
    next();
  }


});