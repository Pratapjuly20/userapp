angular.module('registerControllerModule', [])

.controller('registercontroller', function($scope, $http, $location){
    $scope.register = function(){
        console.log("function called");
        $http.post('/register', $scope.registerdata).success(function(data){
            console.log("success function called");
            $location.path("/");
        }).error(function(data){
            console.log("Error: " + data);
        });
    };
});