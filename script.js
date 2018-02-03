/*jslint browser: true*/
/*global $, document*/
	
$(document).ready(function () { //sets the class 'active' when mouse hovers over navbar element
	"use strict";
	
	$('.nav-element').hover(
		function () {
			$(this).addClass('active');
		},
		
		function () {
			$(this).removeClass('active');
		}
	);
});