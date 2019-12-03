import { Component, OnInit } from "@angular/core";
import { AlertasService } from "../../services/alertas.service";
import { Alerta } from "../../models/Alerta";

@Component({
  selector: "app-amber-panel",
  templateUrl: "./amber-panel.component.html",
  styleUrls: ["./amber-panel.component.scss"]
})
export class AmberPanelComponent implements OnInit {
  showAlertas: boolean;
  showInformacion: boolean;
  alertas: Alerta[] = [];
  order: string = "DESC";
  constructor(private alertasService: AlertasService) {}

  async ngOnInit() {
    this.alertas = await this.alertasService.getTodasAlertas(this.order);
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

  async cambiarOrden(value) {
    this.order = <string>value;
    this.alertas = await this.alertasService.getTodasAlertas(this.order);
  }
}
