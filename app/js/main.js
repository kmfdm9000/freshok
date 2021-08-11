$(function () {
    $('.top-slider__inner').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="стрелка вправо"></button>',
        arrows: true
    })

    $('.brands-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false
    })
    var containerEl1 = document.querySelector('[data-ref="mixer1"]');
    var containerEl2 = document.querySelector('[data-ref="mixer2"]');
    var mixer1 = mixitup(containerEl1, {
        animation: {
            effectsOut: 'fade translateY(-100%)'
        }
    });


    var mixer2 = mixitup(containerEl2, {
        animation: {
            effectsOut: 'fade translateY(-100%)'
        }
    });
});