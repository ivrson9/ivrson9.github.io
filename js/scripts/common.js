jQuery( document ).ready( function( $ ){

	// set language
	var customLocale = $.cookie('customLocale');
	setLanguage(customLocale);

	// Intro size setup

	setupIntro(); // On ready, resize intro

	$( window ).resize( function() { setupIntro(); } ); // On resize

	function setupIntro() {
		var infoBox = $('.info' );
		var titleBox = $( '.info').find('.container');
		$( '.info' ).find( '.container' ).css( 'top', ( ( infoBox.height() - titleBox.height() - 20 ) / 2) + 'px' );
	}

	$('progress').each(function(){
		var progress = $(this);
		var percentage = $(this).attr('value');

		$(this).parent().append($('<span id=\'percentage\'>'+percentage+'%</span>'));
		$(this).parent().children('#percentage').css({
			"top": "-18px",
			"left": "50%",
			"width": "20px",
			"position": "relative",
			"display": "inline-block",
			"font-size": "0.9em",
			"font-weight": "bolder",
			"color": "#fff",
		});
	});

	// Making navigation sticky on scroll

	$( '#nav' ).sticky( { topSpacing:30 } );

	$( '#nav ul' ).onePageNav( { scrollSpeed: 400 } );

	$(window).scroll(function(){
		if($(window).scrollTop() < $(window).height()/2) {
			$('#nav').find('li').removeClass('current');
		}
	});

	// Portfolio sorter initialization
	$( '.projects' ).mixitup( {
		targetSelector: '.project',	// Class required on each portfolio item
		filterSelector: '.filter', // Class required on each filter link
		effects: ['rotateZ'],
		easing: 'snap'
	} );

	// Portfolio items zoom / popover
	$( '.image-popup' ).magnificPopup( {type: 'image' } );

	$( '.video-popup' ).magnificPopup( {type: 'iframe' } ); // Supports YouTube, Vimeo and Google Maps links.

	$('.gallery').each(function() { // the containers for all your galleries should have the class gallery
		$(this).magnificPopup({
			delegate: 'a', // the container for each your gallery items
			type: 'image',
			gallery:{enabled:true}
		});
	});

	// Portfolio item :hover overlay
	$( '.project-wrap' ).hover(
		function () {
			$( this ).find( '.project-links' ).animate( { top: 0 }, 'fast' );
		},
		function () {
			$( this ).find( '.project-links' ).animate( { top: 100 + '%' }, 'fast' );
		}
	);

	// Full background image
	$( '.fx-backstretch' ).find( '.info' ).backstretch( 'http://ivrson9.github.io/img/3.jpg' ); // Replace backstrech.jpg with your own image

});