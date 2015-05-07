FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
    // Toteuta kontrolleri tähän
    
    Api.getTopic().success(function(id) {
        $scope.topic = $scope.topics[$routeParams.id];
        console.log($routeParams.id);
    });
});
