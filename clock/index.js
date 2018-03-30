window.onload=function(){
  var aImag=document.getElementById("clock").getElementsByTagName("img");
      //获取当前时间
  var now=new Date(),
      //换算成时分秒
      prevTime = toZero(now.getHours())+toZero(now.getMinutes())+toZero(now.getSeconds()),
      nextTime="",
      arr=[],
      //  timer:定时器
      timer=null;

      for(var i=0;i<aImag.length;i++){
        //配置路径，选取图片,charAt() 方法可返回指定位置的字符
        aImag[i].src="./images/"+prevTime.charAt(i)+".png"
      }
      //一秒执行一次
      setInterval(toChange,1000);

      function toChange(){
        var data=new Data();
        nextTime= toZero(now.getHours())+toZero(now.getMinutes())+toZero(now.getSeconds());
        toCom=(prevTime,nextTime);
        //当前时间更新到下一秒
        prevTime=nextTime;
      }
      function toCom(str1,str2){
        //每次清空数组里的数据
        arr=[];
        for(var i=0;i<str1.length;i++){
          if(str1.charAt(i)!=str2.charAt(i)){
            arr.push(i)
          }
        }
        startMove();
      }
      //上下翻转效果：利用数字高度减少到0再增加来实现
      function starMove(){
        //speed:速率
        var speed=-4;
        timer=setInterval(function(){
          for(var i=0;i<arr.length;i++){
            if(aImg[arr[i]].offsetHeight==0){
              speed=4;
              //加载下一张图片
              aImg[arr[i]].src = "./images/" + nextTime.charAt( arr[i] ) + ".png"
            }
            //改变数字高度默认向底线减少，所以手动将其向上移动
            aImg[arr[i]].style.height=aImg[arr[i]].offsetHeight + speed + "px";
            aImg[arr[i]].style.top = aImg[arr[i]].offsetHeight/2 - 18 + "px";
            if(aImg[arr[i]].offsetHeight==36){
              clearInterval(timer)
            }
          }
        },10)
      }
     		//补0操作，保证数字一直为六位数
			function toZero( num ){
				if( num<10 ){
					return num = "0" + num;
				}else{
					return num = num + "";
				}
			}
} 