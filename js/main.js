
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-project-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin: 100,
        nav: true,
        navText: ['<i class="fa fa-caret-left""></i>', '<i class="fa fa-caret-right""></i>']
    });
    // $('.active-banner-slider').owlCarousel({
    //     items:1,
    //     loop:true,
    //     margin: 100,
    //     dots: true
    // });
    // Add smooth scrolling to Menu links

 });
