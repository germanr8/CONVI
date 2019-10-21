import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navbarOpen = false;
  statusInicio = false;
  statusMapa = false;
  statusReportes = false;
  statusAmber = false;
  constructor() {}

  ngOnInit() {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleActive(seleccion: string) {
    this.statusInicio = false;
    this.statusMapa = false;
    this.statusReportes = false;
    this.statusAmber = false;

    if (seleccion == 'Inicio') this.statusInicio = true;
    if (seleccion == 'Mapa') this.statusMapa = true;
    if (seleccion == 'Reportes') this.statusReportes = true;
    if (seleccion == 'Amber') this.statusAmber = true;
  }
}
