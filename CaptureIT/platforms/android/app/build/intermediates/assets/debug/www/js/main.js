$( document ).ready(function() {
	// Show hide message 
    $(".exp").click(function(event) {
    	if ($(this).children(".exp_content").is(":hidden")){
    		$(this).children(".exp_content").show(250);
    	}else{
    		$(this).children(".exp_content").hide(250);
    	}
    });

    $("#list_switch").click(function(event) {  
    	$("#list_exps").show();
    });


    $("#map_switch").click(function(event) {   
    	$("#list_exps").hide();
    });

    $('#ham').click(function(event) {    
    	$("#menu_panel").css("display", "grid");;
    });
    mouse_is_inside=false
    $("#menu_panel").hover(function(){ 
        mouse_is_inside=true; 
    }, function(){ 
        mouse_is_inside=false; 
    });

    $("body").mouseup(function(){ 
        if(! mouse_is_inside) $("#menu_panel").hide();
    });


    $('#get_map').click(function() {
          $('#map_container').css("left","50%");
      });
      $('#close_map').click(function() {
          $('#map_container').css("left","150%");
      });

});





