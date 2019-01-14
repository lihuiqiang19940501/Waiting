jQuery.fn.tabs=function(){
  var $parent=this;
  //1.侵入
  //获取ul li
  $parent.children(':first-child').addClass('.tabs').find('li>a').attr('data-toggle','tab').parent().first().addClass('active');
  //获取div
  $parent.children(":last-child")//容器div
        .addClass("container")
        .children(":first-child")
        .addClass("active")
  //2.绑定
  $parent.children(":first-child")
  .on("click","[data-toggle=tab]",function(e){
      e.preventDefault();
      var $tar=$(e.target);
    if(!$tar.parent().is(".active")){
      $tar.parent().addClass("active")
        .siblings().removeClass("active");
      var id=$tar.attr("href");
      $(id).addClass("active")
        .siblings().removeClass("active");
    }
  })
}