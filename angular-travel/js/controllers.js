'use strict';

/* ANGULAR */

angular.module('travel_app',[])
    .config(function($routeProvider){
    });


var DestinationsCtrl = ['$scope', '$http', function($scope, $http) {
	$http.get('data/destinations.json').success(function(data) {
    	$scope.destinations = data;
    	$scope.orderProp = "city";
  	}); 	
}];