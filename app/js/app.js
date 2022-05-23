import $ from 'jquery'
window.jQuery = $
window.$ = $
import 'slick-carousel'

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	
	// Custom JS

	let slider = $('.slider').slick();
	let currentSlideNumber = document.querySelector('.current')
	let totalSlides = document.querySelector('.total')
	let curenNumber

	slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		curenNumber = nextSlide + 1
		console.log(curenNumber)
		currentSlideNumber.innerHTML = `${curenNumber}`
		totalSlides.innerHTML = `${slick.slideCount}`
	})

	// // slider
	// let slider = $('.slider-for')
	// let currentSlideNumber = document.querySelector('.current')
	// let totalSlides = document.querySelector('.total')
	// let sliderProgress = document.querySelector('.slider-progress')
	// let curenNumber
	// let progressHeight
	// if (window.innerWidth > 480) {
	// 	slider.slick({
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		arrows: false,
	// 		fade: false,
	// 		draggable: true,
	// 		vertical: true,
	// 		infinite: false,
	// 		verticalSwiping: true,
	// 		adaptiveHeight: true,
	// 		speed: 2000,
	// 		responsive: [
	// 			{
	// 			  breakpoint: 1024,
	// 			  settings: {
	// 				vertical: false,
	// 			  }
	// 			},
	// 			{
	// 				breakpoint: 480,
	// 				settings: "unslick",
	// 			  },
	// 		  ]
	// 	});

	// 	slider.on('wheel', (function (e) {
	// 		e.preventDefault();
	// 		if (e.originalEvent.deltaY < 0) {
	// 			$(this).slick('slickNext');
	// 		} else {
	// 			$(this).slick('slickPrev');
	// 		}
	// 	}));
	
	// 	slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 		curenNumber = nextSlide + 1
	// 		progressHeight = (100 / slick.slideCount) * curenNumber
	// 		sliderProgress.style.height = `${progressHeight}%`
	// 		currentSlideNumber.innerHTML = `0${curenNumber}`
	// 		totalSlides.innerHTML = `0${slick.slideCount}`
	// 	});
	// }
	
})
