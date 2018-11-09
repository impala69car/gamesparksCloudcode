// ====================================================================================================
//
// Cloud Code for AuthenticationRequest, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var status = "Started";
//Checking if there is any scriptData passed in, if not then carry on the authentication as normal
if(Spark.data.scriptData){

    var action = Spark.data.scriptData.action;

    if("passwordRecoveryRequest" === action){
        //Start recovery sequence
        startRecovery(Spark.data.scriptData);

    } else if ("resetPassword" === action){
        //Start reset sequence
        resetPassword(Spark.data.scriptData);
    }

    else
    {
        // action variable isn't valid, check spelling or value
        status = "invalid action";
    }
// set an error to prevent the AuthenticationRequest being processed
    Spark.setScriptError("action", status);

}
