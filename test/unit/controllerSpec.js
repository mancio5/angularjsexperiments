describe('PhoneCat controllers', function() {
 
  describe('header', function(){
 
    it('should create show header', function() {
      var scope = {},
        ctrl = new Header(scope);
      	expect(scope.template).toBe(1);
    });
  });
});