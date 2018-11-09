// ====================================================================================================
//
// Cloud Code for SetCurrency, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var playerSetCurrencyValue = Spark.getData().Value;
var playerData = {
    "playerSetCurrencyValue": playerSetCurrencyValue
};//Dictionary<string,playerData>
Spark.getPlayer().setPrivateData("playerData", playerData);