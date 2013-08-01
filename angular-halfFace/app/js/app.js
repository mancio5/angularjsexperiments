'use strict';


// Declare app level module which depends on filters, and services
angular.module('halfFace', ['halfFace.filters', 'halfFace.services', 'halfFace.directives', 'halfFace.controllers','ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/', templateUrl: 'partials/partial2.html', controller: 'halfFaceCtrl'});
  }]);
