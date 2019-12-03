import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ReportesService } from "../../services/reportes.service";
import { MapaService } from "../../services/mapa.service";
import { Reporte } from "../../models/Reporte";
import { GobService } from "../../services/gob.service";
import * as L from "leaflet";

@Component({
  selector: "app-mapa-panel",
  templateUrl: "./mapa-panel.component.html",
  styleUrls: ["./mapa-panel.component.scss"]
})
export class MapaPanelComponent implements OnInit {
  isLoading: boolean = false;
  options;
  cifraViolaciones;
  cifraSecuestros;
  cifraRoboAutos;
  alcaldiasDatos;
  alcaldiaID;

  reportes: Reporte[] = [];

  constructor(
    private reportesService: ReportesService,
    private mapaService: MapaService,
    private changeDetectorRef: ChangeDetectorRef,
    private Gob: GobService
  ) {}

  ngOnInit() {
    this.options = this.mapaService.construirMapa();
    this.alcaldiasDatos = this.mapaService.getAlcaldiasDatos();
    this.cifraViolaciones = "~";
    this.cifraRoboAutos = "~";
    this.cifraSecuestros = "~";
    this.Gob.setAnio("0");
  }

  async setDatos() {
    this.isLoading = true;
    this.changeDetectorRef.detectChanges();
    console.log("Loading");
    this.cifraViolaciones = await this.Gob.getViolacion(this.alcaldiaID);
    this.cifraSecuestros = await this.Gob.getSecuestro(this.alcaldiaID);
    this.cifraRoboAutos = await this.Gob.getRoboAuto(this.alcaldiaID);
    this.reportes = this.reportesService.getReportesRecientes(this.alcaldiaID);
    this.isLoading = false;
    console.log("DONE");
  }

  async setAnio(event: any) {
    await this.Gob.setAnio(event.target.value);
    await this.setDatos();
  }

  async onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);

    var alcaldias;

    function sobresaltarAlcaldia(e) {
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
    function eliminarResaltado(e) {
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
    const clickOnAlcaldia = async e => {
      //Alcaldia ID
      this.alcaldiaID = e.target.feature.properties.cve_mun;
      //Datos
      await this.setDatos();
      // Detectar cambios de forma manual
      this.changeDetectorRef.detectChanges();
    };

    function onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.cve_mun) {
        layer.bindPopup(feature.properties.nomgeo);
      }
      layer.on({
        mouseover: sobresaltarAlcaldia,
        mouseout: eliminarResaltado,
        click: clickOnAlcaldia
      });
    }

    //Color de las alcaldias y delimitacion geografica por Leaflet
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
