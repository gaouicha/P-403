
function initMap(lat,lon) {
// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a la classe "loaction"
  var macarte = null;
  macarte = L.map('map').setView([lat, lon], 11);
  // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      // Il est toujours bien de laisser le lien vers la source des données
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
      minZoom: 1,
      maxZoom: 20
  }).addTo(macarte);
  var marker = L.marker([lat, lon]).addTo(macarte);
};
function setlocationName(lat,lon){

}

$( document ).ready(function() {

window.cb = function cb(json) {
    document.getElementById('loc_input').value = json.address.suburb;
    document.getElementById('loc_lat').value = json.lat;
    document.getElementById('loc_lon').value = json.lon;
}
function search(lat,lon) {
    var s = document.createElement('script');       
    s.src = 'http://nominatim.openstreetmap.org/reverse?json_callback=cb&format=json&lat='+lat+'&lon='+lon+'&zoom=27&addressdetails=1';
    document.getElementsByTagName('head')[0].appendChild(s);

};

function geoloc(){ 

  var geoSuccess = function(position) { 
    startPos = position;
    lat = startPos.coords.latitude;
    lon = startPos.coords.longitude;
    initMap(lat,lon);
    search(lat,lon);
  };
  var geoFail = function(){ 
    initMap(48.3591969,-4.5705157);
  };

  navigator.geolocation.getCurrentPosition(geoSuccess,geoFail);
};
geoloc();

});
