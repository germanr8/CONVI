import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { SignupService } from "../services/signup.service";
import { Md5 } from "ts-md5/dist/md5";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  success = false;
  constructor(
    private formBuilder: FormBuilder,
    private SignupService: SignupService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      correo: ["", Validators.required],
      contrasenia: ["", Validators.required]
    });
  }

  ngOnInit() {}

  goToLogin() {
    this.router.navigate(["/login"]);
  }

  get f() {
    return this.signupForm.controls;
  }

  async onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    var formData: any = new FormData();
    formData.append(
      "contrasenia",
      Md5.hashStr(this.signupForm.controls["contrasenia"].value)
    );
    formData.append("nombre", this.signupForm.controls["nombre"].value);
    formData.append("apellido", this.signupForm.controls["apellido"].value);
    formData.append("correo", this.signupForm.controls["correo"].value);

    var datajson = {};
    formData.forEach(function(value, key) {
      datajson[key] = value;
    });

    await this.SignupService.registrarUsuario(datajson);

    this.success = true;
  }
}
