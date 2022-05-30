$(function () {
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        fade: true,
    });

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true
    });
});