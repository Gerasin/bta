$(document).ready(function() {

	$('.form__check span').on('click', function () {
		$(this).toggleClass('active');
		return false;
	});

	$('.phone-input').mask('+375 (00) 000-00-00', {placeholder: "+375 (__) ___-__-__"});

});