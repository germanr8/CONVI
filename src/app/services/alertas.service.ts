import { Injectable } from "@angular/core";
import { Alerta } from "../models/Alerta";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AlertasService {
  todasAlertas: Alerta[] = [];
  ultimasAlertas: Alerta[] = [];
  cantidadAlertas: number;
  server = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  async getTodasAlertas(order: String) {
    let todoasAlertasURL;

    todoasAlertasURL =
      this.server +
      "/alertas?filter[order]=_id%20" +
      order +
      "&filter[limit]=50&filter[skip]=0";
    let data = await this.http.get<Alerta[]>(todoasAlertasURL).toPromise();
    this.todasAlertas = data;
    return this.todasAlertas;
  }

  async getAlertasRecientes() {
    let ultimasAlertasURL =
      this.server +
      "/alertas?filter[order]=_id%20DESC&filter[limit]=5&filter[skip]=0";

    let data = await this.http.get<Alerta[]>(ultimasAlertasURL).toPromise();
    this.ultimasAlertas = data;
    return this.ultimasAlertas;
  }

  async getCantidadAlertas() {
    let cantidadAlertasURL = this.server + "/alertas/count";

    let data = await this.http.get<any>(cantidadAlertasURL).toPromise();
    this.cantidadAlertas = data.count;
    return this.cantidadAlertas;
  }
}
