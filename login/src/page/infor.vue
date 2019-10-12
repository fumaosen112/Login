<template>
<div>
    <Homenav></Homenav>
    
    <span>{{srr.name}}</span><span>{{srr.age}}</span><br/>
    <button @click="change">修改数据</button>
      <div v-show="bool">
        <input type="text"  v-model="srr.age">
       <input type="text"  v-model="srr.name">
       <button @click="save">保存</button>
      </div>
       
</div>
</template>

<script>
import {saveCookie,getCookie} from "../../static/js/cook.js"
import Homenav from "../components/homeNav.vue"
export default {
    data() {
        return {
            srr:'',
            bool:false
        }
    },
    components:{
       Homenav,
   },
   methods: {
       change(){
          this.bool=!this.bool
         
       },
       save(){
            saveCookie("data",JSON.stringify(this.srr),1)
       }
   },
   created() {
      $.ajax({
       url:'http://60.161.187.155:6067/api/user.jsp',
       type:'get',
       dataType:'json',
       success:(res)=>{
         console.log(res)
         this.srr=res
        
         }
        
     
     })
       
    },
    mounted(){
        var srr=getCookie("data");    
        var brr=JSON.parse(srr)
        console.log(brr.name)

        this.srr=brr
        console.log(this.srr)
    }
    
}
</script>

<style scoped>

</style>
