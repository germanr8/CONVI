import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ReportesService } from "../../services/reportes.service";
import { Reporte } from "../../models/Reporte";
import { AuthenticationService } from "../../services/authentication.service";
import { Usuario } from "src/app/models/Usuario";

@Component({
  selector: "app-reportes-panel",
  templateUrl: "./reportes-panel.component.html",
  styleUrls: ["./reportes-panel.component.scss"]
})
export class ReportesPanelComponent implements OnInit {
  userExists: boolean = false;
  order: string = "DESC";
  reporteResult;
  currentUser;
  showReportes: boolean;
  showFormulario: boolean;
  reporteForm: FormGroup;
  nombreAlcaldia;
  reportes: any;
  success: boolean = false;
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
    private reportesService: ReportesService,
    private authenticationService: AuthenticationService
  ) {
    this.showReportes = true;
    this.showFormulario = false;

    this.reporteForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      autor: ["", Validators.required],
      alcaldia: ["", Validators.required],
      direccion: ["", Validators.required],
      descripcion: ["", Validators.required]
    });
  }

  async ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.currentUser = this.authenticationService.currentUserValue[0];
      if (this.currentUser) this.userExists = true;
    }

    this.reportes = await this.reportesService.getTodosReportes(this.order);
  }

  async cambiarOrden(value) {
    this.order = <string>value;
    this.reportes = await this.reportesService.getTodosReportes(this.order);
  }

  get f() {
    return this.reporteForm.controls;
  }

  enviarReporte() {
    this.reportesService.publicarReporte(this.reporteForm.value);
    this.success = true;
    this.reporteForm.reset();
  }

  mostrarReportes() {
    this.showReportes = true;
    this.showFormulario = false;
  }

  mostrarFormulario() {
    this.showReportes = false;
    this.showFormulario = true;
    this.success = false;
  }
}
