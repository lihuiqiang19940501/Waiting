<template>
    <div>
       <div class="header"></div>
       <div id="bander">
            <div class="regC">
				<h4>欢迎加入waiting</h4>
				<p class="uname">用户名: <input type="text" v-focus name="uname" v-model="uname" @blur="hasuser" placeholder="4-12位中文,字母或数字"><span :class="uname_color">{{uname_tip}}</span></p>
				<h5 :class="unameTip_color">{{uname_msg}}</h5>
				<p class="password">密码: <input type="password" name="" v-model="upwd" placeholder="输入6-10位数字或字母组合"><span :class="upwd_color">{{upwd_tip}}</span></p>
				<p>确认密码: <input type="password" name="" value="" v-model="upwd2" placeholder="请再次输入密码"><span :class="upwd2_color">{{upwd2_tip}}</span></p>
				<p class="email">邮箱: <input type="email" name="" value="" v-model="email" placeholder="请输入您的邮箱" @keyup.enter="reg"><span :class="email_color">{{email_tip}}</span></p>
				<p></p>
				<p> </p>
				<p class="submit"><input class="submit" type="submit" value="提交注册" @click="reg"></p>
				<p>已有账号?<router-link to="/login" class="login" >立即登录!</router-link></p>
            </div>
            <div id="banderText">
                <table></table>
                <p id="banderT">&nbsp&nbsp&nbsp离开主人时候的它,匆忙的跟上你的脚印却又不得不落下的时候，眼神里有多少遗憾和不舍...</p>
                <p id="banderT1">&nbsp&nbsp&nbsp我们把它们圈养在身边陪伴我们，却也是我们让它们走上流浪之路，多希望，这群精灵能多多被善待，不要被伤害。中国平均每年有4000万只流浪猫狗，它们多是被抛弃或者是走失，幸运的话会救助，不幸的话，它们面临的就是被屠杀或者惨死街头的命运!</p>
                <p id="banderT4" class="logo_w">Waiting You.....</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
	data(){
		return{
			uname:'',
			upwd:'',upwd2:"",email:"",
			uname_color:'',uname_tip:"",unameTip_color:"",uname_msg:"tip:不能包含特殊符号!",
			upwd_color:"",upwd_tip:"",upwd2_color:"",upwd2_tip:"",email_color:"",email_tip:""
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
	watch: {
		uname(){
			if(this.uname==""){
				this.uname_msg="tip:不能包含特殊符号!";
				this.uname_tip="";
				this.unameTip_color="";
			}else if(/^([\u4e00-\u9fa5]|\w){4,12}$/.test(this.uname)){
				this.uname_color='success';
				this.uname_tip="√"
				this.unameTip_color='success';
				this.uname_msg="用户名格式正确!"//请输入4-10位中文,字母或数字
			}else{
				this.uname_color='fail';
				this.uname_tip="✘"
				this.unameTip_color='fail';
				this.uname_msg="请输入4-12位中文,字母或数字";
			}
		},
		upwd(){
			if(this.upwd==""){
				this.upwd_tip="";
				this.unameTip_color="";
			} else if(/^\w{6,12}$/.test(this.upwd)){
				this.upwd_color='success';
				this.upwd_tip="√";
			}else{
				this.upwd_color='fail';
				this.upwd_tip="✘"
			}
		},
		upwd2(){
			if(this.upwd2==""){
				this.upwd2_tip="";
				this.unameTip2_color="";
			}else if(this.upwd2==this.upwd){
				this.upwd2_color='success';
				this.upwd2_tip="√";
			}else{
				this.upwd2_color='fail';
				this.upwd2_tip="✘"
			}
		},
		email(){
			if(this.email==""){
				this.email_tip="";
				this.email_color="";
			}else if(/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(this.email)){
				this.email_color='success';
				this.email_tip="√";
			}else{
				this.email_color='fail';
				this.email_tip="✘"
			}
		}
	},
    methods: {
		//验证用户名是否存在
		hasuser(){
		this.axios.get('http://127.0.0.1:3000/user/hasuser',{params:{uname:this.uname}}).then(res=>{
			if(res.data.has==1){
				this.uname_color='fail';
				this.uname_tip="✘"
				this.unameTip_color='fail';
				this.uname_msg="用户名已存在!";
			}
		})
		},
		//提交注册
		reg(){
			//验证是否存在用户名
		this.axios.get('http://127.0.0.1:3000/user/hasuser',{params:{uname:this.uname}}).then(res=>{
		if(res.data.has==0){
		this.axios.post('http://127.0.0.1:3000/user/reg',Qs.stringify({
			uname:this.uname,
			upwd:this.upwd,
			upwd2:this.upwd2,
			email:this.email
			})).then(res=>{
				if(res.data.code==200){
					console.log("注册成功!");
					//保存当前用户名到vuex中,跳转到登录页面自动填写用户名
					this.$store.state.loginUname=this.uname;
					alert("注册成功!点击跳转到登录页面.")
					this.$router.push({path: '/login'})
				}else if(res.data.code==0){
					alert("检查信息填写是否正确?")
				}else{
					alert("注册失败,请重试!")
				}
			})
			}
		})	
		}
	},
	created() {
		setTimeout(function(){
			document.getElementById("banderT").style.opacity=1;document.getElementById("banderT").style.top="35px";},0);
		setTimeout(function(){
			document.getElementById("banderT1").style.opacity=1;document.getElementById("banderT1").style.top="200px";},1500);
		setTimeout(function(){
			document.getElementById("banderT4").style.opacity=1; document.getElementById("banderT4").style.top="730px";},3500);
	}
	}
</script>
<style scoped>
.header{
    width: 1100px;
    height: 60px;
	margin: 0 auto;
}
.cc{
	width: 99%;
	height: 80px;
	border:2px solid #e0a800;
}
.cc img{
	display: block;
	margin: 10px auto;
}
#bander{
	width: 100%;
	min-width: 1200px;
	height: 900px;
	margin: 0 auto;
	position: relative;
	background-image: url("../../public/img/p4-bg.jpg");
    background-position-y: -180px;
    background-position-x:right;
	background-size:2150px 1100px;
	background-repeat: no-repeat;
}
#banderText{
	width: 100%;
	min-width: 1100px;
	height: 900px;
	background-image:linear-gradient(70deg,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.3) 40%,transparent 50%);
    position: relative;
}
#banderText p{
	font-family: 华文行楷;
	font-size: 1.5rem;
	color: #fff;
	width: 600px;
    line-height: 50px;
    z-index: 1000;
}
#banderText p.logo_w{
	font-size: 3rem;
}
#bander .regC{
	width:350px;
	height: 400px;
	position: absolute;
	top: 100px;
	right:200px;
	background-color: #fff;
	border:2px solid transparent;
	transition: 1s;
	z-index: 9998;
	box-shadow:1px 1px 100px 1px #000000;
	font-size:16px;
	color: #000000;
	font-family: 宋体;
	border-radius:10px ;
}
#bander .regC p input{
	border-radius: 3px;
	border:1px solid #ff6735;

}
.regC h5{
	font-weight:normal;
}
#bander .regC h4{
	text-align: center;
	font-size: 27px;
	margin-top: 50px;
}
#bander .regC p{
	margin-top: 20px;
}
#bander .regC p input{
	width: 200px;
	height: 30px;
}
#bander .regC p.uname{
	width: 318px;
    height: 32px;
}
#bander .regC p.password{
	margin-top:8px; 
	margin-left: 32px;
}
#bander .regC p.email{
	margin-left: 32px;
}
#bander .regC p.uname{
	margin-left: 16px;
}
#bander .regC p .submit{
	background-color: #ff6735;
}
#bander .regC p.submit{
	text-align: center;
}
#bander .regC p span{
    display: inline-block;
    width: 20px;
}
#bander .regC:hover{
	border:2px solid #ff6735;
}

#banderT,#banderT1,#banderT2,#banderT3,#banderT4{
	opacity:0;
	transition:1s;
	position: absolute;
}
#banderT{
	top: 75px;
	left: 60px;
}
#banderText #banderT1{
	top: 300px;
	left: 50px;
	width: 650px;
}
#banderText  #banderT2{
	left: 60px;
	width: 650px;
}
#banderT4{
	top:780px;
	left:60px;
}
.login{
	color:blue;
	cursor: pointer;
}
.login:hover{
	text-decoration: underline;
}
.success{
	color:#00BC00;
}
.fail{
	color:red;
}
</style>