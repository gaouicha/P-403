function submitForm(){
	var titre=$('[name="title"]').val();

	window.localStorage.setItem("title",titre);
	$.mobile.changePage( "../profile.html", {reverse: false, transition:"slide"});

	$.('#output').html("Title: "+ window.localStorage.getItem("title")+"<br>");
	return true;
}