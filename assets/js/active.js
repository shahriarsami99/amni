$(function(){
    $('.hero_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    speed: 500,
    dots:true,
});

$('.new_arrival_slider').slick({
    slidesToShow: 4,
    slidesToScroll:1,
    infinite:true,
    prevArrow:'<i class="slider_arrow fa-solid fa-long-arrow-left"></i>',
    nextArrow:'<i class="slider_arrow fa-solid fa-long-arrow-right"></i>',

});

/* Countdown Activation Js Start */

$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime(''
    + '<div><h3>%D</h3><p>days</p></div> '
    +'<span>:</span>'
    + '<div><h3>%H</h3><p>hr</p></div> '
    +'<span>:</span>'
    + '<div><h3>%M</h3><p>min</p></div> '
    +'<span>:</span>'
    + '<div><h3>%S</h3><p>sec</p></div>'));
  });
});
/* Countdown Activation Js End */
$(function(){
  $('.offer_slider').slick({
    slidesToShow:2,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    dotsClass:'offer_slider_dots'
  });
})



});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));