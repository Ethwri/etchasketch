

$(document).ready(function() {
	var skBox = '<div class="sketch"></div>';
	for(var gridRow=0; gridRow<16; gridRow++) {
		$('#canvas').append('<div class = "row">');
		for(var gridWidth=0; gridWidth<16; gridWidth++) {
			$('.row').last().append(skBox);
		};
		$('#canvas').append('</div>');
	};

	
	
	$('.sketch').mouseenter(function() {
		$(this).css("background-color", "black");
	});
});


