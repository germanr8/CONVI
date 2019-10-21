import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { MapaService } from '../../services/mapa.service';
import { Reporte } from '../../models/Reporte';

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
}
