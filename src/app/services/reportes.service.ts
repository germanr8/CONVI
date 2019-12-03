import { Injectable } from "@angular/core";
import { Reporte } from "../models/Reporte";
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

  async getCantidadReportes() {
    let cantidadReportesURL = this.server + "/reportes/count";
    let data = await this.http.get<any>(cantidadReportesURL).toPromise();
    return data.count;
  }

  getCantidadVisitas() {
    /* Hardcoddeado */
    return Math.floor(Math.random() * 18) + 9;
  }
}
