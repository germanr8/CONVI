import { Injectable } from "@angular/core";
import { latLng, tileLayer, circle, polygon, marker } from "leaflet";

@Injectable({
  providedIn: "root"
})
export class MapaService {
  mapOptions;
  alcaldiasDatos;
  constructor() {}

  construirMapa() {
    this.mapOptions = {
      layers: [
        tileLayer(
          "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieWFpcnB2IiwiYSI6ImNrMG9jaTV0YTA5OGIzbG44YXVpcTdzNWcifQ.N79zLQXiNC_GmGttSGcIUQ",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: "mapbox.streets",
            accessToken:
              "pk.eyJ1IjoieWFpcnB2IiwiYSI6ImNrMG9jaTV0YTA5OGIzbG44YXVpcTdzNWcifQ.N79zLQXiNC_GmGttSGcIUQ"
          }
        )
      ],
      overlays: {},
      zoom: 10,
      center: latLng([19.35, -99.128]),
      zoomControl: false, // Oculta los controles de zoom
      dragging: false, // Evita que el usuario mueva el mapa con drag del mouse
      scrollWheelZoom: false, // Evita que el usuario mueva el mapa con el ratón del mouse
      doubleClickZoom: false, // Evita que el usuario haga zoom con doble click
      touchZoom: false,
      boxZoom: false,
      keyboard: false
    };

    return this.mapOptions;
  }
  fetchJSON(url) {
    return fetch(url).then(function(response) {
      return response.json();
    });
  }
  getAlcaldiasDatos() {
    this.alcaldiasDatos = this.fetchJSON(
      "../../assets/geojson/alcaldias.geojson"
    );
    return this.alcaldiasDatos;
  } /*
  getColor(d) {
    return (d = "002"
      ? "#800026"
      : (d = "003"
          ? "#BD0026"
          : (d = "004"
              ? "#E31A1C"
              : (d = "005"
                  ? "#FC4E2A"
                  : (d = "006"
                      ? "#FD8D3C"
                      : (d = "007"
                          ? "#FEB24C"
                          : (d = "008" ? "#FED976" : "#FFEDA0")))))));
  }
  style(features) {
    return {
      fillColor: this.getColor(features.properties.cve_mun),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7
    };
  }*/
}
