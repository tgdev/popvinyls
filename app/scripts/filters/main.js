'use strict';

angular.module('popvinylApp').filter('HyphenateString', function () {

	return function(string) {
		return string.replace(' ', '-');
	};

});