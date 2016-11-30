function colourSelector(checked) {
	if(checked) {
	//default hover : black
	$('.sketch').mouseenter(function() {
			$(this).css("background-color", "black");
			});	
	};
	
	/*  Colour Selector  */
		if($('#black').is(':checked')) {
			//hover : black
			$('.sketch').mouseenter(function() {
			$(this).css("background-color", "black");
			});
		};
		
		
		if($('#rainbow').is(':checked')) {
			//rainbow function
			var roygbiv = 0;
			function rainbowHover() {
				roygbiv++;
				if (roygbiv >= 7) {
				roygbiv = 0;
				}
			}
			
			//hover : rainbow
			var rainbowColour = ["#e40013", "#ff5f3c", "#fcf651", "#00bc38", "#009df8", "#08077b", "#320993" ]
			$('.sketch').mouseenter(function() {
			rainbowHover();
			$(this).css("background-color", rainbowColour[roygbiv]);
			});
		};
		
		
		if($('#random').is(':checked')) {
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

			
			//hover : random
			$('.sketch').mouseenter(function() {
			var randomCol = "#" + randHex();
			$(this).css("background-color", randomCol);
			});
		};
		
	/*  /Colour Selector  */
};


	

$(document).ready(function() {
	
	var skBox = '<div class="sketch"></div>';
	var x = $('#grid-width').val();
	var y = $('#grid-height').val();
		
	// Div Generator
	for(var gridRow=0; gridRow<y; gridRow++) {
		$('#canvas').append('<div class = "row"></div>');
		
	};
	for(var gridWidth=0; gridWidth<x; gridWidth++) {
			$('.row').append(skBox);
		};
	
	
	
	
	$('.grid-size').on("keyup change", function() {
		
		x = $('#grid-width').val();
		y = $('#grid-height').val();
		if(x>80) {
			x=80;
			$('#grid-width').val(80);
		}
		if(y>80) {
			y=80;
			$('#grid-height').val(80);
		}
		$('.row').remove();
		for(var gridRow=0; gridRow<y; gridRow++) {
		$('#canvas').append('<div class="row"></div>');
		
		};
		for(var gridWidth=0; gridWidth<x; gridWidth++) {
			$('.row').append(skBox);
		};
		colourSelector(false);
	});
		
	
		
	
	
	colourSelector(true);
	$('.colour').click(function() {
	colourSelector(true);
	});

	
});


