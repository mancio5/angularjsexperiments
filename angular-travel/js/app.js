angular.module('travel_app',[]).
    config(['$routeProvider', function($routeProvider) {
  		$routeProvider.
      		when('/destinations', {template: 'partials/destination-list.html', controller: DestinationListCtrl}).
      		when('/destinations/:destinationCity', {template: 'partials/destination-detail.html', controller: DestinationDetailCtrl}).
      		otherwise({redirectTo: '/destinations'});
	}]);