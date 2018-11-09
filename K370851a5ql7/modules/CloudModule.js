// ====================================================================================================
//
// Cloud Code for CloudModule, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var Scoresplayer = Spark.getData().Score;
var Levelplayer=Spark.getData().Level;;
var LBplayer;
var createBoard = function(challengeID) {
      var initialize = function() {
        var challenge = Spark.getChallenge(challengeID);
        fields = challenge.getScriptData(FIELDS_DATA_NAME);
        if (fields === null) {
            createFields();
            saveFields();
        }
    };

    var createFields = function() {
        fields = [];
        var fieldCount = BOARD_SIZE * BOARD_SIZE;
        for (var i = 0; i < fieldCount ; i++) {
            fields.push(EMPTY_PIECE);
        }
    };

    var saveFields = function() {
        var challenge = Spark.getChallenge(challengeID);
        challenge.setScriptData(FIELDS_DATA_NAME, fields);
    };

    initialize();
    return {};  
};