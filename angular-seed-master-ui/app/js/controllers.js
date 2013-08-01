'use strict';

/* Controllers */

angular.module('istaGlobe.controllers', [])
  	.controller('istaListCtrl', ['$scope',function($scope) {
  		$scope.title = "IstaGlobe";
  		$scope.version = " v1.0";
  		$scope.description = "";
  		$scope.imgs =[
	  		{"src":"img/Martin-Schoeller-Angelina-Jolie-544x708.jpg"},
			{"src":"img/Martin-Schoeller-Bill-Murray-544x684.jpg"},
			{"src":"img/Martin-Schoeller-Cate-Blanchett-544x678.jpg"},
			{"src":"img/Martin-Schoeller-Christopher-Walken-544x708.jpg"},
			{"src":"img/Martin-Schoeller-Clint-Eastwood-544x708.jpg"},
			{"src":"img/Martin-Schoeller-Colin-Farrell-544x675.jpg"},
			{"src":"img/Martin-Schoeller-Dennis-Hopper-544x723.jpg"},
			{"src":"img/Martin-Schoeller-George-Clooney-544x708.jpg"},
			{"src":"img/Martin-Schoeller-Heath-Ledger-544x708.jpg"},
			{"src":"img/Martin-Schoeller-Helen-Mirren-544x680.jpg"},
			{"src":"img/Martin-Schoeller-Iggy-Pop-544x679.jpg"},
			{"src":"img/Martin-Schoeller-Jack-Nicholson-544x708.jpg"},
			{"src":"img/Martin-Schoeller-Jay-Z-544x707.jpg"},
			{"src":"img/Martin-Schoeller-Justin-Timberlake-544x681.jpg"},
			{"src":"img/Martin-Schoeller-Kelly-Slater-544x708.jpg"},
			{"src":"img/Martin-Schoeller-Marc-Jacobs-544x673.jpg"},
			{"src":"img/Martin-Schoeller-Mark-Zuckerberg-544x700.jpg"},
			{"src":"img/Martin-Schoeller-Mickey-Rourke-544x708.jpg"},
			{"src":"img/Martin-Schoeller-Paris-Hilton-544x680.jpg"},
			{"src":"img/Martin-Schoeller-Valentino-544x680.jpg"},
			{"src":"img/Martin-Schoeller-Zack-Galifianakis-544x708.jpg"},
			{"src":"img/Martin-Schoeller-Zinedine-Zidane-544x707.jpg"}
		]
		$scope.left_index = 0;
		$scope.right_index = 0;
		$scope.load_left = function() {
			do{
				var r = parseInt(Math.random()*$scope.imgs.length);
			}while(r == $scope.right_index);  //eliminate the case same image from both sides
			$scope.left_img = $scope.imgs[r];
			$scope.left_index = r;
		}
		$scope.load_right = function(){
			do{
				var r = parseInt(Math.random()*$scope.imgs.length);
			}while(r == $scope.left_index);  //eliminate the case same image from both sides
			$scope.right_img = $scope.imgs[r];
			$scope.right_index = r;
		}
		$scope.saveImg = function(){
			$scope.saved_list.push({"l":$scope.left_img,"r":$scope.right_img})
		}
		$scope.load_left();
		$scope.load_right();
		$scope.saved_list = [];
		$scope.popOver = {
			"message":"<img>sdas</img>"
		}
  	}]);
