function doPost(e) {

  var JsonData = JSON.parse(e.postData.contents).events[0];
  var JsonDataString = JSON.stringify(e.postData.contents);
  var eventType = JsonData.type;
  var userId = JsonData.source.userId;
  
  if (eventType == 'follow') {
    var spreadSheetId ='このスクリプトの入っているスプレッドシートのID';
    var sheetName ='userId';
    var spreadSheet = SpreadsheetApp.openById(spreadSheetId);
    var targetSheet = spreadSheet.getSheetByName(sheetName);
    
    targetSheet.appendRow([userId]); 
  }

}