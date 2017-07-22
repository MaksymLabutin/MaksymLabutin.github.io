$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
    $('#logoStatic ').removeClass('hovered');
  } else {
    $('nav').removeClass('shrink');
    $('#staticLogo ').addClass('hovered');
  }
});
