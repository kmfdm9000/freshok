$(function () {
    $('.top-slider__inner').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="стрелка вправо"></button>',
        arrows: true
    })




    var mixer = mixitup('.top-products__content', {
        animation: {
            effectsOut: 'fade translateY(-100%)'
        }
    });
});