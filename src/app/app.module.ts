import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/plantilla/menu/menu.component';
import { FooterComponent } from './components/plantilla/footer/footer.component';
import { InformeComponent } from './components/informe/informe.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ConductorComponent } from './components/conductor/conductor.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InformeComponent,
    RegistroComponent,
    PropietarioComponent,
    VehiculoComponent,
    ConductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
