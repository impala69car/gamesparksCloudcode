// ====================================================================================================
//
// Cloud Code for SetReachedLevel, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var playerLevelReached = Spark.getData().Level;
var playerData = {
    "playerLevelReached": playerLevelReached
};
Spark.getPlayer().setPrivateData("playerData", playerData);