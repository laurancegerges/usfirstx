//Friendly menu
$(".hamburger").click(function () {
  $("#mySidenav").toggleClass("nav_open");
});
$(".dropdown2 a").click(function () {
  $(this).parent().siblings().removeClass("open");
  $(this).parent().toggleClass("open");
});


$(".card-link").click(function () {
  if ($(this).parent().parent().hasClass("active")) {
    $(this).parent().parent().removeClass("active");
  }
  else {
    $(".card-header").removeClass("active");
    $(this).parent().parent().addClass("active");
  }
});
$(".card-link").click(function () {
  if ($(this).parent().hasClass("active")) {
    $(this).parent().removeClass("active");
  }
  else {
    $(".card-header2").removeClass("active");
    $(this).parent().addClass("active");
  }
});

$(".converter").click(function (e) {
  event.preventDefault()
    $(".class_5").toggleClass("inverted");
    $(".class_6").toggleClass("inverted");
    $(".convert_cont .class_5 input").prop("disabled", false);
    $(".convert_cont .class_5.inverted input").prop("disabled", true);
    $(".convert_cont .class_6 input").prop("disabled", true);
    $(".convert_cont .class_6.inverted input").prop("disabled", false);
});