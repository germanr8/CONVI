import { Injectable } from "@angular/core";
import { Usuario } from "../models/Usuario";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  private usuario = new Usuario(
    12345,
    "prueba@gmail.com",
    "qwerty123",
    "Yair",
    "Pimentel"
  );
  loggeado: boolean = false;
  registrado: boolean = false;
  constructor() {}
  getUsuario(): Usuario {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return this.usuario;
  }
  getLoggeado(): boolean {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return this.loggeado;
  }
  setLoggeado(loggeado: boolean) {
    /* WARNING: Cambiar! Está hardcodeado!! */
    this.loggeado = loggeado;
  }
  getID(): number {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return this.usuario.id;
  }
  getNombre(): string {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return this.usuario.nombre;
  }
  getApellido(): string {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return this.usuario.apellido;
  }
  getCorreo(): string {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return this.usuario.correo;
  }
  getContrasenia(): string {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return this.usuario.contrasenia;
  }
}
