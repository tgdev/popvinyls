'use strict';

angular.module('popvinylApp').controller('MainCtrl', function ($scope, $http, MainService) {

	$scope.popVinyls = [];
	$scope.totalCount = 0;
	$scope.purchasedCount = 0;
	$scope.filterType = 'All';

	function applyRemoteData(items) {

		$scope.popVinyls = items;
		$scope.totalCount = items.length;
		$scope.purchasedCount = getPurchasedCount(items);

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