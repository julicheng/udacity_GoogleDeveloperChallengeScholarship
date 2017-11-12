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