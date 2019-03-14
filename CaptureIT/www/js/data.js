function getAllValue(){
	var time = new Date().toLocaleTimeString('fr-FR', { hour12: false, 
                                             hour: "numeric", 
                                             minute: "numeric"});
	var date = new Date().toLocaleDateString();

	var map = {};
	$(".form :input").each(function() {map[$(this).attr("name")] = $(this).val();});
	map['time']=time;
	map['date']=date;
	return map;
};

function get_id(){
	if (localStorage.getItem("id_count") === null) {
		localStorage.setItem("id_count",1);
		return 1;
		}
	else{
		var id = parseInt(localStorage.getItem("id_count"))+1;
		localStorage.setItem("id_count",id);
		return id;
		}
};

$( document ).ready(function(){
	$("#share").click(function(event) { 
		localStorage.setItem("exp"+get_id(),JSON.stringify(getAllValue()));
    });
});