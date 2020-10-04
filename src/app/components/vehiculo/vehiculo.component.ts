import { Component, OnInit } from '@angular/core';
import { PropietarioModule } from 'src/app/models/propietario.module';
import { VehiculoModule } from 'src/app/models/vehiculo.module';
import { PropietarioService } from 'src/app/services/propietario.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {


  vehiculos:VehiculoModule[];
  vehi:VehiculoModule;
  propietarios:PropietarioModule[];
  esNuevo;

  constructor(
    protected vehiculoService:VehiculoService,
    protected propietarioService:PropietarioService
  ) {  }

  ngOnInit(): void {
    this.vehiculos=[];
    this.propietarios=[];
    this.limpiar();
    this.getVehiculos();
    this.getPropietarios();
    this.esNuevo=true;
  }

  limpiar(){
    this.esNuevo=true;
    this.vehi = { placa:"", color:"", marca:"",numero_cedula:0, tipo_vehiculo:""};
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

  getPropietario(id){
    for (let cond of this.propietarios){
      if(cond.numero_cedula == id){
        return cond.numero_cedula+" "+cond.primer_nombre+" "+cond.apellidos;
      }
    }
  }


  
  buscarVehiculo(placa){
    //alert("Recibe "+placa);
    this.esNuevo=false;
    this.vehiculoService.showVehiculo(placa)
      .subscribe(
        (res) =>{
          
          this.vehi =  res[0];
          
          //alert(JSON.stringify(this.propi));
        },(error)=>{
          alert("Error al buscar Vehiculo, "+JSON.stringify(error))
        }
      );
  }

  eliminarVehiculo(id){
    this.vehiculoService.deleteVehiculo(id)
      .subscribe(
        (res) =>{
          this.getVehiculos();      
          //alert(JSON.stringify(this.propi));
        },(error)=>{
          alert("Error al Eliminar el Vehiculo, "+JSON.stringify(error))
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
    //alert(JSON.stringify(this.vehi));
    this.vehiculoService.saveVehiculo(this.vehi)
      .subscribe(
        (res) =>{
          this.getVehiculos();
        },(error)=>{
          alert("Error al Guardar el Vehiculo, "+JSON.stringify(error))
        }
      );
  }

  actualizar(){
    this.vehiculoService.updateVehiculo(this.vehi)
      .subscribe(
        (res) =>{
          this.getVehiculos();
        },(error)=>{
          alert("Error al Actualizar el Vehiculo, "+JSON.stringify(error))
        }
      );
  }

}
