describe('Destination list', function() {
	describe('Destination List', function(){
		it('should print destinations', function() {
	    		var scope, ctrl;
		      	scope = {};
		      	ctrl = new DestinationListCtrl(scope);
		      	expect(scope.destinations.length).toBe(3);
    	});
    })
    describe('Redirect', function(){
		it('should redirect index.html to index.html#/destinations', function() {
	    	browser().navigateTo('../../index.html');
	    	expect(browser().location().url()).toBe('/destinations');

	  	});
	});
})

describe('Destination detail view', function() {
 
    beforeEach(function() {
      browser().navigateTo('../../index.html#/destinations/Wellington');
    });
 
    it('should display placeholder page with destinationId', function() {
      expect(binding('destinationId')).toBe('Wellington');
    });
 });