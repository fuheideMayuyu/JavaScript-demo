function chk(flag){
  var i;
  for(i=1;i<=8;i++){
    if(i==flag){
      document.getElementById("b"+i).style.display="none";
    }
  }
}