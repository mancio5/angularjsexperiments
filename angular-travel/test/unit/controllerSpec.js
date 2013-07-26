describe('Activities controllers', function() {
 
    describe('ActivitiesCtrl', function(){
 
        it('should create "list" activity with 123 activities', function() {
            var scope, ctrl, $httpBackend;
            // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
            // This allows us to inject a service but then attach it to a variable
            // with the same name as the service.
            beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
                $httpBackend = _$httpBackend_;
                $httpBackend.expectGET('data/activities.json').
                    respond([{city: 'Auckland'}, {city: 'Wellington'}]);
                scope = $rootScope.$new();
                ctrl = $controller(ActivitiesCtrl, {$scope: scope});
            }));
        });
    });
});