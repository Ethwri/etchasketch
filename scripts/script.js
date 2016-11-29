var roygbiv = 0;
function rainbowHover() {
		roygbiv++;
		if (roygbiv == 7) {
			roygbiv = 0
		}
	}

$(document).ready(function() {
	var skBox = '<div class="sketch"></div>';
	for(var gridRow=0; gridRow<16; gridRow++) {
		$('#canvas').append('<div class = "row">');
		for(var gridWidth=0; gridWidth<16; gridWidth++) {
			$('.row').last().append(skBox);
		};
		$('#canvas').append('</div>');
	};

	
	//hover : black
	/*
	$('.sketch').mouseenter(function() {
		$(this).css("background-color", "black");
	});
	*/
	
		// hover : rainbow 
	
	var rainbowColour = ["#e40013", "#ff5f3c", "#fcf651", "#00bc38", "#009df8", "#08077b", "#320993" ]
	
	
		
	$('.sketch').mouseenter(function() {
		rainbowHover();
		$(this).css("background-color", rainbowColour[roygbiv]);
	});
	
	
	
	
	
});


