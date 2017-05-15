var total = 0;

var totalSlides = $('.cardItem__content').length;
var currentSlide = 1;

$('[data-slide="1"]').show();

$('.is-current').text('1');

$('.buttons .button').click(function(e){

	currentSlide = currentSlide + 1;
	$('.cardItem__content').hide();
	$('[data-slide="' + currentSlide + '"]').show();
	
	$('.is-current').text(currentSlide);

	if ($(this).hasClass('yes')) {
		total = total + 14;
	}

	console.log(total);

	if (currentSlide > totalSlides) {
		$('.cardItem__final').show();
		$('#total').text(total + '%');
		$('.progress, .buttons').fadeOut();
		$('.related').show();
	}
});