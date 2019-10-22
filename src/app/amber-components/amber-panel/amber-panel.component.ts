import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../../services/alertas.service';
import { Alerta } from '../../models/Alerta';

@Component({
  selector: 'app-amber-panel',
  templateUrl: './amber-panel.component.html',
  styleUrls: ['./amber-panel.component.scss']
})
export class AmberPanelComponent implements OnInit {
  showAlertas: boolean;
  showInformacion: boolean;
  alertas: Alerta[] = [];
  constructor(private alertasService: AlertasService) {}

  ngOnInit() {
    this.alertas = this.alertasService.getTodasAlertas();
    this.showAlertas = true;
    this.showInformacion = false;
  }

  mostrarAlertas() {
    this.showAlertas = true;
    this.showInformacion = false;
  }

  mostrarInformacion() {
    this.showAlertas = false;
    this.showInformacion = true;
  }
}
