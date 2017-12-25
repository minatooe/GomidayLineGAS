function pushMessageSend(message) {
  var url = 'https://api.line.me/v2/bot/message/push';
  var CHANNEL_TOKEN ='{あなたのBOTのチャンネルトークン}';
  var drive = DriveApp.getFolderById('{スクリプトを仕込んだスプレッドシートのあるフォルダID}');
  var fileName = 'userId.json';
  var contentType = 'application/json';
  var userIdJsonFiles = drive.getFilesByName(fileName);
  var isUserIdJsonFile = userIdJsonFiles.hasNext();
  var userIdJson;
  var userIdJsonFile = userIdJsonFiles.next();
  var userIdJsonFileBlob = userIdJsonFile.getBlob();
  var userIdJsonText = userIdJsonFileBlob.getDataAsString('utf-8');
  userIdJson = JSON.parse(userIdJsonText);
  for(var i = 0; i <= userIdJson.userId.length-1 ; i++){
    var to =  userIdJson.userId[i].toString();
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

    
    
    
    
    
    
    
    
    
    
    
    
    


