

$(document).ready(function() {
	var skBox = '<div class="sketch"></div>';
	$('#canvas').append(skBox);
	$('#canvas').append(skBox);
	$('#canvas').append(skBox);
	$('#canvas').append(skBox);
	$('#canvas').append(skBox);
	$('.sketch').mouseenter(function() {
		$(this).css("background-color", "black");
	});
});


