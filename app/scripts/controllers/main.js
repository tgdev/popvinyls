'use strict';

angular.module('popvinylApp').controller('MainCtrl', function ($scope, $http, MainService) {

	$scope.popVinyls = [];
	$scope.purchasedCount = 0;
	$scope.sortExpression = '';

	function applyRemoteData(items) {

		$scope.popVinyls = items;
		$scope.purchasedCount = getPurchasedCount(items);
		$scope.sortExpression = 'Number';

		// convert number to float for proper sorting
		angular.forEach($scope.popVinyls, function (pv) {
		  pv.Number = parseFloat(pv.Number);
		});

	}

	function loadRemoteData() {

		// The MainService returns a promise.
		MainService.getPopVinyls()
			.then(function(items) {
				applyRemoteData(items);
			});

	}

	function getPurchasedCount(items) {

		var count = 0;

		angular.forEach(items, function(item) {

			if(item.Purchased === true) {
				count++;
			}

		});

		return count;
	}

	loadRemoteData();

});