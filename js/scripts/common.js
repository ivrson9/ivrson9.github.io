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

	// circle chart
	$('progress').each(function(){
		var progress = $(this);
		var percentage = $(this).attr('value');

		$(this).parent().append($('<span id=\'percentage\'>'+percentage+'%</span>'));
		$(this).parent().children('#percentage').css({
			"top": "-18px",
			"width": "45%",
			"position": "relative",
			"display": "inline-block",
			"font-size": "0.9em",
			"font-weight": "bolder",
			"color": "#80bfff",
			"text-align": "right"
		});
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
	$('.backstretch').find('.info').backstretch('img/3.jpg'); // Replace backstrech.jpg with your own image

	function map_initialize() {
		var mapLocation = new google.maps.LatLng('52.525967', '13.438136'); // 지도에서 가운데로 위치할 위도와 경도
		var markLocation = new google.maps.LatLng('52.526143', '13.484337'); // 마커가 위치할 위도와 경도

		var mapOptions = {
			center: mapLocation, // 지도에서 가운데로 위치할 위도와 경도(변수)
			zoom: 13, // 지도 zoom단계
			scrollwheel : false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		// id: map-canvas, body에 있는 div태그의 id와 같아야 함
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		var size_x = 70; // 마커로 사용할 이미지의 가로 크기
		var size_y = 70; // 마커로 사용할 이미지의 세로 크기

		// 마커로 사용할 이미지 주소
		var image = new google.maps.MarkerImage(
			'./img/home_location.png',
			null,
			null,
			null,
			new google.maps.Size(size_x, size_y));

		var marker;
		marker = new google.maps.Marker({
			position: markLocation, // 마커가 위치할 위도와 경도(변수)
			map: map,
			icon: image, // 마커로 사용할 이미지(변수)
			//             info: '말풍선 안에 들어갈 내용',
			title: 'Home' // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
		});

		var content = "Home"; // 말풍선 안에 들어갈 내용

		// 마커를 클릭했을 때의 이벤트. 말풍선 뿅~
		var infowindow = new google.maps.InfoWindow({ content: content});
			google.maps.event.addListener(marker, "click", function() {
				infowindow.open(map,marker);
		});
	}
	google.maps.event.addDomListener(window, 'load', map_initialize);

});
