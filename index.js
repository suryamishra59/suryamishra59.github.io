/**
 * @author: Surya Deep Mishra
 */

$(document).ready(function() {

	var height = $(window).height();
	$(".content-container").css('margin-top', height);

	var heading = $('#wrapper-overlay h1'), limit = 350, count = 0, countNext = 0;

	$(window).on('scroll', function() {
		var st = $(this).scrollTop();
		if (st <= limit) {
			heading.css({
				'opacity' : (1 - st / limit)
			});
		}
		var greyPercentage = ((st / 370) * 100);
		$('#bgvid').css({
			'-webkit-filter' : 'grayscale('+greyPercentage+'%)',
			'filter' : 'grayscale('+greyPercentage+'%)',
		});
	});
	
	if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/))){
		alert("Your browsing experience may change with old browsers. It is highly recommend to switch to new browsers see the page as intended.");
	}
});

// Preloader
$(window).on('load', function() {
	$('html, body').animate({
		scrollTop : 0
	}, 100, function() {
		$('#logo-container').animate({
			'top' : '0'
		}, 1000, function() {
			$(".se-pre-con").fadeOut(600, function() {
				$('#wrapper-overlay h1').animate({
					'opacity' : '1'
				}, 400, function() {
					$('html, body').css('overflow-y' , 'auto');
				});
			});
		});
	});
});
