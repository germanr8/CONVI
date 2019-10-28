import { Injectable } from '@angular/core';
import { Alerta } from '../models/Alerta';
import { Alert } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  todasAlertas: Alerta[] = [];
  recentImages: string[] = [];
  constructor() {}

  getTodasAlertas() {
    /* WARNING: Cambiar! Está hardcodeado!! */
    let a1 = new Alerta();
    a1.autor = 'Anónimo';
    a1.fecha = '13 de septiembre del 2019';
    a1.url = '../../../assets/img/ejem_alerta_amber.jpg';

    let a2 = new Alerta();
    a2.autor = 'Juan Luis Pérez';
    a2.fecha = '17 de septiembre del 2020';
    a2.url = '../../../assets/img/ejem_alerta_amber2.jpg';

    let a3 = new Alerta();
    a3.autor = 'Anónimo';
    a3.fecha = '26 de octubre del 2019';
    a3.url = '../../../assets/img/ejem_alerta_amber3.jpg';

    this.todasAlertas = [a1, a2, a3];
    return this.todasAlertas;
  }

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

  getCantidadAlertas() {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return Math.floor(Math.random() * 5) + 2;
  }
}
