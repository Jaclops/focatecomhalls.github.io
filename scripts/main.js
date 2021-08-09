$(document).ready(function(){
  $('.slick').slick({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  });
  $('.slick-2').slick({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  });

  $('.btn-menu').on('click', function(){
    $('.submenu').toggleClass('show');
  });

  $(".demo").TimeCircles({
  start: true,
  // determines whether or not TimeCircles should start immediately.
  animation: "smooth",
  // smooth or ticks. The way the circles animate can be either a constant gradual rotating, slowly moving from one second to the other.
  count_past_zero: true,
  // This option is only really useful for when counting down. What it does is either give you the option to stop the timer, or start counting up after you've hit the predefined date (or your stopwatch hits zero).
  circle_bg_color: "#AD2B2A",
  // determines the color of the background circle.
  use_background: true,
  // sets whether any background circle should be drawn at all.
  fg_width: 0.1,
  //  sets the width of the foreground circle.
  bg_width: 1.2,
  // sets the width of the backgroundground circle.
  text_size: 0.05,
  // This option sets the font size of the text in the circles.
  total_duration: "Auto",
  // This option can be set to change how much time will fill the largest visible circle.
  direction: "Clockwise",
  // "Clockwise", "Counter-clockwise" or "Both".
  use_top_frame: false,
  start_angle: 0,
  // This option can be set to change the starting point from which the circles will fill up.
  time: {
    //  a group of options that allows you to control the options of each time unit independently.
  Days: {
  show: false,
  text: "Days",
  color: "#FC6"
  },
  Hours: {
  show: false,
  text: "Hours",
  color: "#9CF"
  },
  Minutes: {
  show: true,
  text: "Minutes",
  color: "#FFF"
  },
  Seconds: {
  show: true,
  text: "Seconds",
  color: "#FFF"
  }
  }
  })
});

(function(){
  var togglers = document.querySelectorAll('.toggler'),
    img = document.querySelector('.menu'),
    navbars = document.querySelector('.navbar')

function transformFormat(){
  togglers[0].classList.toggle('animation0');
  togglers[1].classList.toggle('hide');
  togglers[2].classList.toggle('animation2');
  navbars.classList.toggle('show');
}
img.addEventListener('click', transformFormat);
})()
