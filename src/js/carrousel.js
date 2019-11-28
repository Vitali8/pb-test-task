(function ($) {
  'use strict';
  //TODO: add sliding by arrows 
  $.fn.mySlider = function (options) {
    var settings = {
      transition: 1000,
      count: 3,
      speed: 2000, //ms'
      auto: true,
      pauseOnHover: true
    },
      i = -settings.count;

    function autoSlide(slider) {
      if (settings.auto) {
        setInterval(move.bind(this, slider, 'right'), settings.speed);
      }
    }

    function renderSlider(slider) {
      slider.wrap("<div class='slider-wrap'></div>");
      $('.slider-wrap').wrap("<div class='slider-container'></div>");
      $('<div class="slider-nav"><button class="arrow-left"></button><button class="arrow-right"></button></div>').appendTo(".slider-wrap");

      renderClone(slider);
    }

    function renderClone(slider) {
      var documentFragmentAppend = $(document.createDocumentFragment()),
        documentFragmentPrepend = $(document.createDocumentFragment()),
        widthMove = slider.find('.slide').outerWidth(true);

      for (var k = 0; k < settings.count; k++) {
        var cloneItemAppend = $(slider.children()[k]).clone(true);
        documentFragmentAppend.append(cloneItemAppend);
      }

      for (var j = slider.children().length - settings.count; j < slider.children().length; j++) {
        var cloneItemPrepend = $(slider.children()[j]).clone(true);
        documentFragmentPrepend.append(cloneItemPrepend);
      }

      documentFragmentAppend.appendTo(slider);
      documentFragmentPrepend.prependTo(slider);

      slider.css({ 'transform': 'translate3D(' + widthMove * i + 'px, 0 ,0)', 'transition': 'initial' });
    }

    function move(slider, direction, clickEvent) {
      var widthMove = slider.find('.slide').outerWidth(true);

      if (direction === "left") {
        i += 1;
      } else {
        i -= 1;
      }

      slider.css({ 'transform': 'translate3D(' + widthMove * i + 'px, 0 ,0)', 'transition': settings.transition + 'ms' });

      if (slider.children().length + i === settings.count) {
        setTimeout(function () {
          i = -settings.count;
          slider.css({ 'transform': 'translate3D(' + widthMove * i + 'px, 0 ,0)', 'transition': 'initial' });
        }, settings.transition);

      } else if (i === 0) {
        setTimeout(function () {
          i = -slider.children().length + settings.count * 2;
          slider.css({ 'transform': 'translate3D(' + widthMove * i + 'px, 0 ,0)', 'transition': 'initial' });
        }, settings.transition);
      }
    }

    return this.each(function () {
      var $this = $(this);

      if (options) {
        $.extend(settings, options);
      }

      renderSlider($this);
      autoSlide($this);

      $(window).resize(function () {
        var widthMove = $this.find('.slide').outerWidth(true);
        $this.css({ 'transform': 'translate3D(' + widthMove * i + 'px, 0 ,0)', 'transition': 'initial' });
      })
    });
  };
})(jQuery);
