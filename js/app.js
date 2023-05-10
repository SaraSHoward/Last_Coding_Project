$(document).ready(function() {
    $('li').hover(function() {
      $(this).animate({
        marginLeft: '20px'
      }, 500);
    }, function() {
      $(this).animate({
        marginLeft: '0'
      }, 500);
    });
  });