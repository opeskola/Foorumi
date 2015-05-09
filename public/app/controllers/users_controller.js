FoorumApp.controller('UsersController', function($scope, $location, Api){
    // Toteuta kontrolleri tähän
    $scope.newUser = {};
        
    $scope.login = (function() {
            Api.login({username: $scope.newUser.username, password: $scope.newUser.password})
                .success(function(user){
                    console.log('Kirjautuminen onnistui!');    
                    console.log(user);
                    $location.path('/');
                })
                .error(function(){
                    console.log('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
                    $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
                });           
        });
 
    $scope.register = (function() {
        Api.register({username: $scope.newUser.username, password: $scope.newUser.password})
            .success(function(user){
                console.log('Rekisteröinti onnistui!');    
                console.log(user);
                $location.path('/');
            })
            .error(function(){
                console.log('Rekisteröinti epäonnistui! Lisätään käyttäjälle virheilmoitus');
                $scope.errorMessage = 'Käyttäjätunnus on jo käytössä!';
            });    
        });
});
