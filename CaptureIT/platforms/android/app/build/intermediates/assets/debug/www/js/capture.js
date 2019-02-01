
function geoloc(){ // ou tout autre nom de fonction
var geoSuccess = function(position) { // Ceci s'exécutera si l'utilisateur accepte la géolocalisation
  startPos = position;
  lat = startPos.coords.latitude;
  lon = startPos.coords.longitude;
  console.log("lat: "+lat+" - lon: "+lon);
  var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {

// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a la classe "loaction"
        macarte = L.map('map').setView([lat, lon], 11);
        // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            // Il est toujours bien de laisser le lien vers la source des données
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
        }).addTo(macarte);
        var marker = L.marker([lat, lon]).addTo(macarte);
    }
window.onload = function(){
// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
initMap(); 
};
};
var geoFail = function(){ // Ceci s'exécutera si l'utilisateur refuse la géolocalisation
  console.log("refus");
};
// La ligne ci-dessous cherche la position de l'utilisateur et déclenchera la demande d'accord
navigator.geolocation.getCurrentPosition(geoSuccess,geoFail);
}
geoloc();


var constraints = { video: true, audio: false };
const cameraView = document.querySelector("#camera--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),
      cameraTrigger = document.querySelector("#camera--trigger")

function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};

window.addEventListener("load", cameraStart, false);
