var main = function() {

  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 400);

    $('body').animate({
      left: "285px"
    }, 400);
	$('.icon-menu').animate({
      left: "285px"
    }, 400);
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 400);

    $('body').animate({
      left: "0px"
    }, 400);
	$('.icon-menu').animate({
      left: "0px"
    }, 400);
  });
  $('#menu1').mouseenter(function() {
	$('#menu1').animate({
		height: "70px"
	}, 200);
  });
  $('#menu1').mouseleave(function() {
	$('#menu1').animate({
		height: "35px"
	}, 200);
  });
  $('#menu2').mouseenter(function() {
	$('#menu2').animate({
		height: "70px"
	}, 200);
  });
  $('#menu2').mouseleave(function() {
	$('#menu2').animate({
		height: "35px"
	}, 200);
  });
  $('#menu3').mouseenter(function() {
	$('#menu3').animate({
		height: "70px"
	}, 200);
  });
  $('#menu3').mouseleave(function() {
	$('#menu3').animate({
		height: "35px"
	}, 200);
  });
  $('#menu4').mouseenter(function() {
	$('#menu4').animate({
		height: "70px"
	}, 200);
  });
  $('#menu4').mouseleave(function() {
	$('#menu4').animate({
		height: "35px"
	}, 200);
  });

};
$(document).ready(main);