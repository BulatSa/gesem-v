/***********************
 отправка формы в php BEGIN
***********************/
$(function(){

	$(".ajax-form").on("submit", function(event) {
		var form = $(this);
		var send = true;
		event.preventDefault();

		form.find("[data-req='true']").each(function(){
			if ($(this).val() === "") {
				$(this).addClass('error');
				send = false;
			}
			if ($(this).is('select')){
					if ($(this).val() === null) {
					$(this).addClass('error');
					send = false;
				}
			}
			if ($(this).is('input[type="checkbox"]')){
				if ($(this).prop('checked') !== true) {
					$(this).addClass('error');
					send = false;
				}
			}
		});

		form.find("[data-req='true']").on('focus', function(){
			$(this).removeClass('error');
		});

		var form_data = new FormData(this);

		$("[data-label]").each(function () {
			var input_name = $(this).attr('name');
			var input_label__name = input_name + '_label';
			var input_label__value = $(this).data('label').toString();
			form_data.append(input_label__name,input_label__value);
		});

		if (send === true) {
			$.ajax({
				type: "POST",
				async: true,
				url: "/send.php",
				cache: false,
				contentType: false,
				processData: false,
				data: form_data,
				success: (function(result) {
					var response = JSON.parse(result);
					console.log(response);
					$.fancybox.close();
					if (response["MAILER_ERROR"] !== undefined){
						$.fancybox.open({src  : '#modal-error'});
					} else {
						$.fancybox.open({src  : '#modal-thanks'});
						setTimeout(function() {$.fancybox.close();},4500);
						form[0].reset();
						var inputs = form.find('.input');
						inputs.removeClass('not_empty');
					}
				})
			});
		}
	});

	var inputs = $('.input__text');

	inputs.on('focus',function () {
		var this_input = $(this).parent('.input');
		this_input.addClass('not_empty');
	});

	inputs.on('focusout',function () {
		var self = $(this);
		var this_input = self.parent('.input');
		setTimeout(function () {
			if (self.val() === ""){
				this_input.removeClass('not_empty');
			}
			else{
				this_input.addClass('not_empty');
			}
		},100);
	});

});
/***********************
 отправка формы в php END
***********************/


/***********************
Input mask BEGIN
***********************/
$(function(){
	$("input[type='tel']").mask("+7 (999) 999-99-99");
});
/***********************
Input mask END
***********************/


/***********************
 fancybox BEGIN
 ***********************/
function init_fancy() {
	$('.fancy').fancybox({
		buttons : ['close'],
		backFocus : false,
		animationDuration : 500,
		transitionEffect : "slide"
	});
	$('.fancy-map').fancybox({
		toolbar: false,
		smallBtn : true,
		backFocus : false,
		animationEffect: "zoom-in-out",
		animationDuration : 300,
		transitionEffect : "slide"
	});
}

function init_fancy__video() {
	$('.fancy-video').fancybox({
		toolbar: false,
		smallBtn : true,
		backFocus : false,
		animationEffect: "zoom-in-out",
		animationDuration : 300,
		transitionEffect : "slide",
		youtube: {
			controls : 1,
			showinfo : 0,
			autoplay: 1
		},
		onUpdate : function( instance, current ) {
			var width,
				height,
				ratio = 16 / 9,
				video = current.$content;
			if ( video ) {
				video.hide();
				width  = current.$slide.width() - 30;
				height = current.$slide.height() - 100;
				if ( height * ratio > width ) {
					height = width / ratio;
				} else {
					width = height * ratio;
				}
				video.css({
					width  : width,
					height : height
				}).show();
			}
		}
	});
}

$(function(){
	init_fancy();
	init_fancy__video();
});
/***********************
 fancybox END
 ***********************/


/***********************
 Прокрутка к секциям BEGIN
 ***********************/
$(function(){
	$('.scrollto').on('click',function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').stop().animate({scrollTop:destination}, 1000);
		return false;
	});
});
/***********************
 Прокрутка к секциям END
 ***********************/


/***********************
Mob menu BEGIN
***********************/
$(function(){
	$('.burger').on('click',function () {
		$(this).toggleClass('active');
		$('.mob-panel').toggleClass('active');
		$('.l-site-wrapper').toggleClass('active');
	});

	$(document).on('click touchstart',function (e){
		var div = $(".head-nav,.burger");
		if (!div.is(e.target) && div.has(e.target).length === 0){
			$('.burger').removeClass('active');
			$('.mob-panel').removeClass('active');
			$('.l-site-wrapper').removeClass('active');
		}
	});
});
/***********************
Mob menu END
***********************/


/***********************
Partners-slider BEGIN
***********************/
$(function(){
	var logo_slider = $('.logos-slider').show();
	logo_slider.offsetHeight;
	logo_slider.flickity({
		cellSelector: '.logo',
		prevNextButtons: false,
		pageDots: false,
		accessibility: false,
		contain: true,
		imagesLoaded: true,
		percentPosition: true,
		wrapAround: true
	});

	logo_slider.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
		if (!cellElement) {
			return;
		}
		$(cellElement).find('.fancy').trigger('click');
	});
});
/***********************
Partners-slider END
***********************/


/***********************
 Waypoints BEGIN
 ***********************/
$(function(){
	$('.anim').waypoint(function () {
		var elem = $(this.element);
		elem.toggleClass('animated');
	}, {
		offset: '80%'
	});
});
/***********************
 Waypoints END
 ***********************/


/***********************
Counters BEGIN
***********************/
$(function($){
	function number_to(element,from,to,duration){
		var start = new Date().getTime();
		setTimeout(function() {
			var now = (new Date().getTime()) - start;
			var progress = now / duration;
			var result = Math.floor((to - from) * progress + from);
			var text_to_show = progress < 1 ? result : to;
			element.text(text_to_show);
			if (progress < 1) setTimeout(arguments.callee, 10);
		}, 100);
	}

	var counters = $('.js-counter');

	counters.waypoint(function () {
		var this_counter = $(this.element);
		var this_num = this_counter.data('counter');
		if (!this_counter.hasClass('finished')){
			number_to(this_counter,0,this_num,1500);
		}
		this_counter.addClass('finished');
	}, {
		offset: '90%'
	});
});
/***********************
Counters END
***********************/


/***********************
 Partners-slider BEGIN
 ***********************/
$(function(){
	var article_slider = $('.article-slider').show();
	article_slider.offsetHeight;
	article_slider.flickity({
		cellSelector: '.article-slider__item',
		prevNextButtons: false,
		pageDots: false,
		accessibility: false,
		contain: true,
		imagesLoaded: true,
		percentPosition: true
	});

	Waypoint.refreshAll();

	article_slider.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
		if (!cellElement) {
			return;
		}
		$(cellElement).find('.fancy').trigger('click');
	});
});
/***********************
 Partners-slider END
 ***********************/


/***********************
Projec tabs BEGIN
***********************/
$(function($){
	var tab_links = $('.js-project-tabs .tabs__link');
	var services_walls = $('.services-wall');

	function select_project_tab(index) {
		tab_links.removeClass('active');
		tab_links.eq(index).addClass('active');
		services_walls.removeClass('active');
		services_walls.eq(index).addClass('active');
	}

	tab_links.on('click',function () {
		var index = $(this).index();
		select_project_tab(index);
	});

	select_project_tab(0);

});
/***********************
Projec tabs END
***********************/


/***********************
 project-slider BEGIN
 ***********************/
$(function(){
	var project_slider = $('.project-slider').show();
	project_slider.offsetHeight;
	project_slider.flickity({
		cellSelector: '.project-slider__item',
		lazyLoad: true,
		prevNextButtons: true,
		pageDots: false,
		accessibility: true,
		contain: true,
		imagesLoaded: true,
		percentPosition: true,
		arrowShape: {
			x0: 10,
			x1: 60, y1: 50,
			x2: 65, y2: 50,
			x3: 15
		}
	});

	project_slider.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
		if (!cellElement) {
			return;
		}
		$(cellElement).find('.fancy').trigger('click');
	});
});
/***********************
 project-slider END
 ***********************/


/***********************
contacts BEGIN
***********************/
var map;
var locations;
$(function($){
	if ($('#map').length) {
		var markers = [];
		locations = locations_from_admin;
		var normalIcon = {
			url: '/img/contacts/pin.png',
			scaledSize: new google.maps.Size(47, 62)
		};
		var mapOptions = {
			center: new google.maps.LatLng(locations[0][0],locations[0][1]),
			zoom: 16,
			disableDefaultUI: true,
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.LEFT_CENTER
			},
			scrollwheel: false,
			styles: [{"featureType": "water", "elementType": "geometry.fill", "stylers": [{"color": "#d3d3d3"}]}, {"featureType": "transit", "stylers": [{"color": "#808080"}, {"visibility": "off"}]}, {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"visibility": "on"}, {"color": "#b3b3b3"}]}, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}]}, {"featureType": "road.local", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"weight": 1.8}]}, {"featureType": "road.local", "elementType": "geometry.stroke", "stylers": [{"color": "#d7d7d7"}]}, {"featureType": "poi", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"color": "#ebebeb"}]}, {"featureType": "administrative", "elementType": "geometry", "stylers": [{"color": "#a7a7a7"}]}, {"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}]}, {"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}]}, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"color": "#efefef"}]}, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#696969"}]}, {"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"visibility": "on"}, {"color": "#737373"}]}, {"featureType": "poi", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "poi", "elementType": "labels", "stylers": [{"visibility": "off"}]}, {"featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{"color": "#d6d6d6"}]}, {"featureType": "road", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {}, {"featureType": "poi", "elementType": "geometry.fill", "stylers": [{"color": "#dadada"}]}]
		};
		var marker, i;

		map = new google.maps.Map(document.getElementById("map"), mapOptions);

		for (i = 0; i < locations.length; i++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i][0], locations[i][1]),
				map: map,
				icon: normalIcon,
				optimized: false,
				zIndex: 1
			});
			markers.push(marker);
			google.maps.event.addListener(marker, 'click', (function (marker, i) {
				return function () {
					select_contacts_tab(i);
				}
			})(marker, i));
		}

		$(window).on('resize', function () {
			var currCenter = map.getCenter();
			google.maps.event.trigger(map, 'resize');
			map.setCenter(currCenter);
		});


		var tab_links = $('.js-contacts-tabs .tabs__link');
		var cities = $('.city');

		function select_contacts_tab(index) {
			tab_links.removeClass('active');
			tab_links.eq(index).addClass('active');
			$('.city.active').addClass('hid');
			cities.removeClass('active');
			cities.eq(index).addClass('active');
			var latLng = new google.maps.LatLng(locations[index][0], locations[index][1]);
			map.panTo(latLng);
			setTimeout(function () {
				cities.removeClass('hid')
			},600)
		}

		tab_links.on('click',function () {
			var index = $(this).index();
			select_contacts_tab(index);
		});

		select_contacts_tab(0);

	}
});
/***********************
contacts END
***********************/


/***********************
Faq BEGIN
***********************/
$(document).ready(function() {
	if($('.faq__item-title').length) {
		$('.faq__item-title').on('click', function(){
			var $this = $(this);
			var $faqList = $this.parents('.faq__list');
			var $otherItems = $faqList.find('.faq__item-title').not($this).closest('.faq__item');

			$otherItems.removeClass('open');
			$otherItems.find('.faq__item-text').slideUp();

			$this.next('.faq__item-text').slideToggle();
			$this.closest('.faq__item').toggleClass('open');
		});
	}
});
/***********************
Faq END
***********************/