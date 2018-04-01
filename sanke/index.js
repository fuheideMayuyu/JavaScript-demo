//仿枚举
var Dir = {
  DirLeft: 1,
  DirTop: 2,
  DirRight: 3,
  DirBottom: 4
};
//全局变量
var map = {
  width: 900,
  height: 500
}
var box = {
  width: 50,
  height: 50
}
var nums = {
  hNum: map.width / box.width,
  vNum: map.height / box.height
}
var snake = [];
var other = [];
var dir = Dir.DirRight //默认蛇身向右移动
window.onload=function () {
  initMap();
  showFood();
  setInterval(snakeMove, 400);
  // onkeyup:只能输入数字
  document.onkeyup = function (e) {
    switch(e.keyCode){
			case 37:{if(dir==Dir.DirRight)break;else{dir=Dir.DirLeft;break;}}
			case 38:{if(dir==Dir.DirBottom)break;else{dir=Dir.DirTop;break;}}
			case 39:{if(dir==Dir.DirLeft)break;else{dir=Dir.DirRight;break;}}
			case 40:{if(dir==Dir.DirTop)break;else{dir=Dir.DirBottom;break;}}
			default:break;
		}
  }
}

//初始化地图
function initMap() {
  var mapTarget = document.getElementById('map');
  mapTarget.style.width = map.width + 'px';
  mapTarget.style.height = map.height + 'px';
  var newSpan = null;
  for (var i = 1; i < nums.hNum * nums.vNum; i++) {
    newSpan = document.createElement('span');
    newSpan.style.width = box.width + 'px';
    newSpan.style.height = box.height + 'px';
    newSpan.id = i;
    mapTarget.appendChild(newSpan);
    if (i <= 5) {
      newSpan.className = 'snake';
      snake.push(newSpan);
    } else {
      other.push(newSpan);
    }
  }
}
//随机产生一个食物
function showFood() {
  var index = Math.floor(Math.random() * other.length);
  other[index].className = 'food';
}

function snakeMove() {
  var headId; //重新计算蛇头的位置
  switch (dir) {
    case Dir.DirLeft:
      // parseInt:取整
      headId = parseInt(snake[snake.length - 1].id) - 1;
      if (headId % nums.hNum == 0) headId += nums.hNum;
      break;
    case Dir.DirTop:
      headId = parseInt(snake[snake.length - 1].id) - nums.hNum;
      if (headId < 1) headId += nums.hNum * nums.vNum;
      break;
    case Dir.DirRight:
      headId = parseInt(snake[snake.length - 1].id) + 1;
      if (headId % nums.hNum == 1) headId -= nums.hNum;
      break;
    case Dir.DirBottom:
      headId = parseInt(snake[snake.length - 1].id) + nums.hNum;
      if (headId > nums.hNum * nums.vNum) headId -= nums.hNum * nums.vNum;
      break;
    default:
      break;
  }
  var head = document.getElementById(headId);
  for (var i = 1; i < snake.length; i++) {
    if (headId == snake[i].id) {
      alert('Game Over!')
      //刷新页面
      window.location.href = window.location.href;
    }
  }
  var index;
  for (var i = 1; i < other.length; i++) {
    if (headId == other[i].id) {
      index = i;
      break;
    }
  }
  other.splice(index, 1);
  snake.push(head);
  if (head.className == 'food') {
    //吃到食物，原地不动，蛇头加1，再出现食物
    showFood();
  } else {
    snake[0].className = '';
    other.push(snake.shift());
  }
  head.className = 'snake';
}