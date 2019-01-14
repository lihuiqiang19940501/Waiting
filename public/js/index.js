//轮播图
/*$(function(){
    function fn() {
        var img=banner.getElementsByClassName("show")[0];
        img.className="hide";
        if(img.nextElementSibling)
            img.nextElementSibling.className="show";
        else
            img.parentNode.children[0].className="show";
    }
    var timer=setInterval(fn,6000);
    //当鼠标进入暂停定时器
    banner.onmouseover=function(){
        clearInterval(timer)
    }
    banner.onmouseout=function(){
        timer=setInterval(fn,3000);
    }
})*/
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
    console.log(top);

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