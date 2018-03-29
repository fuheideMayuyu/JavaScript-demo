var stars=document.getElementById('stars');
var Obj=function(){}
// draw:画
Obj.prototype.drawStar=function(){
  //创建一个div节点
  var oDiv =document.createElement('div');
  oDiv.style.width='7px';
  oDiv.style.height='7px';
  oDiv.style.position='relative';
  //div的宽度不能超过屏幕宽度,random:随机数
  oDiv.style.left=Math.floor(document.body.clientWidth*Math.random())+'px';
  oDiv.style.top=Math.floor(document.body.clientHeight*Math.random())+'px';
  oDiv.style.overflow='hidden';
  //添加div到 stars_box元素上
  stars.appendChild(oDiv);
  var oStar=document.createElement('img');
  oStar.style.width='49px';
  oStar.style.height='7px';
  oStar.src='./images/star.png';
  oStar.style.position='absolute';
  oStar.style.top='0px';
  oDiv.appendChild(oStar);
  Play(oStar);
}
function Play(ele){
  var i=Math.floor(Math.random()*7);
  // setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
  var timer=setInterval(function(){
    if(i<7){
      ele.style.left=-i*7+'px';
      i++
    }else{
      i=0
    }
  },500)
}
for(var i=0;i<70;i++){
  var obj=new Obj();
  obj.drawStar();
}