import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SignupService {
  server = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  async registrarUsuario(body: any) {
    let postUserURL = this.server + "/usuarios";
    let data = await this.http.post(postUserURL, body).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}
