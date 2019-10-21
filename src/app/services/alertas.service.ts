import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  recentImages: string[] = [];
  constructor() {}

  getAlertasRecientes() {
    /* WARNING: Cambiar! Está hardcodeado!! */
    /* Este servicio se tendrá que cambiar para conseguir las 
    3 imágenes más recientes de reportes de alerta Amber, la idea
    es que se consigan de una base de datos */
    let ph1 = '../../../assets/img/ejem_alerta_amber.jpg';
    let ph2 = '../../../assets/img/ejem_alerta_amber2.jpg';
    let ph3 = '../../../assets/img/ejem_alerta_amber3.jpg';
    this.recentImages = [ph1, ph2, ph3];
    return this.recentImages;
  }
}
