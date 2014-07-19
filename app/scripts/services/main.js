'use strict';

angular.module('popvinylApp').filter('MainService', function ($http) {

	this.getpopVinyls = function () {

		var obj = {content:null};

		$http.get('/data/pop-vinyl-list.json').success(function(data) {
			obj.content = data;
		});

		return obj;

	};

});