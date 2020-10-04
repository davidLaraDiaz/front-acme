import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformeComponent } from './components/informe/informe.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { HomeComponent } from './components/plantilla/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vehiculo', component: VehiculoComponent },
  { path: 'conductor', component: ConductorComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'informe', component: InformeComponent },
  { path: 'propietario', component: PropietarioComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
