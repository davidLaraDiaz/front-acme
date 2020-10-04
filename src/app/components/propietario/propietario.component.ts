import { Component, OnInit } from '@angular/core';
import { PropietarioService } from '../../services/propietario.service';
import { PropietarioModule } from '../../models/propietario.module';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  propietarios:PropietarioModule[];

  propi:PropietarioModule;
  esNuevo;


  constructor(
    protected propietarioService:PropietarioService
  ) { 

    this.propietarios = [];
    this.propi=null;
    this.esNuevo=true;
    
  }

  ngOnInit(): void {
    this.getPropietarios();
    this.limpiar();
  }
  
  limpiar(){
    this.esNuevo=true;
    this.propi = {
      "numero_cedula":null, 
      "primer_nombre":"" , 
      "segundo_nombre":"", 
      "apellidos":"", 
      "direccion":"",
      "telefono":"",
      "ciudad":""
    };
  }

  getPropietarios(){

    this.propietarioService.getPropietarios()
      .subscribe(
        (res) =>{
          this.propietarios = res;
 
        },(error)=>{
          alert("Error al traer los propietarios, "+JSON.stringify(error))
        }
      );
  }


  buscarPropietario(id){
    
    this.esNuevo=false;
    //alert("Recibe "+id);
    this.propietarioService.showPropietario(id)
      .subscribe(
        (res) =>{
          
          this.propi =  res[0];
          
          //alert(JSON.stringify(this.propi));
        },(error)=>{
          alert("Error al buscar propietario, "+JSON.stringify(error))
        }
      );
  }

  eliminarPropieario(id){
    this.propietarioService.deletePropietario(id)
      .subscribe(
        (res) =>{
          this.getPropietarios();          
          //alert(JSON.stringify(this.propi));
        },(error)=>{
          alert("Error al Eliminar propietario, "+JSON.stringify(error))
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
    this.propietarioService.savePropietario(this.propi)
      .subscribe(
        (res) =>{
          this.getPropietarios();
        },(error)=>{
          alert("Error al Guardar el propietario, "+JSON.stringify(error))
        }
      );
  }

  actualizar(){
    this.propietarioService.updatePropietario(this.propi)
      .subscribe(
        (res) =>{
          this.getPropietarios();
        },(error)=>{
          alert("Error al Actualizar el propietario, "+JSON.stringify(error))
        }
      );
  }



}
