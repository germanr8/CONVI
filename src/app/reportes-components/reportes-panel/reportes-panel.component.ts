import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MapaService } from '../../services/mapa.service';
import { Reporte } from '../../models/Reporte';

@Component({
  selector: 'app-reportes-panel',
  templateUrl: './reportes-panel.component.html',
  styleUrls: ['./reportes-panel.component.scss']
})
export class ReportesPanelComponent implements OnInit {
  showReportes;
  showFormulario;
  reporteForm: FormGroup;
  nombreAlcaldia;
  alcaldias = [
    'Tlalpan',
    'Venustiano Carranza',
    'Azcapotzalco',
    'Iztacalco',
    'Iztapalapa',
    'Miguel Hidalgo',
    'Magdalena Contreras',
    'Coyoacan',
    'Milpa Alta',
    'Tláhuac',
    'Benito Juárez',
    'Cuajimalpa de Morelos',
    'Gustavo A. Madero',
    'Cuauhtémoc',
    'Álvaro Obregón',
    'Xochimilco'
  ];
  constructor(private formBuilder: FormBuilder) {
    this.showReportes = true;
    this.showFormulario = false;

    this.reporteForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      anonimato: ['', Validators.required],
      alcaldia: ['', Validators.required],
      direccion: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {}
}
