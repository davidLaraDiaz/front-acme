import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { VehiculoModule } from "../models/vehiculo.module";


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {


  //url ="https://back-acme.herokuapp.com/api/vehiculo";
  url="http://127.0.0.1:8000/api/vehiculo";

  constructor(private http:HttpClient) {

  }

  getVehiculos():Observable<VehiculoModule[]>{
    return this.http.get<VehiculoModule[]>(this.url);
  }

  showVehiculo(placa):Observable<VehiculoModule>{
    return this.http.get<VehiculoModule>(this.url+"/"+placa);
  }

  saveVehiculo(vehi:VehiculoModule){
    return this.http.post(this.url,vehi);
  }

  updateVehiculo(vehi:VehiculoModule){
    return this.http.put(this.url+"/"+vehi.placa, vehi);
  }

  deleteVehiculo(placa){
    return this.http.delete(this.url+"/"+placa);
  }

}
