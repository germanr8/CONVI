import { Injectable } from '@angular/core';
import { latLng, tileLayer, circle, polygon, marker } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  mapOptions;
  alcaldiasDatos;
  alcaldiasMap;

  constructor() {
    // Construir el Hashmap que mapea ID's con las alcaldías de la CDMX
    this.alcaldiasMap = new Map();
    this.alcaldiasMap.set('002', 'Azcapotzalco');
    this.alcaldiasMap.set('003', 'Coyoacan');
    this.alcaldiasMap.set('004', 'Cuajimalpa de Morelos');
    this.alcaldiasMap.set('005', 'Gustavo A. Madero');
    this.alcaldiasMap.set('006', 'Iztacalco');
    this.alcaldiasMap.set('007', 'Iztapalapa');
    this.alcaldiasMap.set('008', 'La Magdalena Contreras');
    this.alcaldiasMap.set('009', 'Milpa Alta');
    this.alcaldiasMap.set('010', 'Alvaro Obregon');
    this.alcaldiasMap.set('011', 'Tlahuac');
    this.alcaldiasMap.set('012', 'Tlalpan');
    this.alcaldiasMap.set('013', 'Xochimilco');
    this.alcaldiasMap.set('014', 'Benito Juarez');
    this.alcaldiasMap.set('015', 'Cuauhtemoc');
    this.alcaldiasMap.set('016', 'Miguel Hidalgo');
    this.alcaldiasMap.set('017', 'Venustiano Carranza');
  }

  construirMapa() {
    this.mapOptions = {
      layers: [
        tileLayer(
          'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieWFpcnB2IiwiYSI6ImNrMG9jaTV0YTA5OGIzbG44YXVpcTdzNWcifQ.N79zLQXiNC_GmGttSGcIUQ',
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.streets',
            accessToken:
              'pk.eyJ1IjoieWFpcnB2IiwiYSI6ImNrMG9jaTV0YTA5OGIzbG44YXVpcTdzNWcifQ.N79zLQXiNC_GmGttSGcIUQ'
          }
        )
      ],
      overlays: {},
      zoom: 10,
      center: latLng([19.35, -99.128]),
      zoomControl: true, // Oculta los controles de zoom
      dragging: true, // Evita que el usuario mueva el mapa con drag del mouse
      scrollWheelZoom: false, // Evita que el usuario mueva el mapa con el ratón del mouse
      doubleClickZoom: false, // Evita que el usuario haga zoom con doble click
      touchZoom: false,
      boxZoom: false,
      keyboard: false
    };

    return this.mapOptions;
  }

  // Fetch para el GeoJSON del mapa de la CDMX
  fetchJSON(url) {
    return fetch(url).then(function(response) {
      return response.json();
    });
  }

  getAlcaldiasDatos() {
    this.alcaldiasDatos = this.fetchJSON(
      '../../assets/geojson/alcaldias.geojson'
    );
    return this.alcaldiasDatos;
  }
}
