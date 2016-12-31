/**
 * @author: Surya Deep Mishra
 */

$(document).ready(function() {

	// Come on top
	$('html, body').animate({
		scrollTop : 0
	}, 0);

	var height = $(window).height();
	$(".content-container").css('margin-top', height); //Calculate project container margin from top

	var heading = $('#wrapper-overlay h1'), limit = 350, count = 0, countNext = 0;

	$(window).on('scroll', function() {	// On scrolling
		var st = $(this).scrollTop();
		if (st <= limit) {
			heading.css({
				'opacity' : (1 - st / limit)
			});
		}
		var greyPercentage = ((st / 370) * 100);
		$('#header').css({
			'-webkit-filter' : 'grayscale('+greyPercentage+'%)',
			'filter' : 'grayscale('+greyPercentage+'%)',
		});
	});
	
	//Play the video
	$('#play').click(function(){
		var video = $('#bgvid')[0];
		if (video.paused == false) {
			video.pause();
		} else {
			  video.play();
		  }
	});
	
	// If the browser is Microsoft Internet Explorer
	if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/))){
		alert("Your browsing experience may change with old browsers. It is highly recommend to switch to new browsers see the page as intended.");
		$('#bgvid, #play').remove();
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
					//$('#play').click();
				});
			});
		});
	});
});
