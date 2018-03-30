function cbChoose() {
  var checkAll = document.getElementById("checkAll"),
    checkReverse = document.getElementById("checkReverse"),
    input = document.getElementsByTagName("input"),
    label = document.getElementsByTagName("label")[0];

  function isCheckAll() {
    // n的作用是在没有选任何一个的情况下，可以实现全选或反选
    for (var i = 1, n = 0; i < input.length; i++) {
      input[i].checked && n++;
    }
    input[0].checked = n == input.length - 1;
    label.innerHTML = input[0].checked ? "全选" : "全不选"
  }
  checkAll.onclick = function () {
    for (var i = 1; i < input.length; i++) {
      input[i].checked = this.checked;
    }
    isCheckAll();
  }
  // 反选
  checkReverse.onclick = function () {
    for (var i = 1; i < input.length; i++) {
      input[i].checked=!input[i].checked;    
    }
    isCheckAll()
  }
  //根据复选框个数更新全选框状态
  for(var i=1;i<input.length;i++){
    input[i].onclick=function(){
      isCheckAll();
    }
  }
}
cbChoose();