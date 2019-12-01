import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { slideInAnimation } from "../app/animations/animations";
import { Usuario } from "../app/models/Usuario";
import { AuthenticationService } from "../app/services/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slideInAnimation]
})
export class AppComponent {
  currentUser: Usuario;
  title = "convi";

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
