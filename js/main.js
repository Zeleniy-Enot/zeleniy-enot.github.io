/*Прелоадер*/
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
}

/*POPUP*/
$(document).ready(function(){
	$(".popup_btm").click(function()
	{
		$('#myfond_gris').fadeIn(300);
		var iddiv = $(this).attr("iddiv");
		$('#'+iddiv).fadeIn(300);
		$('#myfond_gris').attr('opendiv',iddiv);
		return false;
	});
	$('#myfond_gris, .close').click(function()
	{
		var iddiv = $("#myfond_gris").attr('opendiv');
		$('#myfond_gris').fadeOut(300);
		$('#'+iddiv).fadeOut(300);
	});
});

/*Карусель OWL*/
$(function() {
	$(".slide-one").owlCarousel({
		loop: true,
		responsive:{
			0:{
				items:1,
			}
		}
	});
	$(".slide-two").owlCarousel({
		loop: true,
		dots: false,
		animateOut: 'zoomOut',
		animateIn: 'fadeIn',
		autoplay: true,
		autoplayTimeout: 3000,
		responsive:{
			0:{
				items:1,
			}
		}
	});
	$(".slide-three").owlCarousel({
		loop: true,
		dots: false,
		autoHeight:true,
		animateOut: 'zoomOut',
		animateIn: 'fadeIn',
		autoplayTimeout: 3000,
		responsive:{
			0:{
				items:1,
			}
		}
	});
	$(".slide-four").owlCarousel({
		loop: true,
		autoHeight:true,
		// autoplay: true,
		// autoplayTimeout: 5000,
		responsive:{
			0:{
				items:1,
			}
		}
	});
});

/*Карусель BTM*/
jQuery(document).ready(function($) {

	let outs = document.querySelectorAll('.owl-out');

	for (let out of outs) {

		let owl = out.querySelector('.owl-carousel');
		let btns = out.querySelectorAll(':scope .thumb');

		let owlJq = $(owl);
		owlJq.owlCarousel({
			loop: true,
			dots: false,
			animateOut: 'slideOutDown',
			animateIn: 'slideInDown',
			autoplay: true,
			autoplayTimeout: 5000,
			responsive:{
				0:{
					items:1,
				}
			}
		});

		for (let btn of btns) {
			btn.addEventListener('click', function () {
				owlJq.trigger('to.owl.carousel', [$(this).index()]);
			})
		}
	};

});

/*Маска телефона*/
$(function(){
	$(".phone1").mask("+7(999) 999-9999");
});

/*Скрытие и отображение текста*/
$(document).ready(function(){
	$('.spoiler-body').hide();
	$('.spoiler-title').click(function(){
		$(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
	});
});

/*Счетчик*/
var time = 2, cc = 1;
$(window).scroll(function(){
	$('#counter').each(function(){
		var
		cPos = $(this).offset().top,
		topWindow = $(window).scrollTop();
		height =  window.innerHeight;
		if (cPos < topWindow + (height / 100 * 90)) {
			if(cc < 2){
				$('p').each(function(){
					var
					i = 1,
					num = $(this).data('num'),
					step = 1500 * time / num,
					that = $(this),
					int = setInterval(function(){
						if (i <= num) {
							that.html(i);
						}
						else {
							cc = cc + 2;
							clearInterval(int);
						}
						i++;
					},step);
				});
			}
		}
	});
});

/*Меню*/
$(document).ready(function() {
	t228_createMobileMenu('138509734');
});
