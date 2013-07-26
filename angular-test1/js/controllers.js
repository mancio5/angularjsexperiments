'use strict';

/* Controllers */

var angularJSApp = angular.module('website',[]);

angularJSApp.config(function($routeProvider){
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
/////////////////////////////////////////////////////////////////////////////////////////
//MainCtrl controller //////////////////////////////////////////////////////////////////
angularJSApp.controller('MainCtrl',['$scope', function($scope){
   
}])
/////////////////////////////////////////////////////////////////////////////////////////
//Projects controller //////////////////////////////////////////////////////////////////
function ProjectsCtrl($scope,$routeParams){
    $scope.title = "Projects";
    $scope.elements = [
        {
            "name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S."
        },
        {   
            "name": "Motorola XOOM™ with Wi-Fi",
            "snippet": "The Next, Next Generation tablet."
        },
        {
            "name": "MOTOROLA XOOM™",
            "snippet": "The Next, Next Generation tablet."
        }
    ];
}
/////////////////////////////////////////////////////////////////////////////////////////
//Experiments controller //////////////////////////////////////////////////////////////////
function ExperimentsCtrl ($scope,$routeParams){
    $scope.title = "Experiments";
    $scope.elements = [
        {
            "name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S."
        },
        {
            "name": "Motorola XOOM™ with Wi-Fi",
            "snippet": "The Next, Next Generation tablet."
        },
        {   
            "name": "MOTOROLA XOOM™",
            "snippet": "The Next, Next Generation tablet."
        }
    ];
}