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
  order: string = "DESC";
  reporteResult;
  currentUser;
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
    this.currentUser = this.authenticationService.currentUserValue;
    console.log(this.currentUser);
    this.reportes = await this.reportesService.getTodosReportes(this.order);
  }

  async cambiarOrden(value) {
    console.log(<string>value);
    this.order = <string>value;
    this.reportes = await this.reportesService.getTodosReportes(this.order);
    console.log(this.reportes);
  }

  get f() {
    return this.reporteForm.controls;
  }

  enviarReporte() {
    var formData: any = new FormData();
    formData.append("titulo", this.reporteForm.get("titulo").value);
    formData.append("autor", this.reporteForm.get("autor").value);
    formData.append("alcaldia", this.reporteForm.get("alcaldia").value);
    formData.append("direccion", this.reporteForm.get("direccion").value);
    formData.append("descripcion", this.reporteForm.get("descripcion").value);
    this.reportesService.publicarReporte(this.reporteForm.value);
    this.reporteForm.reset();
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
