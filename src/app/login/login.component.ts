import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "../services/usuarios.service";
import { Usuario } from "../models/Usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  registrado: boolean = true;
  acceso: boolean;
  usuario: Usuario;
  constructor(private usuariosService: UsuariosService) {
    this.acceso = this.usuariosService.getLoggeado();
  }

  ngOnInit() {
    if (this.usuariosService.getLoggeado() == true) {
      this.usuario = this.usuariosService.getUsuario();
    } else {
      this.usuario = new Usuario();
    }
  }
  enviarFormulario() {
    if (
      this.usuariosService.getCorreo() == this.usuario.correo &&
      this.usuariosService.getContrasenia() == this.usuario.contrasenia
    ) {
      this.registrado = true;
      this.acceso = true;
      this.usuariosService.setLoggeado(this.acceso);
      this.usuario = this.usuariosService.getUsuario();
    } else {
      this.registrado = false;
    }
  }
  logOut() {
    this.acceso = false;
    this.usuariosService.setLoggeado(this.acceso);
    this.usuario = new Usuario();
  }
}
