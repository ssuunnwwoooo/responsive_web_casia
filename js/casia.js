$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        }
        else {
            $('.header').removeClass('on')
        }
    }); //탑배너 - 스크롤 내릴 때 배경 바뀜 

    $('.mainSlide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });

    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev')
    });
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext')
    });

})