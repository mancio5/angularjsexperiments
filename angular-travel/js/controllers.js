'use strict';

/* ANGULAR */
var DestinationListCtrl = ['$scope', '$http', function($scope, $http) {
	$http.get('data/destinations.json').success(function(data) {
    	$scope.destinations = data;
    	$scope.orderProp = "city";
  	}); 	
}];
//DestinationListCtrl.$inject = ['$scope', '$routeParams'];

var DestinationDetailCtrl = ['$scope', '$routeParams', '$http', function($scope, $routeParams,$http) {
	$scope.destination = $routeParams.destinationCity;	
	$scope.destination = $routeParams.destinationId;	
	$http.get('data/activities.json').success(function(data) {
    	$scope.activities = data;
  	}); 
}];