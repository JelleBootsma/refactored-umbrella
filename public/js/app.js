var main = function() {

  $('.icon-menu').click(function() {
    if (matchMedia('(max-width: 600px)').matches){
	$('.menu').animate({
      left: "0px"
    }, 400);

    $('body').animate({
      left: "100%"
    }, 400);
	$('.icon-menu').animate({
      left: "100%"
    }, 400);
	}
	else if (matchMedia('(max-width: 768px)').matches){
	$('.menu').animate({
      left: "0px"
    }, 400);

    $('body').animate({
      left: "25%"
    }, 400);
	$('.icon-menu').animate({
      left: "25%"
    }, 400);
	}
	else{
	$('.menu').animate({
      left: "0px"
    }, 400);

    $('body').animate({
      left: "15%"
    }, 400);
	$('.icon-menu').animate({
      left: "15%"
    }, 400);
	}
  });

  $('.icon-close').click(function() {
	if (matchMedia('(max-width: 600px)').matches){
	
	$('.menu').animate({
      left: "-100%"
    }, 400);

    $('body').animate({
      left: "0px"
    }, 400);
	$('.icon-menu').animate({
      left: "0px"
    }, 400);
	}
	else if (matchMedia('(max-width: 768px)').matches){
	$('.menu').animate({
      left: "-25%"
    }, 400);

    $('body').animate({
      left: "0px"
    }, 400);
	$('.icon-menu').animate({
      left: "0px"
    }, 400);
	}
	else {
	$('.menu').animate({
      left: "-15%"
    }, 400);

    $('body').animate({
      left: "0px"
    }, 400);
	$('.icon-menu').animate({
      left: "0px"
    }, 400);	
	}
  });
  $('#menu1').mouseenter(function() {
	$('#menu1').animate({
		height: "50px"
	}, 200);
	$('#hidden1').css("visibility", "visible");
  });
  $('#menu1').mouseleave(function() {
	$('#menu1').animate({
		height: "25px"
	}, 200);
	$('#hidden1').css("visibility", "hidden");
  });
  $('#menu2').mouseenter(function() {
	$('#menu2').animate({
		height: "50px"
	}, 200);
	$('#hidden2').css("visibility", "visible");
  });
  $('#menu2').mouseleave(function() {
	$('#menu2').animate({
		height: "25px"
	}, 200);
	$('#hidden2').css("visibility", "hidden");
  });
  $('#menu3').mouseenter(function() {
	$('#menu3').animate({
		height: "50px"
	}, 200);
	$('#hidden3').css("visibility", "visible");
  });
  $('#menu3').mouseleave(function() {
	$('#menu3').animate({
		height: "25px"
	}, 200);
	$('#hidden3').css("visibility", "hidden");
  });
  $('#menu4').mouseenter(function() {
	$('#menu4').animate({
		height: "50px"
	}, 200);
	$('#hidden4').css("visibility", "visible");
  });
  $('#menu4').mouseleave(function() {
	$('#menu4').animate({
		height: "25px"
	}, 200);
	$('#hidden4').css("visibility", "hidden");
  });

};
$(document).ready(main);