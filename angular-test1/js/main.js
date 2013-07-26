'use strict';

/* ANGULAR */

angular.module('website',[])
    .config(function($routeProvider){
        $routeProvider
            .when('/home',{
                template:'partials/home.html'
            })
            .when('/projects',{
                template:'partials/grid-template.html',
                controller: 'ProjectsCtrl'
            })
            .when('/about',{
                template:'partials/about.html'
            })
            .when('/experiments',{
                template:'partials/grid-template.html',
                controller: 'ExperimentsCtrl'
            })
            .when('/project',{
                template:'partials/project-template.html',
                controller: 'ProjectCtrl'
            })
            .otherwise({redirecTo:'/error',template:'partials/home.html'})
    });