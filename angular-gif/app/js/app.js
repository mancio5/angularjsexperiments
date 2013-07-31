'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers','ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'LayerCtrl'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'halfFaceCtrl'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
