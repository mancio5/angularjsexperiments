'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {
 
  describe('Phone list view', function() {
 
    beforeEach(function() {
      browser().navigateTo('../../app/index.html');
    });
 
    it('should display the current filter value within an element with id "status"',
	    function() {
	    	pause()
			expect(element('#status').text()).toMatch(/Current filter: \s*$/);
			 
			input('query').enter('nexus');
			 
			expect(element('#status').text()).toMatch(/Current filter: nexus\s*$/);
			 
			//alternative version of the last assertion that tests just the value of the binding
			using('#status').expect(binding('query')).toBe('nexus');
	});
  });
});
