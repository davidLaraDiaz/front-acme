import { Component, OnInit } from '@angular/core';
import { ConductorModule } from 'src/app/models/conductor.module';
import { ConductorService } from 'src/app/services/conductor.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {

  conductores:ConductorModule[];

  condu:ConductorModule;
  esNuevo;


  constructor(
    protected conductorService:ConductorService
  ) { 

    this.conductores = [];
    this.condu=null;
    this.esNuevo=true;
    
  }

  ngOnInit(): void {
    this.getConductores();
    this.limpiar();
  }
  
  limpiar(){
    this.esNuevo=true;
    this.condu = {
      "numero_cedula":null, 
      "primer_nombre":"" , 
      "segundo_nombre":"", 
      "apellidos":"", 
      "direccion":"",
      "telefono":"",
      "ciudad":""
    };
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


  buscarConductor(id){
    
    this.esNuevo=false;
    //alert("Recibe "+id);
    this.conductorService.showConductor(id)
      .subscribe(
        (res) =>{
          
          this.condu =  res[0];
          
          //alert(JSON.stringify(this.condu));
        },(error)=>{
          alert("Error al buscar conductor, "+JSON.stringify(error))
        }
      );
  }

  eliminarConductor(id){
    this.conductorService.deleteConductor(id)
      .subscribe(
        (res) =>{
          this.getConductores();          
          //alert(JSON.stringify(this.condu));
        },(error)=>{
          alert("Error al Eliminar conductor, "+JSON.stringify(error))
        }
      );
  }


  guardar(){
    if(this.esNuevo){
      this.nuevo();
    }else{
      this.actualizar();
    }
  }

  nuevo(){
    this.conductorService.saveConductor(this.condu)
      .subscribe(
        (res) =>{
          this.getConductores();
        },(error)=>{
          alert("Error al Guardar el conductor, "+JSON.stringify(error))
        }
      );
  }

  actualizar(){
    this.conductorService.updateConductor(this.condu)
      .subscribe(
        (res) =>{
          this.getConductores();
        },(error)=>{
          alert("Error al Actualizar el conductor, "+JSON.stringify(error))
        }
      );
  }



}
