$(document).ready(function(){
	
    $(".image").hover(
		function(){
			$(this).find(".caption").show(1000);
		},
		function(){
			$(this).find('.caption').hide(1000);
		}

	);
	$(".image").hover(function(){
    $(this).stop().animate({"opacity": 0.7},"slow");
    },function(){
    $(this).stop().animate({"opacity": 1},"slow");
});
	$(".sentense").append(".");
	$(".yuzu_button").append(".");
	$(".button_side").append(".");

	$("#hey_there").click(
		function(){
		$("#speak").fadeIn();
	    });
	
	$("#self_intro").click(
		function(){
		$("#speak").fadeOut();
	    });

    $("#options").children().hover(function(){
		$(this).css("color","red")

	});
	
	$("#no").hover(function(){
		$(this).text("YES")

	});

	$("#no").hover(function(){
		$(this).css("font-weight","bold")

	});

	$("#twitter").hover(function(){
		$("#twi_link").fadeIn();

	});
	$("#twi_link").click(function(){
		$(this).remove();

	});
	$(".caption").click(function(){
		$(this).find("h2").addClass("liked");
	});
	$("#hey_there").click(function(){
		$(".interest").after("<p><3</p>");
	});
	

});


