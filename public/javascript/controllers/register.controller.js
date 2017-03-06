angular.module('registerControllerModule', [])

.controller('registercontroller', function($scope, $http, $location){
    $scope.register = function(){
        $http.post('/api/register', $scope.registerdata).success(function(data){
            $location.path("/");
        }).error(function(data){
            console.log("Error: " + data);
        });
    };
});