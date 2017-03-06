angular.module('app', ['ngRoute', 'registerControllerModule'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "templates/login.html"
    })
    .when("/register", {
        templateUrl : "templates/register.html",
        controller : "registercontroller"
    })
    .otherwise("/");
}]);


// config(['$routeProvider', function ($routeProvider) {
// $routeProvider
// .when('/',	 {
// templateUrl: 'templates/todos.template.html',
// controller: 'TodoController'
// })

// .when('/:id', {
// templateUrl: 'templates/todoDetails.template.html',
// controller: 'TodoDetailCtrl'
// })

// //$locationProvider.html5Mode(true);
// //$locationProvider.html5Mode(true);
// }]);
// Arushi • Now
