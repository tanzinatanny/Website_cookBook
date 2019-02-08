'use strict';
// SLIDESHOW
$(function() {

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});

// END OF SLIDESHOW

// TURN.JS FLIPBOOK

  $(window).ready(function(){
     console.log('I ran');
      // $('.book').turn({
      //   display: 'double',
      //   acceleration: true,
      //   elevation: 50,
      //   autocenter: true
      // });
      $(".book").turn({
  		width: 400,
  		height: 300,
  		autoCenter: true
	   });
  });


  $(window).bind('keydown', function(e){

      if (e.keyCode==37)
        $('.book').turn('previous');
      else if (e.keyCode == 39)
        $('.book').turn('next');
  });























  // end
