describe('Website controllers', function() {
 
  describe('Header', function(){
    var scope, ctrl;
 
    beforeEach(function() {
      scope = {},
      ctrl = new PhoneListCtrl(scope);
    });
 
 
    it('should create "phones" model with 3 phones', function() {
      expect(scope.phones.length).toBe(3);
    });
 
 
    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });
});