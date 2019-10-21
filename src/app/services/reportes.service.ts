import { Injectable } from '@angular/core';
import { Reporte } from '../models/Reporte';
import { compilePipeFromRender2 } from '@angular/compiler/src/render3/r3_pipe_compiler';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  ultimosReportes: Reporte[] = [];
  constructor() {}

  getReportesRecientes(/* Tendra que recibir el nombre de la alcaldia como parametro */) {
    /* WARNING: Cambiar! Está hardcodeado!! */
    /* Este servicio se tendrá que cambiar para conseguir los 3 últimos reportes
    de la alcaldía que el usuario eliga */
    let com1 = new Reporte();
    com1.titulo = 'Robo en bazar de Sta. Anita';
    com1.autor = 'Anónimo';
    com1.fecha = '16 de septiembre del 2019';
    com1.direccion = 'Ejidos de Bartalomé, 313';
    com1.descripcion =
      'El día viernes sufrí un robo en el mercado de Sta. Anita por parte de un señor de altura aprox. de 1.70 mts con una sudadera roja y jeans.';

    let com2 = new Reporte();
    com2.titulo = 'Intento de secuestro en Lomas Estrella';
    com2.autor = 'María J.';
    com2.fecha = '21 de octubre del 2019';
    com2.direccion = 'Lomas Estrella #25';
    com2.descripcion =
      'Me intentaron secuestrar en la esquina de la calle que da con vista al arroyo...';

    this.ultimosReportes = [com1, com2];

    return this.ultimosReportes;
  }

  getCifraHomicidios(/* Tendra que recibir el nombre de la alcaldia como parametro */) {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return 11;
  }

  getCifraRoboAutos(/* Tendra que recibir el nombre de la alcaldia como parametro */) {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return 7;
  }

  getCifraSecuestros(/* Tendra que recibir el nombre de la alcaldia como parametro */) {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return 5;
  }
}
