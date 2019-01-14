<template>
  <header >
    <div class="header_bg"></div>
    <!-- 顶部导航 -->
    <div class="header_nav">
		<!-- 导航 -->
		<ul class="nav_box">
		<!-- logo -->
			<span><img src="img/header/logo.png" alt=""></span>
			<li><a href="/">waiting首页</a><img src="img/header/claw.png" alt=""></li>
			<li><router-link to="/adoption">宠物领养</router-link><img src="img/header/claw.png" alt=""></li>
			<li><router-link to="/addpet">发布信息</router-link><img src="img/header/claw.png" alt=""></li>
			<li><router-link to="/adoption">养宠攻略</router-link><img src="img/header/claw.png" alt=""></li>
			<li><router-link to="/adoption">&nbsp;&nbsp;&nbsp;&nbsp;帮助&nbsp;&nbsp;&nbsp;&nbsp;</router-link><img src="img/header/claw.png" alt=""></li>
			<li><router-link to="/about">关于我们</router-link><img src="img/header/claw.png" alt=""></li>
		</ul>
		<!-- 导航右侧：定位、用户 -->
		<div class="nav_right">
      <span class="nav_city">郑州</span><a href="">[切换城市]</a>
      <span v-if="!this.$store.state.islogin">	
          <span class="nav_login"><router-link to="/login">登录</router-link></span>/<span class="nav_reg"><router-link to="/reg">注册</router-link></span>
      </span>
      <span v-else>	
		  <span class="nav_login"><a href="login.html" target="_parent">欢迎</a></span>:&nbsp;<span class="nav_reg"><a class="uname">{{uname}}</a><a class="out" href="javascript:;" @click="outin">退出</a></span>
      </span>
		</div>
	</div>
</header>
</template>
<script>
export default {
	data(){
		return{
			uname:""
		}
	},
	created() {
		this.uname=sessionStorage.getItem("uname")
	},
	methods: {
		outin(){
			sessionStorage.clear();
			location.reload();
			}
	},
  }
  
 
  
  
</script>
<style>
  
  header{
    box-shadow: 0px 0px 5px #aaa;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background: #fff;
  }
  /* 顶部导航*/
.header_nav{
	width:1300px;
	height:60px;
	margin:0 auto;
}
header div ul li a{
	display:inline-block;
	height: 30px;
	line-height: 30px;
	border:1px solid #ff6735;/*#43CD80;*/
	background:#FFE4B5;
	border-radius: 5px;
}

.nav_box span{
	float:left;
	margin-top:10px;
}
/* 导航 */
.header_nav .nav_box{
	float:left;
	line-height:60px;
}
/* 导航logo */
.header_nav .nav_box li a>img{
	position:relative;
	top:7px;
}
.header_nav .nav_box li{
	float:left;
	font-size:16px;
	margin-right:30px;

} 
.header_nav  a{
	color:#684029;

}
.header_nav a:hover{
	/*color:#BB9772;*/
	color:#000;
}
.header_nav ul li:hover img{
	margin-top:21px;
}
/* 顶部导航右侧：定位、用户 */
.header_nav .nav_right{
	float:right;
	line-height:60px;
	font-size:15px;
}
.nav_right .nav_city{
	margin-right:5px;
}
.nav_right .nav_city,.nav_login{
	margin-left:50px;
}
.nav_right .nav_login:hover,.nav_right .nav_reg:hover{
	color:#BB9772;
}
.out{
	margin: 20px;
}
.uname{
	display: inline-block;
	width: 80px;
	height: 17px;
	line-height: 17px;
	overflow: hidden;
	vertical-align: middle;
}
</style>