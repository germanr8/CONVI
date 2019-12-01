import { Injectable } from "@angular/core";
import { Reporte } from "../models/Reporte";
import { compilePipeFromRender2 } from "@angular/compiler/src/render3/r3_pipe_compiler";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ReportesService {
  ultimosReportes: Reporte[] = [];
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

  async getTodosReportes() {
    let todosReportesURL =
      this.server +
      "/reportes?filter[offset]=0&filter[limit]=100&filter[skip]=0";
    let data = await this.http.get<Reporte[]>(todosReportesURL).toPromise();
    this.todosReportes = data;
    return this.todosReportes;
  }

  getReportesRecientes(alcaldiaID: string) {
    /* WARNING: Cambiar! Está hardcodeado!! */
    /* Este servicio se tendrá que cambiar para conseguir los 3 últimos reportes
    de la alcaldía que el usuario eliga */
    let com1 = new Reporte();
    let com2 = new Reporte();
    switch (alcaldiaID) {
      case "002":
        com1.titulo = "Robo 1 alcaldía 2";
        com1.autor = "Anónimo 1 alcaldía 2";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 2";
        com1.descripcion = "Descripcion 1 alcaldía 2";
        this.ultimosReportes = [com1];
        return this.ultimosReportes;
      case "003":
        com1.titulo = "Robo 1 alcaldía 3";
        com1.autor = "Anónimo 1 alcaldía 3";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 3";
        com1.descripcion = "Descripcion 1 alcaldía 3";
        com2.titulo = "Robo 2 alcaldía 3";
        com2.autor = "Anónimo 2 alcaldía 3";
        com2.fecha = "27 de octubre del 2019";
        com2.direccion = "Dirección 2 alcaldía 3";
        com2.descripcion = "Descripcion 2 alcaldía 3";
        this.ultimosReportes = [com1, com2];
        return this.ultimosReportes;
      case "004":
        com1.titulo = "Robo 1 alcaldía 4";
        com1.autor = "Anónimo 1 alcaldía 4";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 4";
        com1.descripcion = "Descripcion 1 alcaldía 4";
        this.ultimosReportes = [com1];
        return this.ultimosReportes;
      case "005":
        com1.titulo = "Robo 1 alcaldía 5";
        com1.autor = "Anónimo 1 alcaldía 5";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 5";
        com1.descripcion = "Descripcion 1 alcaldía 5";
        com2.titulo = "Robo 2 alcaldía 5";
        com2.autor = "Anónimo 2 alcaldía 5";
        com2.fecha = "27 de octubre del 2019";
        com2.direccion = "Dirección 2 alcaldía 5";
        com2.descripcion = "Descripcion 2 alcaldía 5";
        this.ultimosReportes = [com1, com2];
        return this.ultimosReportes;
      case "006":
        com1.titulo = "Robo 1 alcaldía 6";
        com1.autor = "Anónimo 1 alcaldía 6";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 6";
        com1.descripcion = "Descripcion 1 alcaldía 6";
        this.ultimosReportes = [com1];
        return this.ultimosReportes;
      case "007":
        com1.titulo = "Robo 1 alcaldía 7";
        com1.autor = "Anónimo 1 alcaldía 7";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 7";
        com1.descripcion = "Descripcion 1 alcaldía 7";
        com2.titulo = "Robo 2 alcaldía 7";
        com2.autor = "Anónimo 2 alcaldía 7";
        com2.fecha = "27 de octubre del 2019";
        com2.direccion = "Dirección 2 alcaldía 7";
        com2.descripcion = "Descripcion 2 alcaldía 7";
        this.ultimosReportes = [com1, com2];
        return this.ultimosReportes;
      case "008":
        com1.titulo = "Robo 1 alcaldía 8";
        com1.autor = "Anónimo 1 alcaldía 8";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 8";
        com1.descripcion = "Descripcion 1 alcaldía 8";
        this.ultimosReportes = [com1];
        return this.ultimosReportes;
      case "009":
        com1.titulo = "Robo 1 alcaldía 9";
        com1.autor = "Anónimo 1 alcaldía 9";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 9";
        com1.descripcion = "Descripcion 1 alcaldía 9";
        com2.titulo = "Robo 2 alcaldía 9";
        com2.autor = "Anónimo 2 alcaldía 9";
        com2.fecha = "27 de octubre del 2019";
        com2.direccion = "Dirección 2 alcaldía 9";
        com2.descripcion = "Descripcion 2 alcaldía 9";
        this.ultimosReportes = [com1, com2];
        return this.ultimosReportes;
      case "010":
        com1.titulo = "Robo 1 alcaldía 10";
        com1.autor = "Anónimo 1 alcaldía 10";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 10";
        com1.descripcion = "Descripcion 1 alcaldía 10";
        this.ultimosReportes = [com1];
        return this.ultimosReportes;
      case "011":
        com1.titulo = "Robo 1 alcaldía 11";
        com1.autor = "Anónimo 1 alcaldía 11";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 11";
        com1.descripcion = "Descripcion 1 alcaldía 11";
        com2.titulo = "Robo 2 alcaldía 11";
        com2.autor = "Anónimo 2 alcaldía 11";
        com2.fecha = "27 de octubre del 2019";
        com2.direccion = "Dirección 2 alcaldía 11";
        com2.descripcion = "Descripcion 2 alcaldía 11";
        this.ultimosReportes = [com1, com2];
        return this.ultimosReportes;
      case "012":
        com1.titulo = "Robo 1 alcaldía 12";
        com1.autor = "Anónimo 1 alcaldía 12";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 12";
        com1.descripcion = "Descripcion 1 alcaldía 12";
        this.ultimosReportes = [com1];
        return this.ultimosReportes;
      case "013":
        com1.titulo = "Robo 1 alcaldía 13";
        com1.autor = "Anónimo 1 alcaldía 13";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 13";
        com1.descripcion = "Descripcion 1 alcaldía 13";
        com2.titulo = "Robo 2 alcaldía 13";
        com2.autor = "Anónimo 2 alcaldía 13";
        com2.fecha = "27 de octubre del 2019";
        com2.direccion = "Dirección 2 alcaldía 13";
        com2.descripcion = "Descripcion 2 alcaldía 13";
        this.ultimosReportes = [com1, com2];
        return this.ultimosReportes;
      case "014":
        com1.titulo = "Robo 1 alcaldía 14";
        com1.autor = "Anónimo 1 alcaldía 14";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 14";
        com1.descripcion = "Descripcion 1 alcaldía 14";
        this.ultimosReportes = [com1];
        return this.ultimosReportes;
      case "015":
        com1.titulo = "Robo 1 alcaldía 15";
        com1.autor = "Anónimo 1 alcaldía 15";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 15";
        com1.descripcion = "Descripcion 1 alcaldía 15";
        com2.titulo = "Robo 2 alcaldía 15";
        com2.autor = "Anónimo 2 alcaldía 15";
        com2.fecha = "27 de octubre del 2019";
        com2.direccion = "Dirección 2 alcaldía 15";
        com2.descripcion = "Descripcion 2 alcaldía 15";
        this.ultimosReportes = [com1, com2];
        return this.ultimosReportes;
      case "016":
        com1.titulo = "Robo 1 alcaldía 16";
        com1.autor = "Anónimo 1 alcaldía 16";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 16";
        com1.descripcion = "Descripcion 1 alcaldía 16";
        this.ultimosReportes = [com1];
        return this.ultimosReportes;
      case "017":
        com1.titulo = "Robo 1 alcaldía 17";
        com1.autor = "Anónimo 1 alcaldía 17";
        com1.fecha = "27 de octubre del 2019";
        com1.direccion = "Dirección 1 alcaldía 17";
        com1.descripcion = "Descripcion 1 alcaldía 17";
        com2.titulo = "Robo 2 alcaldía 17";
        com2.autor = "Anónimo 2 alcaldía 17";
        com2.fecha = "27 de octubre del 2019";
        com2.direccion = "Dirección 2 alcaldía 17";
        com2.descripcion = "Descripcion 2 alcaldía 17";
        this.ultimosReportes = [com1, com2];
        return this.ultimosReportes;
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

  getCantidadReacciones() {
    /* WARNING: Cambiar! Está hardcodeado!! */
    return Math.floor(Math.random() * 18) + 9;
  }
}
