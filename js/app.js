app = angular.module("chatApp",["firebase"]);

app.controller("ChatCtrl", function ($scope, $firebase) {
    var ref = new Firebase("https://gong-01-chatroom.firebaseio.com/");
    var sync = $firebase(ref);
    $scope.messages =  sync.$asArray();
    // $scope.messages.$add({text: "Hello"});

/*
    $scope.messages = [
         {text: "Hello Angular"},
         {text: "Hello Agile Code Camp"},
     ];

    $scope.addMessage = function (text) {
        $scope.messages.push({text: text});
        $scope.newMessage = "";
    };
*/

    $scope.addMessage = function (text) {
        $scope.messages.$add({text: text});
        $scope.newMessage = "";
    };

    $scope.deleteMessage = function (msg) {
        $scope.messages.$remove(msg);
    };

    $scope.editMessage = function(msg) {
        msg.text = prompt("Edit Message", msg.text );
        $scope.messages.$save(msg);
    };
});