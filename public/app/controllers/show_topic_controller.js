FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
    // Toteuta kontrolleri tähän
    $scope.newMessage = {};
    
    Api.getTopic($routeParams.id).success(function(topic) {
        $scope.topic = topic;
    });
    
    $scope.addMessage = (function() {
        Api.addMessage($scope.newMessage, $routeParams.id).success(function(message) {
            $location.path('messages/' + message.id);
        });
    });    
});
