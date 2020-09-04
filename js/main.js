/*Маска телефона*/
$(function(){
	$(".phone1").mask("+7(999) 999-9999");
});

/*Карусель лиц*/
window.addEventListener("load", () => {
	var carousels = document.querySelectorAll(".carousel-3d");
	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
});
function carousel(root) {
	var figure = root.querySelector("figure"),
	nav = root.querySelector("nav"),
	images = figure.children,
	n = images.length,
	gap = root.dataset.gap || 0,
	bfc = "bfc" in root.dataset,
	theta = 2 * Math.PI / n,
	currImage = 0;
	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener("resize", () => {
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	});
	setupNavigation();
	function setupCarousel(n, s) {
		var apothem = s / (2 * Math.tan(Math.PI / n));
		figure.style.transformOrigin = `50% 50% ${-apothem}px`;
		for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
			for (i = 0; i < n; i++) {
				images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
				images[i].style.transform = `rotateY(${i * theta}rad)`;
			}
			if (bfc)
				for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
					rotateCarousel(currImage);
			}
			function setupNavigation() {
				nav.addEventListener("click", onClick, true);
				function onClick(e) {
					e.stopPropagation();
					var t = e.target;
					if (t.tagName.toUpperCase() != "BUTTON") return;
					if (t.classList.contains("next")) {
						currImage++;
					} else {
						currImage--;
					}
					rotateCarousel(currImage);
				}
			}
			function rotateCarousel(imageIndex) {
				figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
			}
		}

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