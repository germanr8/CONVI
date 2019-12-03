import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { MapaService } from '../../services/mapa.service';
import { Reporte } from '../../models/Reporte';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa-panel',
  templateUrl: './mapa-panel.component.html',
  styleUrls: ['./mapa-panel.component.scss']
})
export class MapaPanelComponent implements OnInit {
  options;
  cifraHomicidios;
  cifraRoboAutos;
  cifraSecuestros;
  alcaldiasDatos;
  alcaldiaID;
  reportes: Reporte[] = [];
  geojsonMarkerOptions = {
    radius: 8,
    fillColor: '#ff7800',
    color: '#000',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };
  constructor(
    private reportesService: ReportesService,
    private mapaService: MapaService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    /* La implementación probablemente tenga que cambiar para que se muestren primero
    los datos de toda la CDMX y después cambie dependiendo de la alcaldía que se eliga */
    this.options = this.mapaService.construirMapa();
    this.alcaldiasDatos = this.mapaService.getAlcaldiasDatos();
    this.cifraHomicidios = '~';
    this.cifraRoboAutos = '~';
    this.cifraSecuestros = '~';
  }

  async onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);

    var alcaldias;

    function highlightFeature(e) {
      var layer = e.target;

      layer.setStyle({
        weight: 5,
        color: '#94dee3',
        dashArray: '',
        fillOpacity: 0.7
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
    function resetHighlight(e) {
      alcaldias.resetStyle(e.target);
    }

    /* ¿Por qué se hace una arrow function?
     Se hace una arrow function para conservar el contexto de this.
     Mas info en: https://stackoverflow.com/questions/37438934/data-binding-not-updating-when-property-changes-in-angular2
    */
    /* ¿Por qué se pone un changeDetectorRef manual?
    Se pone para detectar cambios en las variables de Angular, ya que el codigo de esta funcion
    cae fuera de la NgZone y no se detecta de forma automática, hay que actualizarla nosotros mismos
    */
    const zoomToFeature = e => {
      // Hacer zoom donde se hizo click en el mapa
      // map.fitBounds(e.target.getBounds());
      this.alcaldiaID = e.target.feature.properties.cve_mun;

      this.reportes = this.reportesService.getReportesRecientes(
        this.alcaldiaID
      );
      console.log(this.reportes);
      this.cifraHomicidios = this.reportesService.getCifraHomicidios(
        this.alcaldiaID
      );
      this.cifraRoboAutos = this.reportesService.getCifraRoboAutos(
        this.alcaldiaID
      );
      this.cifraSecuestros = this.reportesService.getCifraSecuestros(
        this.alcaldiaID
      );
      // Detectar cambios de forma manual
      this.changeDetectorRef.detectChanges();
    };

    function onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.cve_mun) {
        layer.bindPopup(feature.properties.nomgeo);
      }
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    }
    function style(feature) {
      switch (feature.properties.cve_mun) {
        case '002':
          return { color: '#870505' };
        case '003':
          return { color: '#873305' };
        case '004':
          return { color: '#875105' };
        case '005':
          return { color: '#877c05' };
        case '006':
          return { color: '#6b8705' };
        case '007':
          return { color: '#378705' };
        case '008':
          return { color: '#058774' };
        case '009':
          return { color: '#057187' };
        case '010':
          return { color: '#055387' };
        case '011':
          return { color: '#052e87' };
        case '012':
          return { color: '#280587' };
        case '013':
          return { color: '#570587' };
        case '014':
          return { color: '#710587' };
        case '015':
          return { color: '#87055e' };
        case '016':
          return { color: '#870532' };
        case '017':
          return { color: '#87051d' };
      }
    }
    alcaldias = L.geoJSON(await this.alcaldiasDatos, {
      onEachFeature: onEachFeature,
      style: style
    }).addTo(map);
  }
}
