import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PropietarioService } from './services/propietario.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/plantilla/menu/menu.component';
import { FooterComponent } from './components/plantilla/footer/footer.component';
import { InformeComponent } from './components/informe/informe.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { HomeComponent } from './components/plantilla/home/home.component';
import { VehiculoService } from './services/vehiculo.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InformeComponent,
    RegistroComponent,
    PropietarioComponent,
    VehiculoComponent,
    ConductorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PropietarioService,
    VehiculoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
