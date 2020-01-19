/*global $, console */

$(function() {
    "use strict";
    // active class nav
    $(".navbar-nav .nav-link").click(function() {
        $(this)
            .parent(".nav-item")
            .siblings()
            .children()
            .removeClass("active");
        $(this).addClass("active");
    });

    // hieght video header
    var winH = $(window).height(),
        upperH = $(".upper-nav").innerHeight(),
        down = $(".info-list").innerHeight(),
        navH = $(".navbar").innerHeight();

    $(".mas-vid").height(winH - (upperH + down + navH));

    // Slick Plagen
    $(".slider").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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

    //Window Scroll
    $(window).scroll(function() {
        //scroll To Top Button
        if ($(window).scrollTop() >= $(window).height()) {
            $(".scroll-top i").fadeIn(500);
        } else {
            $(".scroll-top i").fadeOut(200);
        }
    });

    // Pop up
    $(".fa-times").click(function() {
        $(".popup").fadeOut();
    });
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            $(".popup").fadeOut();
        }
    });

    //click button go to top
    $(".scroll-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate(
            {
                scrollTop: 0
            },
            1000
        );
    });

    /* calling script */
    $(".xzoom-5, .xzoom-gallery").xzoom({
        position: "lens",
        lensShape: "circle",
        zoomWidth: 400,
        zoomHeight: 400,
        tint: "#000",
        tintOpacity: 0.5,
        lensOpacity: 0.5
    });
});
