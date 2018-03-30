function changeInfo() {
  var oUl = document.getElementById("header"),
    oCon = document.getElementById("container"),
    oDiv = document.getElementById("listContent"),
    oTip = document.getElementById("tips"),
    oTips = document.getElementById("tipsContent");

  for (var i = 0; i < data.length; i++) {
    //插入一个li
    oUl.innerHTML += "<li>" + data[i].name + "</li>"
  }
  
  var lis = oUl.getElementsByTagName("li");
  //默认第一个为选中状态
  lis[0].className = "sec";

  for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onclick = function () {
      for (var j = 0; j < lis.length; j++) {
        lis[j].className = "";
        //插入两个空元素
        oDiv.innerHTML = "";
        oTips.innerHTML = ""
      }
      this.className = "sec";
      fun(data[this.index]);
    }
  }
  //设置信息列表
  fun(data[0])

  function fun(data) {
    for (var i = 0; i < data.list.length; i++) {
      // createElement() 方法可创建元素节点
      var ul = document.createElement("ul"),
        li = document.createElement("li"),
        a = document.createElement("a");
      a.innerHTML = data.list[i].title;
      a.href = "javascript:";
      li.appendChild(a);
      ul.appendChild(li);
      oDiv.appendChild(ul);
      a.index = i;
      var h4 = document.createElement('h4');
      var lis1 = document.createElement('li');
      lis1.className = 'col';
      var lis2 = document.createElement('li');
      lis2.className = 'col';
      var lis3 = document.createElement('li');
      lis3.className = 'col';
      var lis4 = document.createElement('li');
      lis4.className = 'col';
      var lis5 = document.createElement('li');
      lis5.className = 'col';
      var lis6 = document.createElement('li');
      lis6.className = 'col';
      a.onmouseover = function () {
        oTip.style.display = "block";
        oTip.style.left = oCon.offsetLeft + offsetWidth + 10 + 'px';
        oTip.style.top = this.offsetTop + this.scrollTop + 'px';
        h4.innerHTML = data.list[this.index].company;
        lis1.innerHTML = data.list[this.index].recruitingNumber;
        lis2.innerHTML = data.list[this.index].workingLocation;
        lis3.innerHTML = data.list[this.index].workExperience;
        lis4.innerHTML = data.list[this.index].education;
        lis5.innerHTML = data.list[this.index].wage;
        lis6.innerHTML = data.list[this.index].addDate;
        oTips.appendChild(h4);
        oTips.appendChild(lis1);
        oTips.appendChild(lis2);
        oTips.appendChild(lis3);
        oTips.appendChild(lis4);
        oTips.appendChild(lis5);
        oTips.appendChild(lis6);
      }
      li.onmouseout = function () {
        oTip.style.display = "none"
      }
    }
  }
}
changeInfo();
