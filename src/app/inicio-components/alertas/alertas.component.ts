import { Component, OnInit } from "@angular/core";
import { AlertasService } from "../../services/alertas.service";

@Component({
  selector: "app-alertas",
  templateUrl: "./alertas.component.html",
  styleUrls: ["./alertas.component.scss"]
})
export class AlertasComponent implements OnInit {
  alertas = []; // 3 imágenes más recientes de reportes de alerta amber
  images = true;
  constructor(private alertasService: AlertasService) {}

  async ngOnInit() {
    this.alertas = await this.alertasService.getAlertasRecientes();
  }
}
