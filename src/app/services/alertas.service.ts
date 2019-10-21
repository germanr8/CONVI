import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  /* WARNING: Cambiar! Está hardcodeado!! */
  /* Este servicio se tendrá que cambiar para conseguir las 
  3 imágenes más recientes de reportes de alerta Amber, la idea
  es que se consigan de una base de datos */
  ph1 = '../../../assets/img/ejem_alerta_amber.jpg';
  ph2 = '../../../assets/img/ejem_alerta_amber2.jpg';
  ph3 = '../../../assets/img/ejem_alerta_amber3.jpg';
  recentImages: string[] = [this.ph1, this.ph2, this.ph3];

  constructor() {}

  getAlertasRecientes() {
    return this.recentImages;
  }
}
