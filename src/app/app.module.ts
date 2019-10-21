import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // Router import
import { FormsModule } from '@angular/forms'; // Angular forms import
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Import Bootstrap widgets in Angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlertasComponent } from './inicio-components/alertas/alertas.component';

// Services
import { AlertasService } from './services/alertas.service';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), // Add for router
    FormsModule,
    NgbModule // Add for Bootstrap widgets
  ],
  exports: [RouterModule], // Add for router
  // Services list
  providers: [AlertasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
