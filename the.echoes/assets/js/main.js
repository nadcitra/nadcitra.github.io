$(document).ready(function () {
  $(".menu").click(function () {
    $(".essay").addClass("slide");
    $(".close").addClass("show");
  });

  $(".close").click(function () {
    $(".essay").removeClass("slide");
    $(".close").removeClass("show");
  });









   $( function() {
    $( ".bbg").draggable();
  } );

     $( function() {
    $( ".bgg").draggable();
  } );


});