function doPost(e) {
  var LineJsonData = JSON.parse(e.postData.contents).events[0];
  var eventType = LineJsonData.type;
  var userId =　LineJsonData.source.userId;
  var drive = DriveApp.getFolderById('{スクリプトを仕込んだスプレッドシートのあるフォルダID}');
  var fileName = 'userId.json';
  var contentType = 'application/json';
  var userIdJsonFiles = drive.getFilesByName(fileName);
  var isUserIdJsonFile = userIdJsonFiles.hasNext();
  var userIdJson;
  var idAppendFlag = false;
  
  if (eventType == 'follow') {
  
    if(isUserIdJsonFile){ //ユーザーIDを保存しているJSONがあったら読み込んで既知のIDじゃないかチェック。既知じゃなかったらidをappend。後の保存に備えて読み込んだら最後にJSONファイル消しとく。
      var userIdJsonFile = userIdJsonFiles.next()
      var userIdJsonFileBlob = userIdJsonFile.getBlob();
      var userIdJsonText = userIdJsonFileBlob.getDataAsString('utf-8');
      userIdJson = JSON.parse(userIdJsonText);
      
      userFlag = userIdJson.userId.indexOf(userId);
      Logger.log(userFlag);
      if (userFlag > 0){
      var appendPoint = userIdJson.userId.length;
      userIdJson.userId[appendPoint] = userId;
      }
      drive.removeFile(userIdJsonFile);
    }else{//ユーザーIDを保存しているJSONが無かったらJSONを新しく作る。
      userIdJson = {'userId': [userId]};
    }
    var jsonString = JSON.stringify(userIdJson); 
    var blob = Utilities.newBlob('', contentType, fileName).setDataFromString(jsonString, 'utf-8');
    drive.createFile(blob);
  }

}
  
