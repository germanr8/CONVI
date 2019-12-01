import { Component, OnInit } from "@angular/core";
import { ReportesService } from "../../services/reportes.service";
import { Reporte } from "../../models/Reporte";

@Component({
  selector: "app-ultimos-reportes",
  templateUrl: "./ultimos-reportes.component.html",
  styleUrls: ["./ultimos-reportes.component.scss"]
})
export class UltimosReportesComponent implements OnInit {
  reportes: any;
  constructor(private reportesService: ReportesService) {}

  async ngOnInit() {
    this.reportes = await this.reportesService.getUltimosReportes();
  }
}
