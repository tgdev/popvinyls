/* global getJSONFixture:false */
'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(function(){

    module('popvinylApp');

    module(function($provide) {
      $provide.service('MainService');
    });

  });

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller, service and a mock scope
  beforeEach(inject(function ($injector, $controller, $rootScope) {

    $httpBackend = $injector.get('$httpBackend');
    jasmine.getJSONFixtures().fixturesPath='base/test/mock';

    $httpBackend.whenGET('/').respond(
        getJSONFixture('test-resultset-list.json')
    );

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should return results from json file', function () {
    $httpBackend.flush();
    expect(scope.popVinyls.length).toBe(9);
  });

  it('should have a count of more than zero', function () {
    $httpBackend.flush();
    expect(scope.count).toBeGreaterThan(0);
  });

  it('should show Edward Scissorhands as purchsed', function () {
    $httpBackend.flush();
    expect(scope.popVinyls[8].purchased).toBe(true);
  });

});
