FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
    // Toteuta kontrolleri tähän
    
    Api.getTopics().success(function(topics){
        $scope.topics = topics;
    });
    
    Api.getTopic().success(function(id) {
        for (var i = 0; i < $scope.topics.length; i++) {
            if ($scope.topics[i].$routeParams.id == id) {
                $scope.topic = $scope.topics[i];
            }
        }
    });
});
