import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ReportesService } from "../../services/reportes.service";
import { Reporte } from "../../models/Reporte";

@Component({
  selector: "app-reportes-panel",
  templateUrl: "./reportes-panel.component.html",
  styleUrls: ["./reportes-panel.component.scss"]
})
export class ReportesPanelComponent implements OnInit {
  showReportes: boolean;
  showFormulario: boolean;
  reporteForm: FormGroup;
  nombreAlcaldia;
  reportes: any;
  alcaldias = [
    "Tlalpan",
    "Venustiano Carranza",
    "Azcapotzalco",
    "Iztacalco",
    "Iztapalapa",
    "Miguel Hidalgo",
    "Magdalena Contreras",
    "Coyoacan",
    "Milpa Alta",
    "Tláhuac",
    "Benito Juárez",
    "Cuajimalpa de Morelos",
    "Gustavo A. Madero",
    "Cuauhtémoc",
    "Álvaro Obregón",
    "Xochimilco"
  ];
  constructor(
    private formBuilder: FormBuilder,
    private reportesService: ReportesService
  ) {
    this.showReportes = true;
    this.showFormulario = false;

    this.reporteForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      anonimato: ["", Validators.required],
      alcaldia: ["", Validators.required],
      direccion: ["", Validators.required],
      descripcion: ["", Validators.required]
    });
  }

  async ngOnInit() {
    this.reportes = await this.reportesService.getTodosReportes();
  }

  mostrarReportes() {
    this.showReportes = true;
    this.showFormulario = false;
  }

  mostrarFormulario() {
    this.showReportes = false;
    this.showFormulario = true;
  }
}
