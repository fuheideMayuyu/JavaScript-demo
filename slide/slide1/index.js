var $a=$(".buttons a"),
$s=(".buttons span"),
cArr=["p7","p6","p5","p4","p3","p2","p1"];
var index=0;
$(".next").click(
  function(){
    nextImg()
  }
)
$(".prev").click(
  function(){
    prevImg()
  }
)

//上一张
function prevImg(){
  // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
  cArr.unshift(cArr[6]);
  // pop() 方法用于删除并返回数组的最后一个元素
  cArr.pop();
  //i是元素的索引，从0开始
  //e为当前处理的元素
  //each循环，当前处理的元素移除所有的class，然后添加数组索引 i 的class
  $("li").each(function(i,e){
    $(e).removeClass().addClass(cArr[i])
  })
  index--;
  if(index<0){
    index=6;
  }
  show();
}

//下一张
function nextImg(){
  cArr.push(cArr[0]);
  // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
  cArr.shift();
  $("li").each(function(i,e){
    $(e).removeClass().addClass(cArr[i]);
  })
  index++;
  if(index>6){
    index=0;
  }
  show();
}
//点击底下按钮切换
$a.each(function(){
  $(this).click(function(){
    //获取当前索引
    var myindex=$(this).index();
    var b=myindex-index;
    if(b==0){
      return;
    }else if(b>0){
    
    //  splice(0,b)的意思是从索引0开始,取出数量为b的数组
    //  因为每次点击之后数组都被改变了,所以当前显示的这个照片的索引才是0
    //  所以取出从索引0到b的数组,就是从原本的这个照片到需要点击的照片的数组
    //  这时候原本的数组也将这部分数组进行移除了
    //  再把移除的数组添加的原本的数组的后面
    var newArr=cArr.splice(0,b);
    // $.merge() 函数用于合并两个数组内容到第一个数组
    cArr=$.merge(cArr.newArr);
    $("li").each(function(i,e){
      $(e).removeClass().addClass(cArr[i]);
    })
    index=myindex;
    show();
    }else if(b<0){
      // reverse() 方法用于颠倒数组中元素的顺序
      cArr.reverse();
      var oldArr=cArr.splice(0,-b);
      cArr=$.merge(cArr,oldArr);
      cArr.reverse();
      $("li").each(function(i,e){
        $(e).removerClass().addClass(cArr[i]);
      })
      index=myIndex;
      show();
    }
  })
})
//在选中状态下，按钮改变颜色
function show(){
  $($s).eq(index).addClass("focus").parent().siblings().children().removeClass("focus");
}
//点击图片切换图片
$(document).on("click","p2",function(){
  prevImg();
  return false;
})
$(document).on("click","p4",function(){
  nextImg();
  return false;
})
//鼠标移入box时消除定时器
$(".box").mouseover(function(){
  clearInterval(timer);
})
$(".box").mouseleave(function(){
  timer=setInterval(nextImg,4000);
})
//进入页面开启定时器
timer=setInterval(nextImg,4000);