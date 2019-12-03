import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartOptions } from "chart.js";
import { ReportesService } from "../../services/reportes.service";
import { AlertasService } from "../../services/alertas.service";
/* Tutorial de:
https://medium.com/codingthesmartway-com-blog/angular-chart-js-with-ng2-charts-e21c8262777f 
*/
@Component({
  selector: "app-grafica",
  templateUrl: "./grafica.component.html",
  styleUrls: ["./grafica.component.scss"]
})
export class GraficaComponent implements OnInit {
  isDataAvailable: boolean = false;
  cantidadReportes = 0;
  cantidadVisitas = Math.floor(Math.random() * (100 - 20)) + 20;
  cantidadAlertas = 0;

  public pieChartLabels = ["Reportes", "Visitas", "Alertas"];
  public pieChartData = [];
  public pieChartType = "pie";
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [
        "rgba(78, 205, 196, 1)",
        "rgba(200, 247, 197, 1)",
        "rgba(135, 211, 124, 1)"
      ]
    }
  ];
  public pieChartOptions: ChartOptions = {
    responsive: true
  };

  constructor(
    private reportesService: ReportesService,
    private alertasService: AlertasService
  ) {}

  async ngOnInit() {
    this.cantidadReportes = await this.reportesService.getCantidadReportes();
    this.cantidadAlertas = await this.alertasService.getCantidadAlertas();
    this.pieChartData = [
      this.cantidadReportes,
      this.cantidadVisitas,
      this.cantidadAlertas
    ];
    this.isDataAvailable = true;
  }
}
