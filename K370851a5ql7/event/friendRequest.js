// ====================================================================================================
//
// Cloud Code for friendRequest, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Get input
var playerId = Spark.getPlayer().getPlayerId();
var friendPlayerId = Spark.getData().player_id;
var group = Spark.getData().group;
var message = Spark.getData().message;

//Get Game Service Data API
var API = Spark.getGameDataService();

//Get the other player's friend's list
var entry = API.getItem("playerFriends", playerId);
// now we check the pending requests to see if the player has declined a previous request //
if(entry.error()){
    Spark.setScriptError("ERROR", error);
    Spark.exit();
} else{
    //Get Data object
    var data = entry.document().getData();
    //See if there's already a record between the two players
    var request = data[friendPlayerId];
    //If there is a record
    if(request){
        //Check if it's a declined request return message, however if it's not that means the request is already accepted or pending
        if(request.status === "declined"){
            Spark.setScriptError("ERROR", "player-declined");        
        } else{
           Spark.setScriptError("ERROR", "Request already made")      
        }
    } else{
        //If not declined create a pending request
    data[friendPlayerId] = {
        "displayName" : Spark.loadPlayer(friendPlayerId).getDisplayName(),
        "group" : group,
        "status" : "pending"    
    }

    //Persist entry
    var status = entry.document().persistor().persist().error();

    //Check for errors
    if(status){
        Spark.setScriptError("ERROR", status);
        Spark.exit();    
    } else{
        //If no errors send a message to the other player with the request
        var newMessage = Spark.message("friendRequestMessage");
        newMessage.setPlayerIds(friendPlayerId);
        newMessage.setMessageData({
        "message" : message,
        "senderId" : playerId,
        "displayName" : Spark.getPlayer().getDisplayName()

        });
        newMessage.send();
        }    
        //Get friends table of requests
        var entry = API.getItem("playerFriends", friendPlayerId);
        if(entry.error()){
            Spark.setScriptError("ERROR", error);
            Spark.exit();    
        } else{
            //Get data object and insert new request for reference
            var friendData = entry.document().getData();
            //Create a reference to this player's friend request
            friendData[playerId] = {
            "displayName" : Spark.getPlayer().getDisplayName(),
            "group" : "none",
            "status" : "pending"
            }
            //Persist data and ensure it was saved
            var status = entry.document().persistor().persist().error();
            if(status){
              Spark.setScriptError("ERROR", status);
                Spark.exit();   
            }
        }
    }
    // and return a script message to show that the request was completed successfully //
    Spark.setScriptData("success", "request-sent")
}