$(function () {
	var divs = $('#page').html();	

	for (var i = 0; i < 8; i++) {
		$('#page').append(divs);
	};
})