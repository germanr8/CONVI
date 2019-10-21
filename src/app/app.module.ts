// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // Router import
import { FormsModule } from '@angular/forms'; // Angular forms import
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Import Bootstrap widgets in Angular
import { LeafletModule } from '@asymmetrik/ngx-leaflet'; // Import Leaflet ngx module
import { AppRoutingModule } from './app-routing.module'; // Routing module import
// Services
import { AlertasService } from './services/alertas.service';
import { MapaService } from './services/mapa.service';
import { ReportesService } from './services/reportes.service';
// Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlertasComponent } from './inicio-components/alertas/alertas.component';
import { MapaComponent } from './mapa/mapa.component';
import { MapaPanelComponent } from './mapa-components/mapa-panel/mapa-panel.component';
import { ReportesPanelComponent } from './reportes-components/reportes-panel/reportes-panel.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  },{
    path: 'reportes',
    component: ReportesComponent
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
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), // Add for router
    FormsModule,
    NgbModule, // Add for Bootstrap widgets
    LeafletModule.forRoot(), // Add for Leaflet
    LeafletModule // Add for Leaflet
  ],
  exports: [RouterModule], // Add for router
  // Services list
  providers: [AlertasService, MapaService, ReportesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
