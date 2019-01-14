<template>
    <div>
        <section class="pc-banner">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide swiper-slide-center none-effect">
                            <a href="#">
                                <img src="img/index/lunbo1.jpg">
                            </a>
                            <div class="layer-mask"></div>
                        </div>
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="img/index/lunbo2.jpg">
                            </a>
                            <div class="layer-mask"></div>
                        </div>
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="img/index/lunbo3.jpg">
                            </a>
                            <div class="layer-mask"></div>
                        </div>
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="img/index/lunbo4.jpg">
                            </a>
                            <div class="layer-mask"></div>
                        </div>
                        <div class="swiper-slide">
                            <a href="#">
                                <img src="img/index/lunbo5.jpg">
                            </a>
                            <div class="layer-mask"></div>
                        </div>
                    </div>
                    <div class="button">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </section>
            <div style="clear: both"></div>
            <div id="banner_bottom">
                <div>
                    <a href="javascript:;" @click="toAdoption">我要免费领养</a>
                    <a href="javascript:;" @click="toAddPet">发布领养信息</a>
                </div>
            </div>
    <main class="connect_box">
        <!--左侧导航栏-->
        <ul class="petMain">
            <li >汪星人</li>
            <li>喵星人</li>
            <li>花鸟鱼虫</li>
            <li>用户秀恩爱</li>
            <div class="box"></div>
        </ul>
        <div style="clear:both"></div>
        <!--汪汪-->
        <div class="home-module" id="wangwang">
            <div class="title"><hr class="hrL"><h3>汪星人专区</h3><hr class="hrR"></div>
            <div class="pet_top">
                <img src="img/index/wang_datu.jpg" alt="">
                <a href="javascript:;" name="wang_datu">查看更多</a>
                <div class="box_yy"></div>
            </div>
            <div class="home-module_list">
                <ul v-if="doglist[0]">
                    <li id="tu1">
                        <div  class="list_tu">
                        <a href="#">
                            <img :src="doglist[3].img1" alt="">
                        </a>
                        </div>
                        <h6><a href="">{{doglist[3].pname}}</a></h6>
                        <p>简介: <span>{{doglist[3].intro}}</span></p>
                        <p class="bh">编号：<span>{{doglist[3].ser_id}}</span></p>
                        <p><a href="">带TA回家</a></p>
                    </li>
                    <li>
                        <div  class="list_tu">
                            <a href="#">
                                <img :src="doglist[2].img1" alt="">
                            </a>
                        </div>
                        <h6><a href="">{{doglist[2].pname}}</a></h6>
                        <p>简介: <span>{{doglist[2].intro}}</span></p>
                        <p class="bh">编号：<span>{{doglist[2].ser_id}}</span></p>
                        <p><a href="">带TA回家</a></p>
                    </li>
                    <li>
                        <div  class="list_tu">
                            <a href="#">
                                <img :src="doglist[1].img1" alt="">
                            </a>
                        </div>
                        <h6><a href="">{{doglist[1].pname}}</a></h6>
                        <p>简介: <span>{{doglist[1].intro}}</span></p>
                        <p class="bh">编号：<span>{{doglist[1].ser_id}}</span></p>
                        <p><a href="">带TA回家</a></p>
                    </li>
                    <li>
                        <div  class="list_tu">
                            <a href="#">
                                <img :src="doglist[0].img1" alt="">
                            </a>
                        </div>
                        <h6><a href="">{{doglist[0].pname}}</a></h6>
                        <p>简介: <span>{{doglist[0].intro}}</span></p>
                        <p class="bh">编号：<span>{{doglist[0].ser_id}}</span></p>
                        <p><a href="">带TA回家</a></p>
                    </li>
                </ul>
            </div>
        </div>
        <div style="clear:both"></div>
        <!--喵喵-->
        <div class="home-module">
            <div class="title"><hr class="hrL"><h3>喵星人专区</h3><hr class="hrR"></div>
            <div class="pet_top">
                <img src="img/index/miao_datu.jpg" alt="">
                <a href="javascript:;" name="wang_datu">查看更多</a>
                <div class="box_yy"></div>
            </div>
            <div class="home-module_list">
                 <ul>
                     <li v-if="catlist[0]" v-for="(item,index) in catlist" :key="item.index">
                        <div class="list_tu">
                        <a href="javascript:;">
                            <img :src="item.img1" alt="">
                        </a>
                        </div>
                        <h6><a href="">{{item.pname}}</a></h6>
                        <p>简介: <span>{{item.intro}}</span></p>
                        <p class="bh">编号：<span>{{item.ser_id}}</span></p>
                        <p><a href="">带TA回家</a></p>
                     </li>
                </ul>
            </div>
        </div>
        <div style="clear:both"></div>
        <!--小宠-->
        <div class="home-module">
            <div class="title"><hr class="hrL"><h3>☆花鸟鱼虫☆</h3><hr class="hrR"></div>
            <div class="pet_top">
                <img src="img/index/else_datu.jpg" alt="">
                <a href="javascript:;" name="wang_datu">查看更多</a>
                <div class="box_yy"></div>
            </div>
            <div class="home-module_list">
                <ul>
                    <li v-if="catlist[0]" v-for="(item,index) in otherlist" :key="item.index">
                        <div class="list_tu">
                        <a href="javascript:;">
                            <img :src="item.img1" alt="">
                        </a>
                        </div>
                        <h6><a href="">{{item.pname}}</a></h6>
                        <p>简介: <span>{{item.intro}}</span></p>
                        <p class="bh">编号：<span>{{item.ser_id}}</span></p>
                        <p><a href="">带TA回家</a></p>
                    </li>
                </ul>
            </div>
        </div>
        <div style="clear:both"></div>
    
        <!--领养秀-->
        <div id="show_love">
            <div class="show_title"><hr class=""><h3 class="">☆秀恩爱☆</h3><hr class=""></div>
            <ul class="show">
                <li class="show1">
                    <!--<div><img src="img/index/show(1).jpg" alt=""></div>-->
                    <div>
                        <br>
                        <span>用户:Sim***</span>
                        <h4> <span class="jiantou">︽</span> 心情寄语 <span class="jiantou">︽</span></h4>
                        <p><span>&nbsp;&nbsp;</span>I am from Spain and I am very happy to adopt my baby in Winting!Thank you for Winting such a good platform. Thank you very much!
                        </p>
                    </div>
                </li>
                <li class="show2">
                    <div>
                        <br>
                        <span>用户:无所谓***</span>
                        <h4> <span class="jiantou">︽</span> 心情寄语 <span class="jiantou">︽</span></h4>
                        <p><span>&nbsp;&nbsp;</span>我是一个非常喜欢宠物的女生,,有一天无意间发现了waiting宠物领养分享的公益网站,
                            看这个狗狗很可怜无人喂养,好心疼,就把它领回了家,给它洗了个澡.给它取了个名字
                            叫"加加".我们都爱美好的事物，爱生命，这些都是人的本能。狗狗和猫咪都是人类的好朋友，
                            看到这些可怜的生灵流浪在外，我们真的应该做点什么。流浪动物也是生命，也值得被爱，
                        </p>
                    </div>
                </li>
                <li class="show3">
                    <div>
                        <br>
                        <span>用户:风雨s****</span>
                        <h4> <span class="jiantou">︽</span> 心情寄语 <span class="jiantou">︽</span></h4>
                        <p><span>&nbsp;&nbsp;</span>越来越多的关于流浪动物的公益活动正在被发起，也许我们还无法立刻救助所有的流浪动物，
                            但是我可以呼吁发声，希望引起更多的人去关注流浪动物的生存问题,感谢Wiating这个平台。
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</div>    
</template>
<script>
    export default {
        data() {
            return {
                doglist:[],
                catlist:[],
                otherlist:[],
                show_love:[]
            }
        },
        created() {
           this.getdog(),
           this.getcat(),
           this.getother(),
           this.showlove()
        },
        methods: {
            getdog(){
                    this.axios.get('http://127.0.0.1:3000/pet/dog').then(res=>{
                  this.doglist=res.data;
               })
            },
            getcat(){
                this.axios.get('http://127.0.0.1:3000/pet/cat').then(res=>{
                  this.catlist=res.data;
               })
            },
            getother(){
                this.axios.get('http://127.0.0.1:3000/pet/other').then(res=>{
                  this.otherlist=res.data;
               })
            },
            showlove(){
                this.axios.get('http://127.0.0.1:3000/pet/show').then(res=>{
                  this. show_love=res.data;
               })
            },
            toAdoption(){
                this.$router.push({path: '/adoption'})
            },
            toAddPet(){
                this.$router.push({path: '/addpet'})
            }
        },
        mounted() {
/*秀恩爱动画部分开始*/

$($("#show_love .show li").mouseenter(function(){
    var $li=$(this);
    $li.children().css("top","0");
    $li.find("h4").find("span").html("︾");
})
    .mouseleave(function(){
    var $li=$(this);
    $li.find("h4").find("span").html("︽");
    $li.children().css("top","320px");
    })
)
/*秀恩爱动画部分结束*/

//--------------------侧面导航栏---------------------
// 滚动条滚动到一定位置，侧边导航固定在浏览器的左上20px，且侧边导航滚动高亮
/*var subT=$(".petMain").offset().top;//获取ul距离顶部距离
var subH=$(".petMain").height();//获取ul的高度
var objH=$(".home-module").height();//右侧一块的高度662
var mainT=$("#wangwang").offset().top;//第一个汪汪到顶部距离
const mainH= $("#wangwang").eq(0).outerHeight(true);//获取狗/猫/模块的高度*/
$(window).on("scroll",function () {
    var top=pageYOffset;//页面Y轴向下滚动的距离

    $(".petMain li").removeClass("bgc");
    if(top<699)
        $(".petMain").removeClass("subshow");
    else if(top>700 && top<1150){
        $(".petMain").addClass("subshow");
        $("div.box").css("top",0);
        $(".petMain li:nth-child(1)").addClass("bgc");
    }
    else if(top>1151 && top<1960){
        $("div.box").css("top",119);
        $(".petMain li:nth-child(2)").addClass("bgc");
    }
    else if(top>1961 && top<2798){
        $("div.box").css("top",119*2);
        $(".petMain li:nth-child(3)").addClass("bgc");}
    else{
        $("div.box").css("top",119*3);
        $(".petMain li:nth-child(4)").addClass("bgc");}
});

$(".petMain").on("click","li",function(e){
    e.preventDefault();
    var $li=$(this);
    var i=$li.index();
    var top=119*i;
    $("div.box").css({top});
    var now=800+(700*i);
    $(document).scrollTop(now);
})
},
    }
</script>
<style scoped>
.pc-banner{
    margin-top: 30px;
}
#banner_bottom{
width: 100%;
height: 100px;
box-shadow: 0px 0px 60px #c0c0c0;
background:#ff6735;
position: relative;
}
#banner_bottom div{
	width: 177px;
}

#banner_bottom div{
	width: 460px;
	height: 100px;
	margin: 20px auto;
	line-height: 100px;
}
#banner_bottom div a{
	display: inline-block;
	width: 130px;height: 50px;
	margin: 25px 0px;
	color: #fff;
	line-height: 50px;
	border-radius: 7px;
	background:rgba(0,0,0,0.5);
	font-size: 1.2rem;
	padding: 0 17px;
}
#banner_bottom div a:first-child{
	margin-right: 90px;
}
#banner_bottom div a:hover{
	background:rgba(255,0,0,0.5);
}
    /*左侧导航栏*/
.petMain{
	position:fixed;
	display: none;
	width:20px;
	height:800px;
	top: 230px;
	left:20px;
}
.petMain:hover{
	cursor:pointer;
}
.subshow{display:block}
.petMain li{
	width: 27px;
	height: 120px;
	writing-mode:tb;
	padding-right:10px;
	text-align: center;
	background: white;
	border-right:2px solid #f4a431;
	font-family:STXingkai ;
	font-size: 1.3rem;
	color: #ff6735;
	border-radius: 10px 0 0 10px;
}

.bgc{
	color: #fff !important;
	background: #ff6735 !important;
}
.box{
	width:35px; height:118px;
	border:2px solid #f4a431;
	border-right:2px solid #fff;
	position:absolute; top:0px; left:0px;
	transition: all .2s linear;
	border-radius: 10px 0 0 10px;
}
/*左侧导航栏媒体查询*/
@media screen and (max-width:1240px){
	.petMain {
		display: none;
	}
}
/* 中间导航部分 */
.connect_box{
	margin:35px auto 0;
	width:1100px;
	position: relative;
}

.connect_box .home_module a:first-child{
	margin-left:57px;
}

.connect_box .home_module a span{
	color:#684029;
	font-size:18px;
	line-height:100px;
	height:100px;
	display:inline-block;
	width:57px;
	text-align:center;
	position:relative;
	right:80px;
}
.connect_box .home_module a span:hover{
	color:#BB9772;
}
.connect_box .home_module a img{
	vertical-align:bottom;
}
/*猫狗标题通用*/
.title{width: 100%;height:80px;margin-top:60px}
.title h3{
	width:20%;
	display: inline-block;
	text-align: center;
	position: absolute;
	top: 10px;
	left:5%;
	color:#ff6735;
	font-family:STHupo;
	font-size:2rem;
font-weight: normal}
.title hr{
	position: absolute;
	top: 30px;
	background: #ff6735;
	border: 1px solid #ff6735;
}
.title .hrL{width: 5%;color: #ff6735;}
.title .hrR{width: 75%;right: 0px;}

/* 汪汪 */
.pet_top{
	border-radius: 10px;
	overflow: hidden;
	margin-bottom:20px;
	z-index: -1;
}
.pet_top:hover .box_yy{
	width: 1100px;height: 250px;
	position: absolute;
	top:80px;left: 0;
	background: rgba(0,0,0,0.4);
	z-index: 0;
	transition: 1s;
}
.home-module{
	width:1100px;
	margin:0 auto;
	margin-top:30px;
	position: relative;
	height:662px;
}
.home-module .pet_top a{
	display: block;
	width: 100px;height: 40px;
	position: absolute;
	top: 260px;
	right: 35px;
	border-radius: 10px;
	text-align: center;
	line-height:40px;
	color: #684029;
	font-size: 18px;
	background:rgba(244,164,49,0.5);
	z-index:99;
}
.home-module .pet_top:hover a{
	background:rgba(244,164,49,0.9);
	box-shadow: 2px 2px  8px #888888;
}

.home-module div.home-module_list ul li{
	float:left;
	margin-right:16px;
	border-radius: 10px;
    height: 330px;
    box-shadow: 0px 0px  1px #888888;
}
.home-module div.home-module_list ul li:last-child{
	margin-right:0px;
}
/*li中的图片*/
.home-module_list div.list_tu{
	width: 260px;height: 230px;
	overflow: hidden;
	border-radius: 10px;
	border: 1px solid transparent;
}
.home-module_list .list_tu img{
	width: 263px;
	height: 230px;
	background-repeat:no-repeat;
	background-position:center center;
	transition: all ease 0.7s;
	background-size:cover;
}
.home-module_list ul li:hover{
	box-shadow: 2px 2px  8px #888888;
}

.home-module_list ul li:hover img{
	background-position:50% 50%;
	transform:scale(1.2);
}

/* 图片下文字 */
.home-module .home-module_list ul li h6 a{
	font-size:22px;
	color:#684029;
}
.home-module .home-module_list ul li p{
    text-align: left;
    margin-left: 5px;
    overflow: hidden;
}

.home-module .home-module_list ul li p a{
	font-size:16px;
	color:#684029;
}
.home-module .home-module_list ul li p:last-child{
	text-align:center;
	width:90px;
	border:1px solid transparent;
	background:#f4a431;
	border-radius:10px;
	margin-left:165px;
}
.bh span{
	font-size:14px;
    color:#a1a1a1;
}
/*--------------------领养秀开始----------------------*/
#show_love{
	width: 1100px;
	height:500px;
	margin:50px auto;
	background:#fff;
	position: relative;
}
#show_love{
	font-size:1rem;
	font-family:新宋体;
}
#show_love .show_title{
	width: 100%;
}
#show_love h3{
	width:21%;
	display: inline-block;
	text-align: center;
	position: absolute;
	top:10px;
	left: 40%;
	color:#ff6735;
	font-family:华文琥珀;
	font-size:2rem;
}
#show_love>.show_title hr{
	width:40%;
	position: absolute;
	background: #ff6735;
	border: 1px solid #ff6735;
}
#show_love hr:first-child{
	top: 30px;
}
#show_love hr:last-child{
	top: 30px;
	left: 60%;
 }
#show_love .show li{
	width: 302px;
	height: 400px;
	float: left;
	margin: 100px 30px 50px 30px;
	box-shadow: 0 0 50px -20px #ff6735;
	border-radius: 5px;
	overflow: hidden;
	border: 1px solid #ff6735;
	position: relative;
	transition: 1s;

}
#show_love .show li.show1{
	background: url("../../public/img/index/show1.jpg");
	background-repeat: no-repeat;
	background-position:50% 50% ;
	background-size:488px 400px ;
}
#show_love .show li.show2{
	background: url("../../public/img/index/show2.jpg");
	background-repeat: no-repeat;
	background-position:50% 50% ;
	background-size:488px 400px ;
}
#show_love .show li.show3{
	background: url("../../public/img/index/show3.jpg");
	background-repeat: no-repeat;
	background-position:50% 50% ;
	background-size:488px 400px ;
}
#show_love .show div{
	width: 100%;
	height:400px;
	position:absolute;
	top:320px;
	left: 0px;
	background: rgba(0,0,0,0.6);
	color: white;
	transition:750ms;
}
#show_love .show span{
	font-weight: bold;
}
#show_love .show h4{
	margin-top:10px;
	text-align: center;
}
#show_love .show p{
	margin:15px 20px;
	overflow: hidden;
	font-size: 1.2rem;
	height:auto;
	transition: 0.5s;
}
#show_love .show li:hover{
	transition:all .2s linear;

	box-shadow: 0px 0px 4px 4px #ff6735;
}
/*--------------------领养秀结束----------------------*/
</style>