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
	});
});

/*$(window).load(function() {
	$("#wrapper-overlay h1").animate({
		'opacity' : '1'
	}, 300, function() {
		$("#wrapper-overlay h1 span").animate({
			'opacity' : '1'
		}, 300);
	});
});*/