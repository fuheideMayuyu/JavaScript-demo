window.onload = function () {
  var list = document.getElementById("list"),
    hour = document.getElementById("hour"),
    mins = document.getElementById("min"),
    sec = document.getElementById("sec"),
    css = document.getElementById("css");

  var lis = "";

  for (var i = 0; i < 60; i++) {
    lis += "<li></li>";
    // innerHTML:插入内容（刻度）
    // li:nth-of-type(2):li下面的第二个元素
    css.innerHTML+="#list li:nth-of-type("+(i+1)+"){ transform:rotate( "+i*6+"deg );-moz-transform:rotate( "+i*6+"deg );-webkit-transform:rotate( "+i*6+"deg );-o-transform:rotate( "+i*6+"deg ); }";
  }
 
  list.innerHTML = lis;
  toTime();
  setInterval(toTime, 1000);

  function toTime() {
    var date = new Date(),
      s = date.getSeconds(),
      m = date.getMinutes() + s / 60,
      h = date.getHours() + m / 60;

    hour.style.WebkitTransform = " rotate( " + h * 30 + "deg ) ";
    mins.style.WebkitTransform = " rotate( " + m * 6 + "deg ) ";
    sec.style.WebkitTransform = " rotate( " + s * 6 + "deg ) ";
  }
}
