import { Component, OnInit } from "@angular/core";
import { ReportesService } from "../../services/reportes.service";
import { MapaService } from "../../services/mapa.service";
import { Reporte } from "../../models/Reporte";
import * as L from "leaflet";

@Component({
  selector: "app-mapa-panel",
  templateUrl: "./mapa-panel.component.html",
  styleUrls: ["./mapa-panel.component.scss"]
})
export class MapaPanelComponent implements OnInit {
  options;
  cifraHomicidios;
  cifraRoboAutos;
  cifraSecuestros;
  alcaldiasDatos;
  alcaldiaID;
  geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };
  reportes: Reporte[] = [];
  constructor(
    private reportesService: ReportesService,
    private mapaService: MapaService
  ) {}

  ngOnInit() {
    /* La implementación probablemente tenga que cambiar para que se muestren primero
    los datos de toda la CDMX y después cambie dependiendo de la alcaldía que se eliga */
    this.options = this.mapaService.construirMapa();
    this.reportes = this.reportesService.getReportesRecientes();
    this.cifraHomicidios = this.reportesService.getCifraHomicidios();
    this.cifraRoboAutos = this.reportesService.getCifraRoboAutos();
    this.cifraSecuestros = this.reportesService.getCifraSecuestros();
    this.alcaldiasDatos = this.mapaService.getAlcaldiasDatos();
    console.log(this.alcaldiasDatos);
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
        color: "#94dee3",
        dashArray: "",
        fillOpacity: 0.7
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
    function resetHighlight(e) {
      alcaldias.resetStyle(e.target);
    }

    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
      this.alcaldiaID = e.target.feature.properties.cve_mun;
      document.getElementById("myText").innerHTML = this.alcaldiaID;
      console.log(this.alcaldiaID);
    }

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
        case "002":
          return { color: "#870505" };
        case "003":
          return { color: "#873305" };
        case "004":
          return { color: "#875105" };
        case "005":
          return { color: "#877c05" };
        case "006":
          return { color: "#6b8705" };
        case "007":
          return { color: "#378705" };
        case "008":
          return { color: "#058774" };
        case "009":
          return { color: "#057187" };
        case "010":
          return { color: "#055387" };
        case "011":
          return { color: "#052e87" };
        case "012":
          return { color: "#280587" };
        case "013":
          return { color: "#570587" };
        case "014":
          return { color: "#710587" };
        case "015":
          return { color: "#87055e" };
        case "016":
          return { color: "#870532" };
        case "017":
          return { color: "#87051d" };
      }
    }
    alcaldias = L.geoJSON(await this.alcaldiasDatos, {
      onEachFeature: onEachFeature,
      style: style
    }).addTo(map);
  }
}
