export class Usuario {
  constructor(
    public id?: number,
    public correo?: string,
    public contrasenia?: string,
    public nombre?: string,
    public apellido?: string,
    public token?: string
  ) {}
}
