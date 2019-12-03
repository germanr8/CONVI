import { Injectable } from "@angular/core";
import { Reporte } from "../models/Reporte";
import { compilePipeFromRender2 } from "@angular/compiler/src/render3/r3_pipe_compiler";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ReportesService {
  ultimosReportes: Reporte[] = [];
  ultimosReportesPorAlcaldia: Reporte[] = [];
  todosReportes: Reporte[] = [];
  server = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  async getUltimosReportes() {
    // Orden descendiente, se consigue a través del _id de mongodb ya que este a su vez tiene un timestamp de inserción
    let ultimosReportesURL =
      this.server +
      "/reportes?filter[order]=_id%20DESC&filter[limit]=3&filter[skip]=0";

    let data = await this.http.get<Reporte[]>(ultimosReportesURL).toPromise();
    this.ultimosReportes = data;
    return this.ultimosReportes;
  }

  async getTodosReportes(order: String) {
    let todosReportesURL;
    if (order == "ALC") {
      todosReportesURL =
        this.server +
        "/reportes?filter[order]=alcaldia ASC&filter[limit]=50&filter[skip]=0";
      let data = await this.http.get<Reporte[]>(todosReportesURL).toPromise();
      this.todosReportes = data;
      return this.todosReportes;
    } else {
      todosReportesURL =
        this.server +
        "/reportes?filter[order]=_id%20" +
        order +
        "&filter[limit]=50&filter[skip]=0";
      let data = await this.http.get<Reporte[]>(todosReportesURL).toPromise();
      this.todosReportes = data;
      return this.todosReportes;
    }
  }

  async getReportesRecientes(alcaldiaID: string) {
    let alcaldia = this.queAlacaldia(alcaldiaID);
    let ultimosReportesAlcURL =
      this.server +
      "/reportes?filter[where][alcaldia]=" +
      alcaldia +
      "&filter[limit]=3";
    let data = await this.http
      .get<Reporte[]>(ultimosReportesAlcURL)
      .toPromise();
    this.ultimosReportesPorAlcaldia = data;
    return this.ultimosReportesPorAlcaldia;
  }

  queAlacaldia(id: String) {
    switch (id) {
      case "002":
        return "Azcapotzalco";
      case "003":
        return "Coyoacan";
      case "004":
        return "Cuajimalpa de Morelos";
      case "005":
        return "Gustavo A. Madero";
      case "006":
        return "Iztacalco";
      case "007":
        return "Iztapalapa";
      case "008":
        return "Magdalena Contreras";
      case "009":
        return "Milpa Alta";
      case "010":
        return "Álvaro Obregón";
      case "011":
        return "Tláhuac";
      case "012":
        return "Tlalpan";
      case "013":
        return "Xochimilco";
      case "014":
        return "Benito Juárez";
      case "015":
        return "Cuauhtémoc";
      case "016":
        return "Miguel Hidalgo";
      case "017":
        return "Venustiano Carranza";
    }
  }

  async publicarReporte(body: FormData) {
    let postReporteURL = this.server + "/reportes";
    let success = false;
    let data = await this.http.post(postReporteURL, body).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  getCifraHomicidios(alcaldiaID: string) {
    /* WARNING: Cambiar! Está hardcodeado!! */
    switch (alcaldiaID) {
      case "002":
        return 2;
      case "003":
        return 3;
      case "004":
        return 4;
      case "005":
        return 5;
      case "006":
        return 6;
      case "007":
        return 7;
      case "008":
        return 8;
      case "009":
        return 9;
      case "010":
        return 10;
      case "011":
        return 11;
      case "012":
        return 12;
      case "013":
        return 13;
      case "014":
        return 14;
      case "015":
        return 15;
      case "016":
        return 16;
      case "017":
        return 17;
    }
  }

  getCifraRoboAutos(alcaldiaID: string) {
    /* WARNING: Cambiar! Está hardcodeado!! */
    switch (alcaldiaID) {
      case "002":
        return 22;
      case "003":
        return 33;
      case "004":
        return 44;
      case "005":
        return 55;
      case "006":
        return 66;
      case "007":
        return 77;
      case "008":
        return 88;
      case "009":
        return 99;
      case "010":
        return 1010;
      case "011":
        return 1111;
      case "012":
        return 1212;
      case "013":
        return 1313;
      case "014":
        return 1414;
      case "015":
        return 1515;
      case "016":
        return 1616;
      case "017":
        return 1717;
    }
  }

  getCifraSecuestros(alcaldiaID: string) {
    /* WARNING: Cambiar! Está hardcodeado!! */
    switch (alcaldiaID) {
      case "002":
        return 20;
      case "003":
        return 30;
      case "004":
        return 40;
      case "005":
        return 50;
      case "006":
        return 60;
      case "007":
        return 70;
      case "008":
        return 80;
      case "009":
        return 90;
      case "010":
        return 100;
      case "011":
        return 110;
      case "012":
        return 120;
      case "013":
        return 130;
      case "014":
        return 140;
      case "015":
        return 150;
      case "016":
        return 160;
      case "017":
        return 170;
    }
  }

  async getCantidadReportes() {
    let cantidadReportesURL = this.server + "/reportes/count";
    let data = await this.http.get<any>(cantidadReportesURL).toPromise();
    return data.count;
  }

  getCantidadVisitas() {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return Math.floor(Math.random() * 18) + 9;
  }
}
