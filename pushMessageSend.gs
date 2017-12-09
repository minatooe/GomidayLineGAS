function pushMessageSend(message) {
  var url = 'https://api.line.me/v2/bot/message/push';
  var CHANNEL_TOKEN ='push通知するチャンネルのトークン';
  
  var spreadSheetId ='このスクリプトを入れるスプレッドシートのID';
  var sheetName ='userId';
  var spreadSheet = SpreadsheetApp.openById(spreadSheetId);
  var targetSheet = spreadSheet.getSheetByName(sheetName);

  var userIdArray = targetSheet.getSheetValues(1,1,50,1);
  for(var i = 1; i < userIdArray.length - 1 ; i++){
    var to =  userIdArray[i].toString();
    if (to == ''){
    return true;}
    
    Logger.log(to);
    Logger.log(i);
        
    var headers = {
      "Content-Type" : "application/json; charset=UTF-8",
      'Authorization': 'Bearer ' + CHANNEL_TOKEN,
    };
    
    var postData = {
      "to" : to,
      "messages" : [
        {
          'type':'text',
          'text':message,
        }
      ]
    };
    
    var options = {
      "method" : "post",
      "headers" : headers,
      "payload" : JSON.stringify(postData)
    };
    
  UrlFetchApp.fetch(url, options); 
  }
}

    