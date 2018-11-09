// ====================================================================================================
//
// Cloud Code for AddCurrency, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//var request = RTSession.newRequest().createLogEventRequest();
//request.setEventKey("AddCurrency");
//request.attributeShortCode ("Value"); //use the shortCode from the configured event
//request.send(function(response){
//    var scriptData = response.scriptData; 
//});
var request = new SparkRequests.ListVirtualGoodsRequest();  // Create a request to get a List of the current    virtual goods in your game
var response = request.Send();  // Send the request
var virtualGoods = response.virtualGoods;  // Store the virtual goods

var inventory = Spark.getPlayer().getVirtualGoods(); // Player
var config = Spark.getConfig();
var allGoods = config.getVirtualGoods(); // List
var json = { }; // Changed this because when the data is set the key virtualGoods will already be created

for (var invItem in inventory)
{
    var l = allGoods.length;
    for (var i=0; i<allGoods.length; i++)
    {
        var singleGood = allGoods[i];
        var singleGoodName = allGoods[i].shortCode;
        if (invItem == singleGoodName)
        {
            json[singleGoodName] = virtualGoods[i];
        }
    }
}
Spark.getPlayer().setScriptData( "virtualGoods", json ); 