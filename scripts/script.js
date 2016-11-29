var roygbiv = 0;
function rainbowHover() {
		roygbiv++;
		if (roygbiv == 7) {
			roygbiv = 0
		}
	}

	
	

function randHex() {
	var randColour = new Array();
	var randTemp = 0 ;
	 // =[hex1, hex2, hex3, hex4, hex5, hex6 ]
	var hexCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c" ,"d", "e", "f" ]
	var count = 6;
	while(count >= 0) {
		randTemp = Math.floor(Math.random() * 15) + 0 ;
		randColour.push(hexCode[randTemp]);
		count--;
	}	
    return randColour[0] + randColour[1] +randColour[2] + randColour[3] + randColour[4] + randColour[5];
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
	/*
	var rainbowColour = ["#e40013", "#ff5f3c", "#fcf651", "#00bc38", "#009df8", "#08077b", "#320993" ]
		
	$('.sketch').mouseenter(function() {
		rainbowHover();
		$(this).css("background-color", rainbowColour[roygbiv]);
	});
	*/
	
	
	// hover : random
		
	$('.sketch').mouseenter(function() {
		var randomCol = "#" + randHex();
		$(this).css("background-color", randomCol);
		
	
	});
});


