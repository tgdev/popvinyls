'use strict';

angular.module('popvinylApp').controller('MainCtrl', function ($scope, MainService) {

// $scope.awesomeThings = [
//   'HTML5 Boilerplate',
//   'AngularJS',
//   'Karma'
// ];

	var popVinyls = MainService.getpopVinyls();

	$scope.popVinyls = popVinyls;
	$scope.count = popVinyls.length;
	$scope.filterType = 'All';

});