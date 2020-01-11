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
    
    
});
