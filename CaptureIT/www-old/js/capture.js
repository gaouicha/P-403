window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

// Fonction d'initialisation de la carte
function initMap(lat,lon) {

// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a la classe "loaction"
        var macarte = null;
        macarte = L.map('map').setView([lat, lon], 11);
        console.log("macarte"+ macarte);
        console.log("appel d'initMap");
        // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            // Il est toujours bien de laisser le lien vers la source des données
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
        }).addTo(macarte);
        var marker = L.marker([lat, lon]).addTo(macarte);

}

/*function geoloc(){ // ou tout autre nom de fonction
var geoSuccess = function(position) { // Ceci s'exécutera si l'utilisateur accepte la géolocalisation
  startPos = position;
  lat = startPos.coords.latitude;
  lon = startPos.coords.longitude;
  console.log("lat: "+lat+" - lon: "+lon);
  initMap(lat,lon);

};

var geoFail = function(){ // Ceci s'exécutera si l'utilisateur refuse la géolocalisation
  console.log("refus");
};

console.log("appel de navigator");
navigator.geolocation.getCurrentPosition(geoSuccess,geoFail);
};

geoloc();
*/
initMap(48.3591969,-4.5705157);

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