<template>
  <div class="login">
    <Homenav></Homenav>
   <input type="text" placeholder="账户" v-model="name">
   <input type="password" placeholder="输入密码" v-model="pwd">
    <button @click="fun">登录</button>
  </div>
</template>

<script>
import Homenav from "../components/homeNav.vue"
import {saveCookie,getCookie} from "../../static/js/cook.js"
export default {
  name: 'HelloWorld',
  data () {
    return {
        name:'',
        pwd:'',
        infor:''
    }
  },
  components:{
    Homenav
  },
 methods: {
   yan(){
      var reg=/^a/;
      if(!reg.test(this.name)){
        alert("kk")
      }
   },
   fun(){
     this.yan()
     $.ajax({
       url:'http://60.161.187.155:6067/api/login.jsp',
       type:'post',
       data:{userName:this.name,userPwd:this.pwd},
       dataType:'json',
       success:(res)=>{
         this.infor=res.success
         if(res.success==true){
            // console.log("登录成功")
            saveCookie("link",JSON.stringify(this.infor),7)
            this.$router.push('/')
            console.log(res)
         }
        
       }
     })
   }
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

