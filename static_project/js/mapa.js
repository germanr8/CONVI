var L;
var mymap = L.map("mapid").setView([19.3978, -99.1269], 11);
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieWFpcnB2IiwiYSI6ImNrMG9jaTV0YTA5OGIzbG44YXVpcTdzNWcifQ.N79zLQXiNC_GmGttSGcIUQ", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "pk.eyJ1IjoieWFpcnB2IiwiYSI6ImNrMG9jaTV0YTA5OGIzbG44YXVpcTdzNWcifQ.N79zLQXiNC_GmGttSGcIUQ"
}).addTo(mymap);
var popup = L.popup();
function clickEnMapa(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on("click", clickEnMapa);
