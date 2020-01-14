/*global $, console */

$(function () {
    'use strict';
    // active class nav
    $('.navbar-nav .nav-link').click(function () {
        $(this).parent('.nav-item').siblings().children().removeClass('active');
        $(this).addClass('active');
    });
    
    // hieght video header
    var winH     = $(window).height(),
        upperH   = $('.upper-nav').innerHeight(),
        down     = $('.info-list').innerHeight(),
        navH     = $('.navbar').innerHeight();
    
    $('.mas-vid').height(winH - (upperH + down + navH));
    
    // Slick Plagen
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    
});
