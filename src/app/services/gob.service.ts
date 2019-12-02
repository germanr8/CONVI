import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TouchSequence } from "selenium-webdriver";
import { dashCaseToCamelCase } from "@angular/compiler/src/util";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GobService {
  datosV;
  datosS;
  datosRA;

  arregloDelitos: String[];

  GobURL =
    "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=carpetas-de-investigacion-pgj-de-la-ciudad-de-mexico&rows=10&facet=ao_hechos&facet=delito&facet=categoria_delito&facet=alcaldia_hechos&refine.ao_hechos=2019&refine.alcaldia_hechos=";
  constructor(private http: HttpClient) {}

  async getViolacion(alcaldia: string) {
    let alcaldiaS = this.queAlcaldia(alcaldia);
    let delito = "&refine.categoria_delito=VIOLACIÓN";
    let data = await this.http
      .get(this.GobURL + alcaldiaS + delito)
      .toPromise();
    this.datosV = data["nhits"];
    return this.datosV;
  }

  async getSecuestro(alcaldia: string) {
    let alcaldiaS = this.queAlcaldia(alcaldia);
    let delito = "&refine.categoria_delito=SECUESTRO";
    let data = await this.http
      .get(this.GobURL + alcaldiaS + delito)
      .toPromise();
    this.datosS = data["nhits"];
    return this.datosS;
  }

  async getRoboAuto(alcaldia: string) {
    let alcaldiaS = this.queAlcaldia(alcaldia);
    let delito =
      "&refine.delito=ROBO+DE+VEHICULO+DE+SERVICIO+PARTICULAR+SIN+VIOLENCIA";
    let data = await this.http
      .get(this.GobURL + alcaldiaS + delito)
      .toPromise();
    this.datosRA = data["nhits"];
    return this.datosRA;
  }

  queAlcaldia(id: string): String {
    switch (id) {
      case "002":
        return "AZCAPOTZALCO";
      case "003":
        return "COYOACAN";
      case "004":
        return "CUAJIMALPA+DE+MORELOS";
      case "005":
        return "GUSTAVO+A+MADERO";
      case "006":
        return "IZTACALCO";
      case "007":
        return "IZTAPALAPA";
      case "008":
        return "LA+MAGDALENA+CONTRERAS";
      case "009":
        return "MILPA+ALTA";
      case "010":
        return "ALVARO+OBREGON";
      case "011":
        return "TLAHUAC";
      case "012":
        return "TLALPAN";
      case "013":
        return "XOCHIMILCO";
      case "014":
        return "BENITO+JUAREZ";
      case "015":
        return "CUAUHTEMOC";
      case "016":
        return "MIGUEL+HIDALGO";
      case "017":
        return "VENUSTIANO+CARRANZA";
    }
  }
}
