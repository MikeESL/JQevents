$(document).ready(function() {

//events for top div
	$( ".welcome" ).click(function(event) {
		alert("Thanks for visiting this page!");
	});

	$(".box1").click(function(event){
		$(".box1").siblings().css("background-color", "#E67A7E");
	});

	$(".box2").click(function(event){
		$(".box2").parents().css("background-color", "#EB4905");
	});

	$(".box3").click(function(event){
		$(".box3").closest("section").css("background-color", "#031F07");
	});

	$(".box4").mouseover(function(event){
		$(".box4").siblings().css("background-color", "#9104D0");
	});
	$(".box5").mouseover(function(event){
		$(".box5").parents().css("background-color", "#0E0597")
	});
//events for middle div; trying form validation
	$("form").submit(function(event) {
  		if ($("input:first" ).val() === "jquery") {
    $(".feedback").text("Validated!").show();
    alert("Thank you for typing correctly");
    return;
  }
 
  
  $(".feedback").text("Incorrect, genius!").show().fadeOut(5000);
  alert("No Way!");
  event.preventDefault();
});




//events for third div

	$(".mouse").mouseup(function(event) {
    $(this).append( "<span style='color:black;'>Mouse up.</span>");
  		})
  		.mousedown(function(event) {
    $(this).append( "<span style='color:red;'>Mouse down.</span>");
  		});
  	$(".reset").click(function(event){
  		$("span").empty();
  	});

//events for 4th div
$( "article" ).click(function(event) {
  $( ".eventsD" ).html( " YOU CLICKED ON THE " + event.target.nodeName + " HTML element." );
});

//events for 5th div
function handler(event) {
  var target = $(event.target);
  if (target.is("li")) {
    target.children().toggle();
}
}
$("ul").click(handler).find("ul").hide();



  		



});

