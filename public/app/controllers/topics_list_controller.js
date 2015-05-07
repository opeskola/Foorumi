FoorumApp.controller('TopicsListController', function($scope, $location, $routeParams, Api){
    // Toteuta kontrolleri tähän
    
    Api.getTopics().success(function(topics){
        $scope.topics = topics;
    });
    
    $scope.addTopic = (function() {
        Api.addTopic().success(function(topic) {
            topic.name = $scope.newTopic.name;
            topic.description = $scope.newTopic.description;

            $scope.topics.push(topic);
            
            var id = $routeParams.id;
            
            $location.path('topics/id');
        });
    });
                        
 
            
       
    
});
