// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//no jQuery used!

//make color picker variable
let color = document.getElementById("colorPicker").value

//change color event listener
document.getElementById("colorPicker").addEventListener("change", function(){
	//when user changes the colour picker then assign color variable to new change
	color = document.getElementById("colorPicker").value;
});

//select cell to be coloured event listener
document.getElementById("pixel_canvas").addEventListener("click", function(evt){
	//change the colour of the cell that was clicked
	evt.target.style.backgroundColor = color;
});

//submit button event listener for grid spec
document.getElementsByTagName("input")[2].addEventListener("click", function(evt){
	evt.preventDefault(); //preventDefault() to prevent submit button from submitting a form
	//assign inputed height and width to new variables when clicked
	let inputHeight = document.getElementById('input_height').value;
	let inputWidth = document.getElementById('input_width').value;
	//call grid function
	makeGrid(inputHeight,inputWidth);
});