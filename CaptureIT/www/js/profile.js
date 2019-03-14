function get_exps(){
	var exps = new Array()
	for ( var i = 0, len = localStorage.length; i < len; ++i ) {
		key=localStorage.key( i )
		if (key.startsWith("exp")){
			exp=localStorage.getItem(key);
			exps.push(JSON.parse(exp));
		}
	}
	return exps
};
function exp_2_html(exp,i){
	var html = `
	<div class="exp">
  					<img class='pic' src="">
  					<div class="info">
  						<div class="title"></div>
  						<div class="placeNtime">

  							<div class="place">
  								<img src="img/loc.svg" style="width: 10px;">
  								<span></span>
  							</div>
  							<div class="time"></div>
  						</div>
  					</div>
            <div class="exp_content">
            <span class="blue"></span> </br>
            </div>
  	</div>
`;
html=html.replace('src=""','src="'+exp["pic_path"]+'"');
html=html.replace('"title"><','"title">'+exp["title"] +'<');
html=html.replace('<span></span>','<span>'+exp['loc']+'</span>');
html=html.replace('"time"><','"time">'+exp["time"]+' - '+exp["date"]+'<');
html=html.replace('"blue"><','"blue">'+exp['hashtag']+'<');
html=html.replace('</br>','</br>'+exp['message']);
html=html.replace('<div class="exp">','<div class="exp exp'+i+'">');
return html
};



$( document ).ready(function() {
	var i =0;
	all_exps=get_exps();
	all_exps.forEach(function(element) {
  		html=exp_2_html(element,i);
  		$('#list_exps').append(html);
  		i=i+1;
	});
});