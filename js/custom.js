$(document).ready(function(){
	/* ---------- Slider Swiper Start ---------- */
	var swiper = new Swiper('.slider .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	});
	/* ---------- Slider Swiper End ---------- */
	/* ---------- Slider-Project Swiper Start ---------- */
	var swiper = new Swiper('.project-slider .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	});
	/* ---------- Slider-Project Swiper End ---------- */
	/* ---------- Slider-Project Swiper Start ---------- */
	var swiper = new Swiper('.project-product .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			992: {
			slidesPerView: 2,
			spaceBetween: 20,
			},
			768: {
			slidesPerView: 1,
			spaceBetween: 20,
			}
		}
	});
	/* ---------- Slider-Project Swiper End ---------- */
	/* ---------- Slider-Project Swiper Start ---------- */
	var swiper = new Swiper('.products-details .swiper-container', {
		slidesPerView: 5,
		spaceBetween: 20,
		loop: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			992: {
			slidesPerView: 3,
			spaceBetween: 20,
			},
			768: {
			slidesPerView: 2,
			spaceBetween: 20,
			}
		}
	});
	/* ---------- Slider-Project Swiper End ---------- */
	/* ---------- Slider-Customers Swiper Start ---------- */
	var swiper = new Swiper('.customers .swiper-container', {
		slidesPerView: 6,
		spaceBetween: 20,
		loop: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			992: {
			slidesPerView: 4,
			spaceBetween: 20,
			},
			768: {
			slidesPerView: 3,
			spaceBetween: 20,
			},
			575: {
			slidesPerView: 2,
			spaceBetween: 20,
			}
		}
	});
	/* ---------- Slider-Customers Swiper End ---------- */
	/* ---------- Slider-Customers Swiper Start ---------- */
	var swiper = new Swiper('.testimony .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 30,
		slidesPerGroup: 2,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
		  el: '.testimony .swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			992: {
			slidesPerView: 1,
			spaceBetween: 10,
			slidesPerGroup: 1,
			}
		}
	});
	/* ---------- Slider-Customers Swiper End ---------- */
});