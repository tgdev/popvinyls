'use strict';

angular.module('popvinylApp')
	.directive('magnificPopup', function () {
		return {
			// Restrict it to be an element in this case
			restrict: 'A',
			// replace custom element with template defined below
			// replace: true,
			// bind element attributes to directive to be used in template below
			// scope: {
			// 	name: '=',
			// 	src: '=',
			// 	klass: '&'
			// },
			// responsible for registering DOM listeners as well as updating the DOM
			link: function(scope, element, attrs) {
				$(element).magnificPopup({
					type: 'image',
					closeOnContentClick: true,
					image: {
						verticalFit: false
					}
				});
			}//,
			// template: '<a class="image-popup-vertical-fit" href="images/fullsize/{{src}}.jpg">' +
			// 		'<img data-ng-src="images/thumbs/{{src}}-150x150.jpg" alt="{{name}}" class="{{klass}}" />' +
			// 		'<p>{{name}}</p>' +
			// 	'</a>'
		};
	});