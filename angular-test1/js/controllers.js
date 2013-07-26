'use strict';

/* ANGULAR */

angular.module('travel_app',[])
    .config(function($routeProvider){
        $routeProvider
            .when('/home',{
                template:'partials/home.html'
            })
            .otherwise({redirecTo:'/error',template:'partials/grid-template.html'})
    });