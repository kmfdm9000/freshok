$(function () {

    let my_range_price = $(".filter-price__input").data("ionRangeSlider");
    const input__from = document.querySelector('input[name=from]');
    input__from.onchange = (e) => {
        const {
            value
        } = e.target;
        console.log(value);
        my_range_price.update({
            from: value
        });
    };
    const input__to = document.querySelector('input[name=to]');
    input__to.onchange = (e) => {
        const {
            value
        } = e.target;
        console.log(value);
        my_range_price.update({
            to: value
        });
    };

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        onStart: function (data) {
            $('.filter-price__from').attr('value', data.from);
            $('.filter-price__to').attr('value', data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').attr('value', data.from);
            $('.filter-price__to').attr('value', data.to);
        },
    });

    $('.top-slider__inner').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="стрелка вправо"></button>',
        arrows: true
    });

    $('.header__cart-btn, .cart-window__close-btn').on('click', function () {

        $('.cart-window').toggleClass('active');
        $('.bg-black').toggleClass('active');
    });

    var dropdown = document.getElementsByClassName("filter-category__btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

    var dropdown = document.getElementsByClassName("filter-offers__btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "flex") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "flex";
            }
        });
    }

    var dropdown = document.getElementsByClassName("filter-brand__btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "flex") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "flex";
            }
        });
    }

    var dropdown = document.getElementsByClassName("filter-price__btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }


    $('.brands-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });
    $('.cart-window__input, .select-style').styler();

    $('.catalog-content__btn').on('click', function () {
        $('.catalog-content__btn').removeClass('active');
        $(this).addClass('active');
    });

    var containerEl1 = document.querySelector('[data-ref="mixer1"]');
    var containerEl2 = document.querySelector('[data-ref="mixer2"]');
    var config = {
        controls: {
            scope: 'local'
        },
        animation: {
            effectsOut: 'fade translateY(-100%)'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
});