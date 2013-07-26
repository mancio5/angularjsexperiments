'use strict';

/* Directives */
/////////////////////////////////////////////////////////////////////////////////////////
angular.module('website',[])
    .directive('grid',function(){
        return {
            restrict: 'E',
            replace: false,
            scope: false,
            transclude: false,
            template: '<div>{{elem}}</div>',
             controller: function ($scope) {
            }
        }
    })