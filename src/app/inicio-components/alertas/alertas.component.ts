import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent implements OnInit {
  images = []; // 3 imágenes más recientes de reportes de alerta amber
  constructor(private alertasService: AlertasService) {
    this.images = alertasService.getAlertasRecientes();
  }

  ngOnInit() {}
}
