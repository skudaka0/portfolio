
function saiten(){

  var seikai=0; //正解数を入れる変数
  
  //答えの番号を配列に入れる
  var trueAns = new Array(0,3,7,11,13);
  
  //正解のラジオボタンがチェックされているか確認
  for (i=0 ; i<5 ; i++)
  {
    if( document.radioB.elements[trueAns[i]].checked )
      seikai++;
  }
  
  alert("あなたは"+seikai*20+"点でした！");
}
