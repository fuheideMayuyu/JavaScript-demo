window.onload = function () {
  var oUl = document.getElementById("list");
  var oLi = oUl.getElementsByTagName("li");
  var inp1 = document.getElementById("inp1");
  var inp2 = document.getElementById("inp2");
  var inp3 = document.getElementById("inp3");
  //按下回车键发送消息
  inp1.onkeyup = function (ev) {
    var ev = ev || event;
    if (this.value != "") {
      //检测是否按下enter键
      if (ev.keyCode == 13) {
        addInfo();
      }
    }
  }
  //按下留言按钮发送消息
  inp2.onclick = addInfo;
  //批量删除
  inp3.onclick = function () {
    for (var i = 0; i < oLi.length; i++) {
      if (!oLi[i].onOff) {
        oUl.removeChild(oLi[i]);
        i--;
      }
    }
  }

  function addInfo() {
    // createElement:创建元素节点
    var li = document.createElement("li");
    //判断输入框是否有内容
    if (inp1.value) {
      // innerHTML:插入内容
      li.innerHTML = inp1.value;
      // onOff:开关
      li.onOff = true;
      if (oUl.children[0]) {
        //在最前面插入一个新的节点
        oUl.insertBefore(li, oUl.children[0]);
      } else {
        oUl.appendChild(li);
      }
    } else {
      alter("请输入内容")
    }
    //点击隔行变色
    for (var i = 0; i < oLi.length; i++) {
      (function (j) {
        //鼠标移入变色
        oLi[j].onmouseover = function () {
          this.style.background = "#999";
          this.style.color = "#fff";
        }
        //鼠标移开颜色消失
        oLi[j].onmouseout = function () {
          this.style.background = "";
          this.style.color = "";
        }
        oLi[j].onclick = function () {
          if (j % 2 == 0) {
            this.style.background = "pink";
            oLi[j].onmouseout = function () {
              this.style.background = "pink";
            }
          } else {
            this.style.background = "#3c9";
            oLi[j].onmouseout = function () {
              this.style.background = "#3c9";
            }
          }
          this.onOff = !this.onOff
        }
      })(i)
    }
    //清空文本框消息
    inp1.value = "";
  }
}