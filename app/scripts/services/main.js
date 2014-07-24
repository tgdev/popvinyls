'use strict';

angular.module('popvinylApp')
	.service('MainService', function ($http, $q) {

		function getPopVinyls() {

			var req = $http.get('data/popvinyls.json');

			return(req.then(handleSuccess, handleError));
		}

		function handleSuccess(response) {

			return(response.data);

		}

		function handleError(response) {

			if (!angular.isObject(response.data) || !response.data.message) {

				return($q.reject('An unknown error occurred.'));

			}

			// Otherwise, use expected error message.
			return($q.reject(response.data.message));

		}

		return({
			getPopVinyls: getPopVinyls
		});

	})
	.service('filterService', function () {

		var options = {};

		options = [{
			'name': 'TV',
			'value': 'TV',
			'group': 'Type',
		},
		{
			'name': 'Movies',
			'value': 'Movies',
			'group': 'Type'
		},
		{
			'name': 'Music',
			'value': 'Music',
			'group': 'Type'
		},
		{
			'name': 'Purchased',
			'value': 'Purcahsed',
			'group': 'Status'
		},
		{
			'name': 'Not Purchased',
			'value': '!Purchased',
			'group': 'Status'
		}];

		return options;

	});