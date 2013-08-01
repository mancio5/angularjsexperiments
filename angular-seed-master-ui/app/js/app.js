'use strict';


// Declare app level module which depends on filters, and services
angular.module('istaGlobe', ['istaGlobe.filters', 'istaGlobe.services', 'istaGlobe.directives', 'istaGlobe.controllers','ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/', templateUrl: 'partials/partial2.html', controller: 'istaListCtrl'});
  }]);
