$(document).ready(function () {
  //mobile menu
  $('.top-navbar-toggler').on('click', function () {
    $('.navigation').toggleClass('menu-open');
  });

  $('.navigation li').on('mouseleave', function () {
    $(this).removeClass('dropdownShow');
  });
});