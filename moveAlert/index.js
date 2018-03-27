window.onload = function () {
  var _login = document.getElementById("login"),
    _btn = document.getElementById("btn"),
    _head = document.getElementById("head"),
    _close = this.document.getElementById("close");
  _btn.onclick = function () {
    // popAlert:弹出提示框
    popAlert(login, head);
  }
  //点击关闭按钮
  _close.onclick = function () {
    login.style.display = "none";
    //没有下面这一步，那么点击关闭之后无法再弹出弹框
    // layer:弹出层
    document.body.removeChild(layer);
  }
}
//判断元素是否有class
// ele:Element,cls:class
function hasClass(ele, cls) {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
//为指定元素添加class
function addClass(ele, cls) {
  if (!this.hasClass(ele, cls)) ele.className += "" + cls;
}
//删除指定元素的class,replace:替代
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, "")
  }
}
//如果存在(不存在)，就删除(添加)一个class
function toggleClass(ele, cls) {
  if (hasClass(ele, cls)) {
    removeClass(ele, cls)
  } else {
    addClass(ele, cls)
  }
}
//弹出框
function popAlert(obj, head) {
  // 判断浏览器是否为IE
  var isIE = (document.all) ? true : false,
    isIE6 = isIE && ([/MSIE(\d)\.0/i.exec(navigator.userAgent)][0][1] == 6);
  //获取弹出主体
  obj.style.position = !isIE6 ? "fixed" : "absolute";
  obj.style.zIndex = "999999";
  obj.style.display = "block";
  obj.style.left = obj.style.top = "50%";
  obj.style.marginTop = -obj.offsetHeight / 2 + "px";
  obj.style.marginLeft = -obj.offsetWidth / 2 + "px";
  //创建灰色背景
  var layer = document.createElement("div");
  layer.id = "layer";
  layer.style.width = layer.style.height = "100%";
  layer.style.position = !isIE6 ? "fixed" : absolute;
  layer.style.top = layer.style.left = 0;
  layer.style.backgroundColor = "#888";
  layer.style.zIndex = "999998";
  layer.style.opacity = "0.6";
  document.body.appendChild(layer);
  //按住鼠标可以移动head
  alertMove(head);
  //弹窗主体在IE下的样式布局
  function alerIeStyle() {
    obj.style.width = Math.max(document.documentElement.scrollWidth,
      document.documentElement.clientWidth) + "px";
    obj.style.height = Math.max(document.documentElement.scrollWidth,
      document.documentElement.clientHeight) + "px"
  }
  //灰色遮罩在IE下的样式布局
  function layerIeStyle() {
    layer.style.marginTop = document.documentElement.scrollTop -
      layer.offsetHeight / 2 + "px";
    layer.style.marginLeft = document.documentElement.scrollLeft -
      layer.offsetWidth / 2 + "px";
  }
  if (isIE) {
    layer.style.filter = "alpha(opacity=60)";
  }
  if (isIE6) {
    layerIeStyle();
    alerIeStyle();
    // attachEvent:指派事件执行，onscroll：页面滚动时触发，onresize：监听div大小的改变
    window.attachEvent("onscroll", alertIestyle);
    window.attachEvent("onresize", layerIestyle);
  }

  function alertMove(obj) {
    var onOff = false,
      l = 0,
      t = 0,
      x = 0,
      y = 0,
      parent = obj.parentNode;
    //按下鼠标
    // ev.clientX:鼠标位置
    // parseInt:取整，parent:父元素
    obj.onmousedown = function (event) {
      var ev = event || window.event,
          x = ev.clientX,
          y = ev.clientY,
          l = parseInt(parent.offsetLeft),
          t = parseInt(parent.offsetTop),
          onOff = true;
          obj.style.cursor = "move";
      //移动鼠标
      document.onmousemove=function(event){
        if(onOff){
          var ev=event||window.event;
          parent.style.left=l-(x-ev.clientX)+"px";
          parent.style.top=t-(y-ev.clientY)+"px";
          parent.style.marginTop="";
          parent.style.marginLeft="";
        }
      }
      //抬起鼠标
      document.onmouseup=function(){
        if(onOff){
          onOff=false;
        }
      }
    }
  }
}