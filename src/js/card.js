$(document).ready(function() {
  //TOP MENU
  $("[data-toggle]").click(function() {
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
    $(".wrap-main__nav").toggleClass("toLeft");
    $(".sidebar__link").toggleClass("link-toLeft");
  });
});
