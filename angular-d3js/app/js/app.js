'use strict';


// Declare app level module which depends on filters, and services
var d3DemoApp = angular.module('d3DemoApp', [])

d3DemoApp.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'VisCtrl'});
    	$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    	$routeProvider.otherwise({redirectTo: '/view1'});
  }]);