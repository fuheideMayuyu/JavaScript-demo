window.onload = function () {
  var box = document.getElementById("box");
    // clientWidth:对象可见的宽度，不包滚动条等边线，会随窗口的显示大小改变
  var clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
  var clientHeigh = document.body.clientHeight || document.documentElement.clientHeight;
  var timer = null;

  document.onkeydown=function(ev){
    //这一步是为了更好的兼容各种浏览器
    var ev=ev||event;
    //清除时间间隔，使小球操作变得流畅
    clearInterval(timer);
    //setInterval:操作小球
    // setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
    timer=setInterval(function(){
      // offsetLeft,offsetTop:相对于最近的祖先定位元素
      //减10表示每次移动的距离
      switch (ev.keyCode) {
        case 37:
          if(box.offsetLeft>0){
            box.style.left= box.offsetLeft- 10 +"px";
          }
          break;
        case 38:
          if( box.offsetTop>0){
            box.style.top= box.offsetTop- 10 +"px";
          }
          break;
        case 39:
          if( box.offsetLeft<clientWidth-box.offsetWidth){
            box.style.left= box.offsetLeft+ 10 +"px";
          }
          break;
        case 40:
          if( box.offsetTop<clientHeigh-box.offsetHeight){
            box.style.top= box.offsetTop+ 10 +"px";
          }
          break;
      }
    },10);
  }
  document.onkeyup=function(){
    clearInterval(timer)
  }
}