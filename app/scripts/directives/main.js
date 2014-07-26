/* globals $:false */
'use strict';

angular.module('popvinylApp')
	.directive('magnificPopup', function () {
		return {
			// Restrict it to be an element in this case
			restrict: 'A',
			// responsible for registering DOM listeners as well as updating the DOM
			link: function(scope, element) {
				$(element).magnificPopup({
					type: 'image',
					closeOnContentClick: true,
					image: {
						verticalFit: false
					}
				});
			}
		};
	});