/* jslint browser: true */
/* global $, document, alert */
	
$(document).ready(function () {
	"use strict";
	
	// assigns the input to variables
	$("#questionForm").submit(function () {
		
		var title = $("#enter-title").val(), question = $("#enter-question").val();
		
		alert(title);
		alert(question);
	});
});