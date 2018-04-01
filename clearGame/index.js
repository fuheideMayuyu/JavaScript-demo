function $(v) {
  if (typeof v === 'function') {
    window.onload = v;
  } else if (typeof v === 'string') {
    //z这一步输出的其实也是一个对象
    return document.getElementById(v);
  } else if (typeof v === 'object') {
    return v;
  }
}

function getStyle(obj, attr) {
  // currentStyle:该属性只兼容IE,
  // 不兼容火狐和谷歌,getComputedStyle:该属性是兼容火狐谷歌,不兼容IE
  //两个都是获取css样式的方法
  return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

function doMove (obj, attr, dir, target, endFn) {
  // parseInt() 函数可解析一个字符串，并返回一个整数,数字以外包括小数点都不识别
  dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;

  //清除定时器，停止执行
  clearInterval(obj.timer);

  obj.timer = setInterval(function () {
    var speed = parseInt(getStyle(obj, attr)) + dir;
    if (speed > target && dir > 0 || speed < target && dir < 0) {
      speed = target;
    }
    obj.style[attr] = speed + 'px';
    if (speed == target) {
      clearInterval(obj.timer);
      	/*
			if ( endFn ) {
				endFn();
			}
			*/
      endFn && endFn();
    }
  }, 30);
}

function shake(obj, attr, endFn) {
  var pos = parseInt(getStyle(obj, attr)),
    arr = [],
    num = 0,
    timer = null;

  for (var i = 20; i > 0; i -= 2) {
    arr.push(i, -i)
  }
  arr.push(0);
  if (obj.onOff !== true) {
    clearInterval(obj.shake);
    obj.shake = setInterval(function () {
      obj.onOff = true;
      obj.style[attr] = pos + arr[arr] + 'px';
      num++;
      if (num === arr.length) {
        clearInterval(obj.shake);
        endFn && endFn();
        obj.onOff = false;
      }
    }, 50)
  }
}

function hide(obj, cy, sec, endFn) {
  var timer = null,
    // opacity:透明度
    fadeNum = Number(getStyle(obj, 'opacity') * 100),
    fadeNum1 = Number(getStyle(obj, 'opacity'));

  timer = seInterval(function () {
    fadeNum -= 10;
    faddeNum1 -= 0.1;
    // filter:过滤
    obj.style.filter = "alpha(opacity" + fadeNum + ")";
    obj.style['-moz-opacity'] = fadeNum1;
    obj.style['-webkit-opacity'] = fadeNum1;
    obj.style.opacity = fadeNum1;
    if (fadeNum == cy * 100 || fadeNum1 == cy) {
        clearInterval(timer);
        endFn && endFn();
    }
  }, sec);
}

function out(obj, cy, sec, endFn) {
  var timer = null;
  var fadeNum = Number(getStyle(obj, 'opacity') * 100);
  var fadeNum1 = Number(getStyle(obj, 'opacity'));
  timer = setInterval(function () {
    fadeNum += 10;
    fadeNum1 += 0.1;
    obj.style.filter = "alpha(opacity=" + fadeNum + ")";
    obj.style['-moz-opacity'] = fadeNum1;
    obj.style['-webkit-opacity'] = fadeNum1;
    obj.style.opacity = fadeNum1;
    if (fadeNum == cy * 100 || fadeNum1 == cy) {
      clearInterval(timer);
      endFn && endFn();
    }
  }, sec);
}

$(function () {
  var aBtn = $('top').getElementsByTagName('input')[0], //开始游戏
      aSpan = $('bom').getElementsByTagName('span'), //左边数字显示
      aDiv = $('bom').getElementsByTagName('div')[1], //文字div盒子
      aImg = $('bom').getElementsByTagName('img')[0], //d掉下来的图片
      arrImg = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png', 'img/7.png', 'img/8.png', 'img/9.png', 'img/10.png', 'img/11.png'],
      sdNum = 1,
      onOff = true; //游戏开关
  for (var i = 0; i < aSpan.length; i++) {
    aSpan[i].num = 0;
  }
  
  aBtn.onclick = function () {
    this.value = '游戏进行中...'; //点击游戏开始后改变文字
    this.disabled = true; //游戏开始后无法点击开始按钮
    var w = parseInt(getStyle(aDiv, 'width')); //获取图片移动宽度
        h = parseInt(getStyle(aDiv, 'height')) - 24; //获取图片移动高度并减去本身高度
    aImg.style.display = 'block'; //让QQ表情显示出来
    aotu();

    function aotu() {
      onOff = true; //如何为 true 表示QQ表情落到最下面时会失分
      //round:循环
      var n = Math.round(Math.random() * (arrImg.length - 1)); //随机显示表情
      var x = Math.round(Math.random() * (w - 24)); //表情随机显示在屏幕上
      aImg.src = arrImg[n];
      aImg.style.left = x + 'px';
      doMove(aImg, 'top', sdNum, h, function () { //落下去的时候
        if (onOff == true) {
          shake($('bom'), 'top',function () { //掉下去的时候抖动窗口
              aImg.style.top = '0px'; //让QQ表情回到0px的位置
              aSpan[1].num++; //失分加1
              aSpan[1].innerHTML = aSpan[1].num //修改分数的数字
              if (aSpan[1].num == 10) {
                aBtn.value = "开始游戏";
                aBtn.disabled = false; //开始按钮可以点击
                alert('游戏结束,您一共获得' + aSpan[0].num + '分');
                for (var i = 0; i < aSpan.length; i++) {
                  aSpan[i].num = 0; //得分和失分归零
                }
              } else {
                aotu();
              }
            });
        }
      });
    }
    
    aImg.onclick = function () {
      onOff = false;
      aImg.src = 'img/qq.png';
      sdNum = sdNum + 0.5;
      shake(aImg, 'left', function () {
        aImg.style.top = '0px';
        aSpan[0].num++;
        aSpan[0].innerHTML = aSpan[0].num;
        aotu();
      })
    }
  }
})

var a 
console.log(a)