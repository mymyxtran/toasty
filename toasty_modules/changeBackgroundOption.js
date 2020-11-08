var button = document.getElementById("changeBG"); 
var body = document.getElementsByTagName("body");	 
 
	button.addEventListener("changeBG", function () { 
		body[0].style.backgroundImage = "url('./photos/snow_fest.gif')" 
	}); 
