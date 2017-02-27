$(document).ready(function(){
	$("form").on("submit", function(event){
		event.preventDefault();
		console.log("Submit!!!");
	});

	// Con Hiperenlaces
	$("a").on("click", function(event){
		console.log("Hiperenlaces: " + this.innerText);
		event.preventDefault();
	});
});