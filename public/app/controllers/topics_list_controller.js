FoorumApp.controller('TopicsListController', function($scope, $location, Api){
    // Toteuta kontrolleri tähän
    
    Api.getTopics().success(function(topics){
        $scope.topics = topics;
    });
    
    
    $scope.addTopic = (function() {
        if (($scope.newTopic.name != '') && ($scope.newTopic.description != '')) {
            Api.addTopic().success(function(topic) {
                topic.name = $scope.newTopic.name,
                topic.description = $scope.newTopic.description
                
                $scope.topics.push(topic);
                
                $scope.newTopic.name = '';
                $scope.newTopic.description = '';
                
                $location.path('/topics/:id')
            });
        } 
    });
            
 
            
       
    
});
