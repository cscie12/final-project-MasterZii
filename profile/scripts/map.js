const map = L.map('map').setView([43, -18], 3);

const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>; <a href="https://www.flaticon.com/free-icons/map-marker" title="map marker icons">Map marker icons created by Flat Icons - Flaticon</a>'
}).addTo(map);

var redIcon = new L.Icon({
    iconUrl: '../profile/images/marker.png',
    iconSize: [40, 40], // how much space it takes up
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
});

var homeMarker = L.marker([27.287948, -82.528040], { icon: redIcon }).addTo(map);
homeMarker.bindPopup("My current 1959 Florida home.");

var japanMarker = L.marker([35.159577, 136.885845], { icon: redIcon }).addTo(map);
japanMarker.bindPopup("Where I used to live in Nagoya in 2015 and 2017!");

var egyptMarker = L.marker([30.091737, 31.645679], { icon: redIcon }).addTo(map);
egyptMarker.bindPopup("Where I lived in New Cairo recently.");

var russiaMarker = L.marker([55.752566, 37.619782], { icon: redIcon }).addTo(map);
russiaMarker.bindPopup("My maternal side is from Russia and I also lived here in my youth.");

var franceMarker = L.marker([43.035300, 6.154415], { icon: redIcon }).addTo(map);
franceMarker.bindPopup("I was born on this beach in Hyeres in 1996.");

var mauiMarker = L.marker([20.697159, -156.434594], { icon: redIcon }).addTo(map);
mauiMarker.bindPopup("Stayed here to shoot a series in 2018.");

var canadaMarker = L.marker([46.808581, -71.363263], { icon: redIcon }).addTo(map);
canadaMarker.bindPopup("Visited beautiful Quebec!");

var londonMarker = L.marker([51.503494, -0.118972], { icon: redIcon }).addTo(map);
londonMarker.bindPopup("Was here just before the riots in 2011.");

var caliMarker = L.marker([33.719043, -118.028882], { icon: redIcon }).addTo(map);
caliMarker.bindPopup("Where my family first moved to the USA in 2003.");

var dcMarker = L.marker([38.881762, -77.024835], { icon: redIcon }).addTo(map);
dcMarker.bindPopup("Stayed here for a festival.");

// this map represents places I've been. 
// added a lot more places, changed the basemap, changed the icon, etc. 
