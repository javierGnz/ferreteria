const body = $('body');
const header = $('.header');
var vw = $(window).width();

$(document).ready(function() {
    $('.owl-destacados, .owl-recomendados, .owl-relacionados').owlCarousel({
        dots: true,
        autoplay: true,
        loop: true,
        navText: ["<i class='fit-icon-angle-left'></i>", "<i class='fit-icon-angle-right'></i>"],
        nav: true,
        autoplayTimeout: 7500,
        responsive: {
            0: {
                margin: 10,
                items: 1
            },
            375: {
                margin: 15,
                items: 2
            },
            768: {
                margin: 25,
                items: 3
            },
            992: {
                margin: 25,
                items: 4
            }
        }
    });

    $('.owl-banners').owlCarousel({
        dots: true,
        autoplay: true,
        loop: true,
        navText: ["<i class='fit-icon-angle-left'></i>", "<i class='fit-icon-angle-right'></i>"],
        nav: false,
        items: 1,
        responsive: {
            768: {
                nav: true,
            }
        }
    });

    $('.storage__main-gallery').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 4,
        controls: false,
        galleryMargin: 25,
        thumbMargin: 10,
        addClass: 'gallery-products',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  thumbItem: 3
                }
            }
        ]
    });
});

$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 200) {
        body.addClass('scrolling');
        header.addClass('header--scroll');
    } else {
        body.removeClass('scrolling');
        header.removeClass('header--scroll');
    }
});

$(window).resize(function() {
    vw = $(window).width();
    if (vw <= 991 && $('.header__menu-list').hasClass('is-active')) {
        header.removeClass('header--drop');
        $('.header__menu-list').removeClass('is-active');
    } else if (vw >= 992 && $('.mobile-menu').hasClass('is-open')) {
        header.removeClass('header--drop');
        body.removeClass('lock');
        $('.mobile-menu').removeClass('is-open');
    }
});

$('.quantity-count__btn').click(function() {
    val = parseInt($('.quantity-count__number').val());

    if ($(this).hasClass('less')) {
        val = val - 1;
    } else if ($(this).hasClass('more')) {
        val = val + 1;
    }

    if (val < 1) {
        val = 1;
    }

    $('.quantity-count__number').val(val);
});


$('.footer__up').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

$('.header__singin-button').click(function() {
    header.addClass('header--drop');
    $('.singin').addClass('is-active');
});

$('.mobile-menu__sesion').click(function() {
    header.addClass('header--drop');
    header.addClass('header--show');
    $('.singin').addClass('is-active');
});

$('.singin__close').click(function() {
    header.removeClass('header--drop');
    header.removeClass('header--show');
    $('.singin').removeClass('is-active');
});

$('.header__store-button').click(function() {
    header.addClass('header--drop');
    $('.store').addClass('is-active');
});

$('.mobile-menu__item--location').click(function() {
    header.addClass('header--drop');
    header.addClass('header--show');
    $('.store').addClass('is-active');
});

$('.store__close').click(function() {
    header.removeClass('header--drop');
    header.removeClass('header--show');
    $('.store').removeClass('is-active');
});

$('.header__menu-button, .header__menu > span').mouseenter(function() {
    if (vw >= 992) {
        header.addClass('header--drop');
        $('.header__menu-list').addClass('is-active');
    }
});

$(document).click(function(e) {
    if (!$('.header__menu-list').is(e.target) && $('.header__menu-list').has(e.target).length === 0) {
        header.removeClass('header--drop');
        $('.header__menu-list').removeClass('is-active');
    }
});

$('.toggle').on('click', () => {
  $menu.toggleClass('is-active');
});

$('.header__menu-button, .header__menu > span').click(function() {
    header.addClass('header--drop');

    if (vw >= 992) {
        $('.header__menu-list').addClass('is-active');
    } else {
        body.addClass('lock');
        $('.mobile-menu').addClass('is-open');
    }
});

$('.content__sidenav-trigger').click(function() {
    $(this).toggleClass('open');
    $('.content__list').slideToggle(400);
})

$('.content__order-by-list').click(function(e) {
    e.preventDefault();
    $('.content__grid').addClass('content__grid--list');
})

$('.content__order-by-normal').click(function(e) {
    e.preventDefault();
    $('.content__grid').removeClass('content__grid--list');
})

$('.main-menu__close').click(function() {
    header.removeClass('header--drop');
    $('.header__menu-list').removeClass('is-active');
});

$('.mobile-menu__close').click(function() {
    header.removeClass('header--drop');
    body.removeClass('lock');
    $('.mobile-menu').removeClass('is-open');
});

$('.mobile-menu__expand-link').click(function(e) {
    e.preventDefault();
    let selected = $(this);
    selected.next('ul').addClass('active').end().parent('.has-children').parent('ul').addClass('move-out');
});

$('.mobile-menu__expand-back').on('click', function() {
    var selected = $(this),
        visibleNav = $(this).parent('ul').parent('.mobile-menu__expand').parent('ul');
    selected.parent('ul').removeClass('active').parent('.has-children').parent('ul').removeClass('move-out');
});

$('.content__list-filter > h4').click(function() {
    $(this).parent().toggleClass('content__list-filter--close');
    $(this).parent().find('ul').slideToggle(400);
});
