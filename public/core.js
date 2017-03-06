var app = angular.module('registration', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "partials/login.html"
    })
    .when("/register", {
        templateUrl : "partials/register.html",
        controller : "registercontroller"
    })
    .otherwise("/");
});

app.factory("flash", function($rootScope){
    console.log("factory used");
    var queue = [];
    var currentMessage = "";
    $rootScope.$on("$routeChangeSuccess", function(){
        console.log("route change method called");
        currentMessage = queue.shift() || "sdvDVV";
        console.log(currentMessage);
    });
    return {
        setMessage : function(message){
            queue.push(message);
            console.log(queue);
        },
        getMessage : function(){
            console.log(currentMessage);
            return currentMessage;
        }
    };
});

app.controller('registercontroller', function($scope, $http, $location, flash){
    $scope.flash = flash;
    $scope.register = function(){
        $http.post('/api/register', $scope.registerdata).success(function(data){
            flash.setMessage("User created successfully");
            console.log(flash.getMessage());
            $location.path("/");
        }).error(function(data){
            flash.setMessage("Could not create user");
            $location.path("/");
            console.log("Error: " + data);
        });
    };
});