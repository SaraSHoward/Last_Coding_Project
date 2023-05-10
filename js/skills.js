console.log("anything");
// $(document).ready(function(){
//     $(".SkillBoxes").hover(function(){
//     //   $(".SkillBoxes").fadeOut();
//     //   $(".SkillBoxes").fadeIn(3000);
//     $(".SkillBoxes").animate({left: '250px'});
//     });
//   });
//   $(document).ready(function(){
//     $(".LeftColumnStuff").hover(function(){
//     //   $(".SkillBoxes").fadeOut();
//     //   $(".SkillBoxes").fadeIn(3000);
//     $(".LeftColumnStuff").css({"background-color": "white", "font-size": "120%"});
//     });
//   });
// $(document).ready(function(){
//   $( "li" ).hover(function() {
//     $( this ).fadeOut( 500, function() {
//     $( this ).fadeIn( 0 );
// });
//   });
// });
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