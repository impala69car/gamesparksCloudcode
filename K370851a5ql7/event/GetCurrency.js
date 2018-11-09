// ====================================================================================================
//
// Cloud Code for GetCurrency, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//var response = RTSession.newResponse()
//response.setEventKey("GetCurrency");
//request.attributeShortCode ("Value"); //use the shortCode from the configured event
//request.send(function(response){
    //var scriptData = response.scriptData; 
//});*/
//var playerGetCurrencyValue = Spark.getData().Value;
//var playerData = {
//    "playerGetCurrencyValue": playerGetCurrencyValue
//};
//Spark.getPlayer().setPrivateData("playerData", playerData);
var player = Spark.getPlayer();
player.addAchievement("Spend_Ach");
//var playerData = Spark.getPlayer().getPrivateData("playerData"); //Get the playerData object
//Spark.setScriptData("player_Data", playerData); 