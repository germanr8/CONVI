import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { Reporte } from '../../models/Reporte';

@Component({
  selector: 'app-ultimos-reportes',
  templateUrl: './ultimos-reportes.component.html',
  styleUrls: ['./ultimos-reportes.component.scss']
})
export class UltimosReportesComponent implements OnInit {
  reportes: Reporte[] = [];
  constructor(private reportesService: ReportesService) {}

  ngOnInit() {
    this.reportes = this.reportesService.getUltimosReportes();
  }
}
