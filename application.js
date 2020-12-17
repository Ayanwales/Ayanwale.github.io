    function myFunction() {
  var x, text;

  //Get the value of the input field with id="guess"
  x = document.getElementById("guess").value;

  // If x is Not a Number or less than one or greater than 100
  //if (isNaN(x) || x < 0 || x > 100) {
  	if (x < 50) {
  	text = "feedback_colder";	
  	} else if (x > 50){
  		text = "feedback_hotter";
  	} 
  	else{
  		text = "feedback_neither";
  	}
    document.getElementById("feedback_waiting").innerHTML = text;
  } 
  function myFuction() {
  var elem = document.getElementById("thermometer-mercury.thermometer-top");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
    }
  }
}