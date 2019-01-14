<template>
    <div class="bg">
        <div class="login">
            <h1>欢迎来到Waiting！</h1><h3><a href="/">回到首页</a></h3>
            <p><input type="text" v-focus placeholder="请输入用户名" v-model="uname" name="uname"></p>
            <p><input type="password"  placeholder="请输入密码" v-model="upwd" name="upwd" @keyup.enter="login"></p>
            <p><button @click="login">登录</button></p>
            <p><span>没有账号?</span><router-link to="/reg">立即注册</router-link></p>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                uname:"",uname_tip:'用户名不能包含特殊符号！',
                upwd:"",upwd_tip:'用密码不能为空！',
            }
        },
        //自定义指令,自动获取焦点
        directives: {
            focus: {
                inserted: function (e) {
                e.focus()
                }
            }
            },
       created() {
           //加载页面后设置vuex中用户名
           this.uname=this.$store.state.loginUname;
           
       },
        methods: {
            login(){
                var uname = this.uname;
                var upwd = this.upwd;
                if(uname=="" || upwd==""){ 
                    alert("用户名或密码不能为空");
                    return
                }
                this.axios.post('http://127.0.0.1:3000/user/login',Qs.stringify({uname,upwd})).then(res=>{
                  if(res.data.code==1){
                    sessionStorage.setItem("uname",uname);
                      console.log("登录成功!");
                      this.$router.push({path: '/'})
                        location.reload();
                  }else{
                    alert(res.data.msg);
                    this.upwd="";
                  }
               })
            },
        },
        
    }
</script>
<style scoped>
.bg{
    width: 1400px;
    height: 900px;
    margin: 10px auto;
    border-radius:10px; 
    box-shadow: 0 0 4px #000;
    background: url('/img/index/lunbo2.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: .2s;
    position: relative;
}
.bg:hover{
    box-shadow: 0 0 10px #ff6735;
}
.login{
    width: 500px;
    height: 323px;
    position: absolute;
    top: 180px;
    left: 368px;
    background: #fff;
    border-radius:8px; 
    box-shadow: 0 0 5px #aaa;
}
.login:hover{
    box-shadow: 0 0 5px #000;
}
.login h1{
    margin: 10px;
}
.login h3{
    position: absolute;
    top: 15px;
    right: 10px;
    color: #aaa;
}
.login h3:hover{
  color: #000 !important;
  text-decoration: underline;
}
.login h3 a:visited{
    color: #aaa;
}
.login p input{
    width: 70%;
    height: 40px;
    margin-top:20px; 
    border: none;
    font-size: 15px;
    padding-left: 20px;
    border:1px solid #aaa; 
    border-radius: 5px;
}
.login p button{
    margin-top: 30px;
    width: 200px;
    height: 40px;
    background: #ff6735;
    border: 1px solid transparent;
    font-size: 20px;
    color: #fff;
    border-radius:5px; 
    
}
.login p button:hover{
    border: 1px solid #ff6735;
    background: #ff0000;
    color: #eee;
    cursor: pointer;
}
.login p:last-child{
    margin: 20px;
}
.login p:last-child :last-child{
    margin-left: 40px;
    color: blue;
}
.login p:last-child :last-child:hover{
    text-decoration: underline;
}
/* .login p.hint span{
    color: #ff0000;
} */
.success{
    color: #00BC00;
}
.falut{
    color: red;
}
</style>