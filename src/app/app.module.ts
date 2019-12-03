// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // Router import
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // Angular forms import
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"; // Import Bootstrap widgets in Angular
import { LeafletModule } from "@asymmetrik/ngx-leaflet"; // Import Leaflet ngx module
import { AppRoutingModule } from "./app-routing.module"; // Routing module import
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // Animations module import
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ChartsModule } from "ng2-charts";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"; // HTTP Client
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
// Services
import { AlertasService } from "./services/alertas.service";
import { MapaService } from "./services/mapa.service";
import { ReportesService } from "./services/reportes.service";
// Components
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AlertasComponent } from "./inicio-components/alertas/alertas.component";
import { MapaComponent } from "./mapa/mapa.component";
import { MapaPanelComponent } from "./mapa-components/mapa-panel/mapa-panel.component";
import { ReportesPanelComponent } from "./reportes-components/reportes-panel/reportes-panel.component";
import { ReportesComponent } from "./reportes/reportes.component";
import { AmberComponent } from "./amber/amber.component";
import { AmberPanelComponent } from "./amber-components/amber-panel/amber-panel.component";
import { FooterComponent } from "./footer/footer.component";
import { BannerCarouselComponent } from "./inicio-components/banner-carousel/banner-carousel.component";
import { GraficaComponent } from "./inicio-components/grafica/grafica.component";
import { UltimosReportesComponent } from "./inicio-components/ultimos-reportes/ultimos-reportes.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path: "inicio",
    component: InicioComponent,
    data: { animation: "Inicio" }
  },
  {
    path: "mapa",
    component: MapaComponent,
    data: { animation: "Mapa" }
  },
  {
    path: "reportes",
    component: ReportesComponent,
    data: { animation: "Reportes" }
  },
  {
    path: "amber",
    component: AmberComponent,
    data: { animation: "Amber" }
  },
  {
    path: "login",
    component: LoginComponent,
    data: { animation: "Login" }
  },
  {
    path: "signup",
    component: SignupComponent,
    data: { animation: "Signup" }
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "/inicio"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    AlertasComponent,
    MapaComponent,
    MapaPanelComponent,
    ReportesPanelComponent,
    ReportesComponent,
    AmberComponent,
    AmberPanelComponent,
    FooterComponent,
    BannerCarouselComponent,
    GraficaComponent,
    UltimosReportesComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), // Add for router
    NgbModule, // Add for Bootstrap widgets
    LeafletModule.forRoot(), // Add for Leaflet
    LeafletModule, // Add for Leaflet
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    ChartsModule
  ],
  exports: [RouterModule, FormsModule, ReactiveFormsModule],
  // Services list
  providers: [
    AlertasService,
    MapaService,
    ReportesService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
