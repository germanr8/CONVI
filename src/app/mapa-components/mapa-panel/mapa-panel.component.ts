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
  alcaldiasDatos = fetchJSON("../../assets/geojson/alcaldias.geojson");
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
  }
  async onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
    L.geoJSON(await this.alcaldiasDatos).addTo(map);
  }
}

function fetchJSON(url) {
  return fetch(url).then(function(response) {
    return response.json();
  });
}
