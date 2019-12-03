import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TouchSequence } from "selenium-webdriver";
import { dashCaseToCamelCase } from "@angular/compiler/src/util";
import { Observable, empty } from "rxjs";
import { del } from "selenium-webdriver/http";

@Injectable({
  providedIn: "root"
})
export class GobService {
  GobAPI =
    "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=carpetas-de-investigacion-pgj-de-la-ciudad-de-mexico&rows=10&facet=ao_hechos&facet=delito&facet=categoria_delito&facet=alcaldia_hechos";

  datosV;
  datosS;
  datosRA;
  datosRT;
  datosRN;
  datosE;
  delitoExtra = "";
  alcaldiaURL = "&refine.alcaldia_hechos=";
  delitoURL = "&refine.categoria_delito=";
  anioURL = "&refine.ao_hechos=";

  GobURL = this.GobAPI;

  constructor(private http: HttpClient) {}

  async setAnio(anio: string) {
    if (anio == "0") {
      this.GobURL = this.GobAPI;
    } else {
      this.GobURL = this.GobAPI + this.anioURL + anio;
    }
  }

  async setDelitoExtra(delito: string) {
    if (delito != "") {
      this.delitoExtra = this.delitoURL + delito;
    } else {
      this.delitoExtra = delito;
    }
  }

  async getDelitoExtra(alcaldia: string) {
    let alcaldiaS = this.queAlcaldia(alcaldia);
    let data = await this.http
      .get(this.GobURL + alcaldiaS + this.delitoExtra)
      .toPromise();
    this.datosE = data["nhits"];

    if (this.delitoExtra == "") {
      return (
        this.datosE -
        (this.datosV + this.datosS + this.datosRA + this.datosRN + this.datosRT)
      );
    }

    return this.datosE;
  }

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

  async getRoboTranseunte(alcaldia: string) {
    let alcaldiaS = this.queAlcaldia(alcaldia);
    let delito =
      "&refine.categoria_delito=ROBO+A+TRANSEUNTE+EN+VÍA+PÚBLICA+CON+Y+SIN+VIOLENCIA";
    let data = await this.http
      .get(this.GobURL + alcaldiaS + delito)
      .toPromise();
    this.datosRT = data["nhits"];
    return this.datosRT;
  }

  async getRoboNegocio(alcaldia: string) {
    let alcaldiaS = this.queAlcaldia(alcaldia);
    let delito = "&refine.categoria_delito=ROBO+A+NEGOCIO+CON+VIOLENCIA";
    let data = await this.http
      .get(this.GobURL + alcaldiaS + delito)
      .toPromise();
    this.datosRN = data["nhits"];
    return this.datosRN;
  }

  queAlcaldia(id: string) {
    switch (id) {
      case "0":
        return "";
      case "002":
        return this.alcaldiaURL + "AZCAPOTZALCO";
      case "003":
        return this.alcaldiaURL + "COYOACAN";
      case "004":
        return this.alcaldiaURL + "CUAJIMALPA+DE+MORELOS";
      case "005":
        return this.alcaldiaURL + "GUSTAVO+A+MADERO";
      case "006":
        return this.alcaldiaURL + "IZTACALCO";
      case "007":
        return this.alcaldiaURL + "IZTAPALAPA";
      case "008":
        return this.alcaldiaURL + "LA+MAGDALENA+CONTRERAS";
      case "009":
        return this.alcaldiaURL + "MILPA+ALTA";
      case "010":
        return this.alcaldiaURL + "ALVARO+OBREGON";
      case "011":
        return this.alcaldiaURL + "TLAHUAC";
      case "012":
        return this.alcaldiaURL + "TLALPAN";
      case "013":
        return this.alcaldiaURL + "XOCHIMILCO";
      case "014":
        return this.alcaldiaURL + "BENITO+JUAREZ";
      case "015":
        return this.alcaldiaURL + "CUAUHTEMOC";
      case "016":
        return this.alcaldiaURL + "MIGUEL+HIDALGO";
      case "017":
        return this.alcaldiaURL + "VENUSTIANO+CARRANZA";
    }
  }
}
