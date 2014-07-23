'use strict';

angular.module('popvinylApp')
	.filter('HyphenateString', function () {

		return function(string) {
			return string.split(' ').join('-');

		};

	})
	.filter('FormatString', function () {
		return function(string) {
			string = string.replace('\'', '');
			string = string.replace('.', '');
			return string;
		};
	});