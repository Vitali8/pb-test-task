$(document).ready(function () {
  //mobile menu
  $('.navigationBar__toggler').on('click', function () {
    $('.navigation').toggleClass('menu-open');
  });

  $('.link').on('mouseenter', function () {
    $(this).closest('li').addClass('dropdownShow');
  }).on('click', function (e) {
    e.preventDefault();
  });

  $('.navigation li').on('mouseleave', function () {
    $(this).removeClass('dropdownShow');
  });

  $('.slider').mySlider();

  // tabs for many block
  function tabs(elRmCl, elAddCl) {
    elRmCl.removeClass('active');
    elAddCl.addClass('active');
  }

  $('.tabs-button a').on('click', function (e) {
    e.preventDefault();
    var clickTab = $(this).attr('data-tab');

    tabs($('.tabs-button a'), $(this));
    tabs($('.active-tab-content > div'), $('div#' + clickTab));
  });

  $('.link').on('click', function () {
    if ($(window).width() < 1024) {
      $('.link').not(this).closest('li').removeClass('dropdownShow');
      $(this).closest('li').toggleClass('dropdownShow');
    }
  });

  // large menu on hover event
  if ('ontouchstart' in window) {
    
    $('body').addClass("touch-device");
  }

});