// ====================================================================================================
//
// Cloud Code for SetStars, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var playerLevelStars = Spark.getData().Level;
var playerStars = Spark.getData().Stars;
var playerData = {
    "playerLevelStars": playerLevelStars,
    "playerStars": playerStars
};//Dictionary<string,playerData>
Spark.getPlayer().setPrivateData("playerData", playerData);