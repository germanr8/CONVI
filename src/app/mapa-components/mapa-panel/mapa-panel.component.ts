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
  estilo;
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
    //var myLayer = L.geoJSON().addTo(map);

    L.geoJSON(await this.alcaldiasDatos, {
      style: function(feature) {
        switch (feature.properties.cve_mun) {
          case "002":
            return { color: "#ff0000" };
          case "003":
            return { color: "#0000ff" };
        }
      }
    }).addTo(map);
    //myLayer.addData(await this.alcaldiasDatos);
  }
}
