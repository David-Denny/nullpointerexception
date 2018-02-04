/*jslint browser: true*/
/*global $, document*/
	
$(document).ready(function () {
	"use strict";
	
	//sets the class 'active' when mouse hovers over navbar element
	$('.nav-element').hover(
		function () {
			$(this).addClass('active');
		},
		
		function () {
			$(this).removeClass('active');
		}
	);
});