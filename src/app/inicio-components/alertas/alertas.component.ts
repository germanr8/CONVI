import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent implements OnInit {
  constructor() {}
  /* Esto se tendrá que cambiar por un service que 
  suministre las imágenes de las últimas alerta amber que
  se han realizado */
  ph1 = '../../../assets/img/ejem_alerta_amber.jpg';
  ph2 = '../../../assets/img/ejem_alerta_amber2.jpg';
  ph3 = '../../../assets/img/ejem_alerta_amber3.jpg';
  images: string[] = [this.ph1, this.ph2, this.ph3];
  /*****************************************************/

  ngOnInit() {}
}
