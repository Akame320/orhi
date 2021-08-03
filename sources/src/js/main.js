$(document).ready(function () {

    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.menu-list').slideToggle(300)
        if (!$(this).hasClass('active')) {
            $('.click-menu').find('.sub-menu__wrapper').slideUp(300)
        }
    })

    $('.main-slider-js').slick({
        arrows: false,
        dots: true,
        appendDots: $('.main-section__dots-inner'),
        adaptiveHeight: true,
        slidesToScroll: 1,
        slidesToShow: 1
    })

    if($('.selector__slide-inner')[0]){
        $('.selector__slide-inner').on('click', function () {
            selectorClick(this)
        })

        function selectorClick(thisClick) {
            let str = $(thisClick).attr('data-active');
            $('.selector__slide-inner').removeClass('active');
            $(thisClick).addClass('active');
            $('.selector-main-active').removeClass('selector-main-active')
            $(str).addClass('selector-main-active')
        }

        if ($(window).innerWidth() < 1025) {
            $('.selector__slider').slick({
                slidesToShow: 2,
                nextArrow: $('.selector__arrow.selector__arrow-next'),
                prevArrow: $('.selector__arrow.selector__arrow-prev'),
                appendDots: $('.selector__dots'),
                dots: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            })

            $('.selector__slider').on('afterChange', function (currentSlide) {
                var beforeActiveElem = $('.selector__slider').find('.slick-active').eq(0).find('.selector__slide-inner')[0];
                var thisClick = $(beforeActiveElem);
                selectorClick(thisClick)
            })

            var beforeActiveElem = $('.selector__slider').find('.slick-active').eq(0).find('.selector__slide-inner')[0];
            var thisClick = $(beforeActiveElem);
            selectorClick(thisClick)
        } else {
            $('.selector__slide-inner')[0].click();
        }
    }

    $('.click-menu').on('click', function () {
        $(this).find('.sub-menu__wrapper').slideToggle(300)
    })



    $('.reviews-section__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        nextArrow: $('.reviews-section__arrow-next'),
        prevArrow: $('.reviews-section__arrow-prev'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "15rem"
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "2rem"
                }
            },
        ]
    })

    $('.contacts-section__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: $('.contacts-section__arrow-next'),
        prevArrow: $('.contacts-section__arrow-prev'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    })

    if ($(window).innerWidth() < 767) {
        $('.services-section__data').slick({
            infinite: true,
            dots: true,
            nextArrow: $('.services-section__arrow-next'),
            prevArrow: $('.services-section__arrow-prev')
        })

        $('.how-section__data').slick({
            infinite: true,
            centerMode: true,
            centerPadding: 50,
            dots: true,
            appendDots: $('.how-section__dots0-mb'),
            nextArrow: $('.how-section__arrow-next'),
            prevArrow: $('.how-section__arrow-prev')
        })

        $('.item-section__data.slider-1').slick({
            infinite: true,
            arrows: true,
            prevArrow: $('.item-section__arrow-prev'),
            nextArrow: $('.item-section__arrow-next'),
        })

        $('.item-section__data.slider-1').on('beforeChange', function () {
            $('.item-section__col-text').slideUp(300)
        })
        $('.item-section__data.slider-1').on('afterChange', function () {
            $('.item-section__data.slider-1').slick('setPosition')
        })

    }

    if ($(window).innerWidth() < 1600) {
        $('.zone-section__img').slick({
            infinite: true,
            dots: true,
            prevArrow: $('.zone-section__arrow-prev'),
            nextArrow: $('.zone-section__arrow-next')
        })
    }

    if ($(window).innerWidth() < 1023) {

        $('.price-section__data-wrapper.style-4.slider-data-0').slick({
            arrows: false,
            dots: true,
            appendDots: $('.price-section__dots.slider-data-0')
        })

        $('.price-section__data-wrapper.style-4.slider-data-1').slick({
            arrows: false,
            dots: true,
            appendDots: $('.price-section__dots.slider-data-1')
        })

        $('.price-section__data-wrapper.style-4.slider-data-2').slick({
            arrows: false,
            dots: true,
            appendDots: $('.price-section__dots.slider-data-2')
        })

        $('.price-section__data-wrapper.style-4.slider-data-3').slick({
            arrows: false,
            dots: true,
            appendDots: $('.price-section__dots.slider-data-3')
        })

        $('.price-section__data-wrapper.style-4.slider-data-4').slick({
            arrows: false,
            dots: true,
            appendDots: $('.price-section__dots.slider-data-4')
        })


        $('.slider-data-111').slick({
            dots: true,
            appendDots: $('.slider-data-111-dots'),
            nextArrow: $('.arrow-slider-1111-next'),
            prevArrow: $('.arrow-slider-1111-prev')
        })

        $('.more-section__data.slider.slider-1').on('afterChange', function (currentSlide) {
            var beforeActiveElem = $('.slider-data-111').find('.slick-active').eq(0).find('.more-section__link')[0];

            var remove = $(beforeActiveElem).attr('data-all');
            var active = $(beforeActiveElem).attr('data-active');
            var thisClick = $(beforeActiveElem);
            clickDataActive(remove, active, thisClick);
        })


        $('.more-section__data.slider.slider-2').slick({
            nextArrow: $('.more-section__arrow-next'),
            prevArrow: $('.more-section__arrow-prev')
        })

        $('.more-section__data.slider.slider-2').on('afterChange', function () {
            var beforeActiveElem = $('.slider-data-222').find('.slick-active').eq(0).find('.more-section__link')[0];

            var remove = $(beforeActiveElem).attr('data-all');
            var active = $(beforeActiveElem).attr('data-active');
            var thisClick = $(beforeActiveElem);
            clickDataActive(remove, active, thisClick);
        })
    }

    $('.description__btn').on('click', function () {
        $(this).next().slideToggle(300);
        $(this).toggleClass('active')
    })

    $(' a.item-section__col-btn').on('click', function () {
        $(this).next().slideToggle(300);
        $(this).toggleClass('active')
    })


    //Скролл и шапка (серая)
    $(window).on('scroll', toggleVisibleHeaderTop);
    toggleVisibleHeaderTop();


    function toggleVisibleHeaderTop() {
        if ($(window).scrollTop() !== 0) {
            $('#header-top').slideUp(200)
            $('.main-section').addClass('active')
        } else {
            $('#header-top').slideDown(200)
            $('.main-section').removeClass('active')
        }
    }

    $('.video-open').magnificPopup({
        type: 'iframe',
        patterns: {
            youtube: {
                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                id: 'v=', // String that splits URL in a two parts, second part should be %id%
                // Or null - full URL will be returned
                // Or a function that should return %id%, for example:
                // id: function(url) { return 'parsed id'; }

                src: 'watch?v=O3i6WwmcySs' // URL that will be set as a source for iframe.
            }
        }
    })

    $('.close-popup-region').on('click', function () {
        $('#popup-region').removeClass('visible')
        $('.open-popup-region').removeClass('active')
    })

    $('.open-popup-region').on('click', function () {
        $('#popup-region').addClass('visible')
        $(this).addClass('active')
    })

    $('.intro-section__list-btn').on('click', function () {
        $(this).prev().slideToggle(300);
        $(this).toggleClass('active')
        $(this).toggleClass('no-active')
    })

    $('.no-cart').removeClass('active')
    $('.yes-cart').addClass('active')

    $('.price-section__dots-button').on('click', function () {

        if ($(this).hasClass('no-cart')) {
            $('.yes-cart').removeClass('active')
            $('.no-cart').addClass('active')

        } else if ($(this).hasClass('yes-cart')) {
            $('.no-cart').removeClass('active')
            $('.yes-cart').addClass('active')
        } else {

        }
    })

    $('.portfolio-section__slider').slick({
        nextArrow: $('.portfolio-section__arrow-next'),
        prevArrow: $('.portfolio-section__arrow-prev'),
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        appendDots: $('.portfolio-section__slider-dots'),
        centerMode: true,
        centerPadding: '10rem',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    centerPadding: '10rem',
                }
            },
            {
                breakpoint: 1030,
                settings: {
                    centerPadding: '2rem',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '3rem',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    })

    $('.allservices-section__slider.slide-1').slick({
        nextArrow: $('.allservices-section__arrow-next'),
        prevArrow: $('.allservices-section__arrow-prev'),
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        appendDots: $('.allservices-section__dots'),
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    })

    $('[data-active]').on('click', function () {
        var remove = $(this).attr('data-all');
        var active = $(this).attr('data-active');

        clickDataActive(remove, active, this)
    })

    function clickDataActive(remove, active, thisClick) {
        $(`.${remove}`).removeClass('active')
        $(`.${active}`).addClass('active')

        $('[data-all="' + remove + '"]').removeClass('active')
        $(thisClick).addClass('active')

        if ($(window).innerWidth() < 1023) {
            $('.price-section__data-wrapper.style-4.slider-data-0').slick('setPosition');
            $('.price-section__data-wrapper.style-4.slider-data-1').slick('setPosition');
            $('.price-section__data-wrapper.style-4.slider-data-2').slick('setPosition');
            $('.price-section__data-wrapper.style-4.slider-data-3').slick('setPosition');
            $('.price-section__data-wrapper.style-4.slider-data-4').slick('setPosition');
        }
    }


    //Price page tab
    $('.price-item').addClass('none')
    $('.section').addClass('none')
    $('.team').addClass('none')

    clickDataActive('price', 'price-1', $('[data-active="price-1"]'))
    clickDataActive('section', 'section-1', $('[data-active="section-1"]'))
    clickDataActive('team', 'team-1', $('[data-active="team-1"]'))

    if ($(window).innerWidth() < 767) {
        $('.team').css('display', 'none');
    }

    $('.open-price-popup').on('click', function () {
        $('#popup-price').addClass('active')
    })

    $('.close-price-popup').on('click', function () {
        $('#popup-price').removeClass('active')
    })

    $('.close-select-region').on('click', function () {
        $('#select-region').removeClass('active')
    })


    if (!localStorage.getItem('visit')) {
        $('#select-region').addClass('active')
        localStorage.setItem('visit', true);
    }

    setTimeout(function () {
        var yandexAPI = ymaps;
        var city = yandexAPI.geolocation.city

        $('.select-region__text-out').text(city + " ?")
    }, 2000)

    setNavigation();

    function setNavigation() {
        var path = window.location.pathname;
        path = path.replace(/\/$/, "");
        path = decodeURIComponent(path);

        $(".menu-list a").each(function () {
            var href = $(this).attr('href');
            if (path.indexOf(href) !== -1) {
                $(this).addClass('active');
            }
        });
    }

    var allCities = [];

    var getDB = new XMLHttpRequest();
    getDB.open('POST', '../php/getDB.php');
    getDB.send();
    getDB.responseType = "json";
    getDB.onload = () => {
        allCities = getDB.response;

        var outElem = '';
        for (var elem of allCities) {
            str = '';
            str += `<li><a href="${elem.link}">${elem.name}</a></li>`

            outElem += str;
        }

        $('.out-cities').html(outElem);
    }
});