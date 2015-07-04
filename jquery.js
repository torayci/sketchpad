var gridSize = prompt("Enter desired width of squares.");
var color = "#000000"

//Create grid
$(document).ready(function(){

	for (var i = 0; i < gridSize*gridSize; i++) {
		$('.container').append('<div class = "grid"></div>');
	}
	//Re-size the grid elements
	$(document).on('click','#fitToSize', function(){
	var gridDimensions = 500/gridSize - 4;
	console.log(gridDimensions);
	$('.grid').height(gridDimensions);
	$('.grid').width(gridDimensions);
	});

	//User color change
	$(document).on('click','#colorButton', function(){
		color = prompt("What color would you like to use? ('red, 'yellow', 'blue', 'green', etc)?");
		});

	//Change color of squares when hovering
	$('.grid').hover(function(){
		$(this).css("background-color",color);
		});



});
