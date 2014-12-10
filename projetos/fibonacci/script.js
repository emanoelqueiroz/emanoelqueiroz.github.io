'use strict';

function fibonacci () {
	var body = document.getElementsByTagName('body')[0];
	var number1 = 0;
	var number2 = 1;

	for (var i = 0; i < 9; i++) {
		number1 = number1 + number2;
		number2 = number1 + number2;

		body.innerHTML += '<div class="fibonacci-number">' + number1 + '</div>' + 
						  '<div class="fibonacci-number">' + number2 + '</div>';
	}
}

fibonacci();