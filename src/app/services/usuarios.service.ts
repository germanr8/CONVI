import { Injectable } from "@angular/core";
import { Usuario } from "../models/Usuario";
import { InMemoryDbService } from "angular-in-memory-web-api";
/* 
Tutorial para in-memory-web-api:
https://www.techiediaries.com/angular-inmemory-web-api/
*/

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  constructor() {}
}
