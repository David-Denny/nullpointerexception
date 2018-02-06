/* jslint browser: true */
/* global $, document, alert */
	
$(document).ready(function () {
	"use strict";

	var counter = 0;
	
	/* 
	Ideally the new rows would be loaded from a server but I don't have access to one and therefore the new questions cannot be retained after a page refresh or for different users but this is an example. 
	*/
	
	$("#questionForm").submit(function (e) {
		//prevents new row immediately disappearing
		e.preventDefault();
		
		// assigns input to variables
		var title = $("#enter-title").val(), question = $("#enter-question").val();
		
		// check input is not empty
		if (title.length > 0 || question.length > 0) {
			
			$("#questionTable tbody").append("<tr class='" + counter + "'><td> 0 </td><td>" + title + "</td><td> 0 </td></tr>");
			
			counter++;
		} else {
			alert("Please do not submit an empty form.");
		}

	});
	
});