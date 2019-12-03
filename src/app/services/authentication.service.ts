import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Usuario } from "../models/Usuario";
import { Md5 } from "ts-md5/dist/md5";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;
  success: boolean = false;
  server = "http://localhost:3000";
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario {
    return this.currentUserSubject.value;
  }

  loginSuccess() {
    return this.success;
  }
  async login(username: string, password: string) {
    let usuarioURL =
      this.server + "/usuarios?filter[where][correo]=" + username;
    let data = await this.http.get<any[]>(usuarioURL).toPromise();
    console.log(data);
    if (data.length > 0) {
      if (data[0].contrasenia == Md5.hashStr(password)) {
        let usuario = <Usuario>data;
        localStorage.setItem("currentUser", JSON.stringify(usuario));
        this.currentUserSubject.next(usuario);
        this.router.navigate(["/inicio"]);
        this.success = true;
        window.location.reload();
      }
    } else {
      this.success = false;
      console.log("nomatch");
    }

    /*
    return this.http
      .post<any>("http://localhost:3000/users/", {
        username,
        password
      })
      .pipe(
        map(Usuario => {
          localStorage.setItem("currentUser", JSON.stringify(Usuario));
          this.currentUserSubject.next(Usuario);
          return Usuario;
        })
      );*/
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
