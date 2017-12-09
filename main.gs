function GomidayLineGAS() {
  /*各曜日の第n曜日がなんのゴミの日か配列のn-1番目に入れる。
  以下は例なのであなたの地域のものに修正してください。*/
  var monday = [,,,,,];
  var tuesday = ['燃やすごみ','燃やすごみ','燃やすごみ','燃やすごみ','燃やすごみ'];
  var wednesday = ['資源物','資源物','資源物','資源物','資源物'];
  var thursday = [,'燃やさないごみ',,'燃やさないごみ',];
  var friday = ['燃やすごみ','燃やすごみ','燃やすごみ','燃やすごみ','燃やすごみ'];
  var saturday = ['','','','',''];
  var sunday = ['','','','',''];

　//曜日は0が日曜日
  var weekArray = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
  
  var　today　= new Date();
  var　tomorrow　= new Date();
  tomorrow.setDate(today.getDate() + 1);
  var tomorrowDay = tomorrow.getDate();
  var tomorrowDoW = tomorrow.getDay();
  
  //明日が第何何曜日か計算
  var thisMonthFirstDay = new Date(tomorrow.getFullYear(),tomorrow.getMonth(),1);
  var thisMonthFirstDayDoW = thisMonthFirstDay.getDay();
  var doWDifference = Math.abs(thisMonthFirstDayDoW-tomorrowDoW);  
  var whatNumberOfDoW =(tomorrowDay + doWDifference - ((tomorrowDay + doWDifference) % 7)) / 7 ;
  
  if (weekArray[tomorrowDoW][whatNumberOfDoW]){
  var message = '明日は' + weekArray[tomorrowDoW][whatNumberOfDoW]　+ 'の日ピカ！';
    pushMessageSend(message);

  }
  Logger.log(message);
  
}

