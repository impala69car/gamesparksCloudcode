// ====================================================================================================
//
// Cloud Code for SpendCurrency, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var playerSpendCurrency = Spark.getData().TenCurrency;
var playerSpendCurrencyValue = Spark.getData().Value;
var playerData = {
    "playerSpendCurrency": playerSpendCurrency,"playerSpendCurrencyValue":playerSpendCurrencyValue
};
Spark.getPlayer().setPrivateData("playerData", playerData);