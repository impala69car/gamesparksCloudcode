// ====================================================================================================
//
// Cloud Code for GetBoosts, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var playerBoostsValue = Spark.getData().Value;
var playerData = {
    "playerBoostsValue": playerBoostsValue
};//Dictionary<string,playerData>
Spark.getPlayer().setPrivateData("playerData", playerData);
Spark.setScriptData("player_Data", Spark.getPlayer().getPrivateData("playerData")); 