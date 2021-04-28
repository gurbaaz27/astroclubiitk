$(function() {
    $("body").toggleClass("page-dark-mode");
    $('#change-skin').on('click', function () {
      $("body").toggleClass("page-dark-mode");
      BeautifulJekyllJS.initNavbar();
    });
  });