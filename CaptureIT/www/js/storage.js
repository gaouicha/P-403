function submitForm(){
	console.log('submitForm executed');
	console.log(document.forms["exp"].elements["title"].value);
	var titre=document.forms["exp"].elements["title"].value;
	window.localStorage.setItem("title",titre);
	return true;
}