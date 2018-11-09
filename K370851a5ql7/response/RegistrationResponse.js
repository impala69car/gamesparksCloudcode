// ====================================================================================================
//
// Cloud Code for RegistrationResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
if(Spark.getData().error === undefined)
{
  //Load player
  var player = Spark.getPlayer();

  //Get Game Service Data API
  var API = Spark.getGameDataService();

  //Create new entry
  var entry = API.createItem("playerList", player.getPlayerId());

  //If valid, increment or initialise item
  var data = entry.getData();

  //set data
  data.userName = player.getUserName();
  data.displayName = player.getDisplayName();
  //player.getPlayerId();
  //Persist doc
  var status = entry.persistor().persist().error();

  //Check if Doc has been persisted without error
  if(status){
      Spark.setScriptError("ERROR", status);
      Spark.exit();
  } else{
      //Create playerFriends entry for player
      entry = API.createItem("playerFriends", Spark.getPlayer().getPlayerId());

      //Persist
      status = entry.persistor().persist().error();

      //If error, stop execution
      if(status){
        Spark.setScriptError("ERROR", status);
        Spark.exit();    
      }
  }
}
