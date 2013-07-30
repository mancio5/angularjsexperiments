'use strict';

/* Directives */

d3DemoApp.
	directive('ghVisualization', function () {

  		// constants
		var margin = 20,
		    width = 960,
		    height = 500 - .5 - margin,
		    color = d3.interpolateRgb("#f77", "#77f");

	  	return {
	    	restrict: 'E',
	    	//values passed from html
	    	scope: {
	      		val: '=',
	      		grouped: '='
	    	},
	    	link: function (scope, element, attrs) {

	      		// set up initial svg object
	      		var vis = d3.select(element[0])
	        	.append("svg")
	          	.attr("width", width)
	          	.attr("height", height + margin + 100);

	      		scope.$watch('val', function (newVal, oldVal) {

		        	// clear the elements inside of the directive
		        	vis.selectAll('*').remove();

		        	// if 'val' is undefined, exit
		        	if (!newVal) {
		          		return;
		        	}

		       		// Bars
				    // ====

		        	var bars = layers.selectAll("g.bar")
		            	.data(function(d) { return d; })
		          		.enter().append("g")
		            	.attr("class", "bar")
		            	.attr("transform", function(d) {
		              		return "translate(" + x(d) + ",0)";
		            	});

		        	bars.append("rect")
		            	.attr("width", x({x: .9}))
		            	.attr("x", 0)
		            	.attr("y", height)
		            	.attr("height", 0)
		          	.transition()
		            	.delay(function(d, i) { return i * 10; })
		            	.attr("y", y1)
		            	.attr("height", function(d) {
		              		return y0(d) - y1(d);
		            	});
	      		});
	    	}
	  	}
	});











	// directive('myDirective', function( /* dependencies */) {
 //    	// ...
	// 	return {
	// 	    restrict: 'E', // the directive can be invoked only by using <my-directive> tag in the template
	// 	    scope: { // attributes bound to the scope of the directive
	// 	      val: '='
	// 	    },
	// 	    link: function (scope, element, attrs) {
	// 	      	// initialization, done once per my-directive tag in template. If my-directive is within an
	// 	      	// ng-repeat-ed template then it will be called every time ngRepeat creates a new copy of the template.

	// 	      	// ...

	// 	      	// whenever the bound 'exp' expression changes, execute this 
	// 	      	scope.$watch('exp', function (newVal, oldVal) {
	// 	        	// ...
	// 	    	});
	// 	    }
		  
	// 	};
 //  	});
