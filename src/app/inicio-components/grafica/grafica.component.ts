import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ReportesService } from '../../services/reportes.service';
import { AlertasService } from '../../services/alertas.service';
/* Tutorial de:
https://medium.com/codingthesmartway-com-blog/angular-chart-js-with-ng2-charts-e21c8262777f 
*/
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {
  isDataAvailable: boolean = false;
  cantidadReportes = this.reportesService.getCantidadReportes();
  cantidadReacciones = this.reportesService.getCantidadReacciones();
  cantidadAlertas = this.alertasService.getCantidadAlertas();

  public pieChartLabels = ['Reportes', 'Reacciones', 'Alertas'];
  public pieChartData = [];
  public pieChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(78, 205, 196, 1)',
        'rgba(200, 247, 197, 1)',
        'rgba(135, 211, 124, 1)'
      ]
    }
  ];
  public pieChartOptions: ChartOptions = {
    responsive: true
  };

  constructor(
    private reportesService: ReportesService,
    private alertasService: AlertasService
  ) {
    this.pieChartData = [
      this.cantidadReportes,
      this.cantidadReacciones,
      this.cantidadAlertas
    ];

    this.isDataAvailable = true;
  }

  ngOnInit() {}
}
