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
		animationEffect: "zoom-in-out",
		animationDuration : 300,
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
	$('.partners-slider').flickity({
		prevNextButtons: false,
		pageDots: false,
		accessibility: false,
		contain: true,
		imagesLoaded: true,
		percentPosition: true,
		freeScroll: true,
		wrapAround: true,
		freeScrollFriction: 0.15
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
$(window).on('load',function () {
	var myCounters = $('.js-counter');
	myCounters.numberAnimate({
		animationTimes: [100, 1500, 100]
	});
	myCounters.waypoint(function () {
		var this_counter = $(this.element);
		var this_num = this_counter.data('counter');
		this_counter.numberAnimate('set', this_num);
	}, {
		offset: '80%'
	});
});
/***********************
Counters END
***********************/