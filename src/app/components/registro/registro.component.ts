import { Component, OnInit } from '@angular/core';
import { ConductorModule } from 'src/app/models/conductor.module';
import { RegistroModule } from 'src/app/models/registro.module';
import { VehiculoModule } from 'src/app/models/vehiculo.module';
import { ConductorService } from 'src/app/services/conductor.service';
import { RegistroService } from 'src/app/services/registro.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro:RegistroModule;
  registros:RegistroModule[];
  conductores:ConductorModule[];
  vehiculos:VehiculoModule[];

  constructor(
    protected registroService:RegistroService,
    protected conductorService:ConductorService,
    protected vehiculoService:VehiculoService
  ) { }

  ngOnInit(): void {
    this.registro= { id:0, placa:"", numero_cedula:0, fecha:null };
    this.registros=[];
    this.conductores=[];
    this.vehiculos=[];
    this.getRegistros();
    this.getConductores();
    this.getVehiculos();
  }

  limpiar(){
    this.registro= { id:0, placa:"", numero_cedula:0, fecha:null };
  }

  getRegistros(){
    
    this.registroService.getRegistros()
      .subscribe(
        (res) =>{
          this.registros = res;
        },(error)=>{
          alert("Error al traer los Registros, "+JSON.stringify(error))
        }
      );
  }

  getConductores(){

    this.conductorService.getConductores()
      .subscribe(
        (res) =>{
          this.conductores = res;
 
        },(error)=>{
          alert("Error al traer los conductores, "+JSON.stringify(error))
        }
      );
  }

  getConductor(id){
    for (let cond of this.conductores){
      if(cond.numero_cedula == id){
        return cond.numero_cedula+" "+cond.primer_nombre+" "+cond.apellidos;
      }
    }
  }

  getVehiculos(){

    this.vehiculoService.getVehiculos()
      .subscribe(
        (res) =>{
          this.vehiculos = res;
        },(error)=>{
          alert("Error al traer los vehiculos, "+JSON.stringify(error))
        }
      );
  }

  getVehiculo(id){
    for (let cond of this.vehiculos){
      if(cond.placa == id){
        return cond.placa+" "+cond.marca;
      }
    }
  }

  guardar(){
    //alert(JSON.stringify(this.vehi));
    this.registroService.saveRegistro(this.registro)
      .subscribe(
        (res) =>{
          this.getRegistros();
        },(error)=>{
          alert("Error al Guardar el Registro, "+JSON.stringify(error))
        }
      );
  }



}
