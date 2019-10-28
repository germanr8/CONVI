import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "../services/usuarios.service";
import { Usuario } from "src/app/models/Usuario";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  navbarOpen = false;
  statusInicio = false;
  statusMapa = false;
  statusReportes = false;
  statusAmber = false;
  usuario: Usuario;
  hello: boolean;
  constructor(public usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuario = new Usuario();
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleActive(seleccion: string) {
    this.statusInicio = false;
    this.statusMapa = false;
    this.statusReportes = false;
    this.statusAmber = false;

    if (seleccion == "Inicio") this.statusInicio = true;
    if (seleccion == "Mapa") this.statusMapa = true;
    if (seleccion == "Reportes") this.statusReportes = true;
    if (seleccion == "Amber") this.statusAmber = true;
  }

  user() {
    if (this.usuariosService.getLoggeado() == true) {
      this.usuario = this.usuariosService.getUsuario();
      this.hello = true;
    } else {
      this.usuario = new Usuario();
      this.hello = false;
    }
  }
}
