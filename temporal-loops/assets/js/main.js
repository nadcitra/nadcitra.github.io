$(document).ready(function(){
	console.log("I'm Ready")
 
  $(".s-1").click(function () {
    $(".p-1").addClass("show");
  });

  $(".p-1-close").click(function () {
    $(".p-1").removeClass("show");
  });

  $(".s-2").click(function () {
    $(".p-2").addClass("show");
  });

  $(".p-2-close").click(function () {
    $(".p-2").removeClass("show");
  });

  $(".s-3").click(function () {
    $(".p-3").addClass("show");
  });

  $(".p-3-close").click(function () {
    $(".p-3").removeClass("show");
  });

  $(".s-4").click(function () {
    $(".p-4").addClass("show");
  });

  $(".p-4-close").click(function () {
    $(".p-4").removeClass("show");
  });



});