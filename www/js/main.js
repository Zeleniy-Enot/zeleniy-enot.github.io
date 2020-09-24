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
		animateOut: 'zoomOut',
		animateIn: 'fadeIn',
		autoplayTimeout: 3000,
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

/*Карусель лиц*/
// window.addEventListener("load", () => {
// 	var carousels = document.querySelectorAll(".carousel-3d");
// 	for (var i = 0; i < carousels.length; i++) {
// 		carousel(carousels[i]);
// 	}
// });
// function carousel(root) {
// 	var figure = root.querySelector("figure"),
// 	nav = root.querySelector("nav"),
// 	images = figure.children,
// 	n = images.length,
// 	gap = root.dataset.gap || 0,
// 	bfc = "bfc" in root.dataset,
// 	theta = 2 * Math.PI / n,
// 	currImage = 0;
// 	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
// 	window.addEventListener("resize", () => {
// 		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
// 	});
// 	setupNavigation();
// 	function setupCarousel(n, s) {
// 		var apothem = s / (2 * Math.tan(Math.PI / n));
// 		figure.style.transformOrigin = `50% 50% ${-apothem}px`;
// 		for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
// 			for (i = 0; i < n; i++) {
// 				images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
// 				images[i].style.transform = `rotateY(${i * theta}rad)`;
// 			}
// 			if (bfc)
// 				for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
// 					rotateCarousel(currImage);
// 			}
// 			function setupNavigation() {
// 				nav.addEventListener("click", onClick, true);
// 				function onClick(e) {
// 					e.stopPropagation();
// 					var t = e.target;
// 					if (t.tagName.toUpperCase() != "BUTTON") return;
// 					if (t.classList.contains("next")) {
// 						currImage++;
// 					} else {
// 						currImage--;
// 					}
// 					rotateCarousel(currImage);
// 				}
// 			}
// 			function rotateCarousel(imageIndex) {
// 				figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
// 			}
// 		}

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