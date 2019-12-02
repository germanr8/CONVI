import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TouchSequence } from "selenium-webdriver";
import { dashCaseToCamelCase } from "@angular/compiler/src/util";

@Injectable({
  providedIn: "root"
})
export class GobService {
  datosV;

  GobURL =
    "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=carpetas-de-investigacion-pgj-de-la-ciudad-de-mexico&rows=10&facet=ao_hechos&facet=delito&facet=categoria_delito&facet=alcaldia_hechos&refine.ao_hechos=2019&refine.alcaldia_hechos=";
  constructor(private http: HttpClient) {}

  getCrimenes(alcaldia: string) {
    let alcaldiaS = this.queAlcaldia(alcaldia);
    let violacion = "&refine.categoria_delito=VIOLACIÓN";

    this.http.get(this.GobURL + alcaldiaS + violacion).subscribe(data => {
      console.log(data["nhits"]);
      this.datosV = data["nhits"];
    });

    return this.datosV;
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
