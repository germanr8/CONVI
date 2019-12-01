import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "../services/usuarios.service";
import { Router } from "@angular/router";
import { Usuario } from "src/app/models/Usuario";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  userExists: boolean = false;
  currentUser: Usuario;
  navbarOpen = false;
  statusInicio = false;
  statusMapa = false;
  statusReportes = false;
  statusAmber = false;
  usuario: Usuario;
  hello: boolean;
  constructor(
    public usuariosService: UsuariosService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
    if (this.currentUser) {
      this.userExists = true;
    } else {
      this.userExists = false;
    }
  }

  ngOnChange() {
    if (this.currentUser) {
      this.userExists = true;
    } else {
      this.userExists = false;
    }
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

  logout() {
    this.userExists = false;
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
