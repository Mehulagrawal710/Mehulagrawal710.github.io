var app=angular.module('myApp',['ngRoute']);

/*Routing Templates*/
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'home.html'
        })
        .when('/home',{
            templateUrl: 'home.html'
        })
        .when('/timeline',{
            templateUrl: 'timeline.html'
        })
        .when('/techstack',{
            templateUrl: 'techstack.html'
        });
});

/*App Controller*/
app.controller('appController',function($scope){
    //
});