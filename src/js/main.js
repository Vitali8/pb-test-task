$(document).ready(function () {
  //mobile menu
  $('.top-navbar-toggler').on('click', function () {
    $('.navigation').toggleClass('menu-open');
  });

  $('.top-link').on('mouseenter', function () {
    $(this).closest('li').addClass('dropdownShow');
  });

  $('.navigation li').on('mouseleave', function () {
    $(this).removeClass('dropdownShow');
  });

  $('.slider').mySlider();

});