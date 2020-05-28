$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		dots: true,
		responsive:{
			320:{
				items: 1
			},
			426:{
				items: 3
			}
		}
	});
});