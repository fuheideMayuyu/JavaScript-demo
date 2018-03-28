window.onload = function () {
  // 这里只能通过 id 来取dom，否则会报错
  var _oc = document.getElementById("can");
      // getContext:canvas画布环境属性
  var _og = _oc.getContext( "2d" );
  var _inp = document.getElementsByTagName("input");

  _inp[0]=onclick=function(){
    // _oc.style.display="block"
  }
  _inp[1].onclick = function () {
    _og.clearRect(0, 0, _oc.width, _oc.height)
  }
  _oc.onmousedown = function (ev) {
    var ev = ev || event;
    _og.moveTo(ev.clientX - _oc.offsetLeft, ev.clientY - _oc.offsetTop);
    document.onmousemove = function (ev) {
      var ev = ev || event;
      _og.lineTo(ev.clientX - _oc.offsetLeft, ev.clientY - _oc.offsetTop);
      _og.stroke();
    }
    document.onmouseup = function () {
      document.onmousedown = document.onmousemove = null;
    }
  }
}
