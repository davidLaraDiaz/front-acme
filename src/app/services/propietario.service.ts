import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PropietarioModule } from "../models/propietario.module";


@Injectable({
  providedIn: 'root'
})
export class PropietarioService {


  //url ="https://back-acme.herokuapp.com/api/propietario";
  url="http://127.0.0.1:8000/api/propietario";

  constructor(private http:HttpClient) {

  }

  getPropietarios():Observable<PropietarioModule[]>{
    return this.http.get<PropietarioModule[]>(this.url);
  }

  showPropietario(numero_cedula):Observable<PropietarioModule>{
    return this.http.get<PropietarioModule>(this.url+"/"+numero_cedula);
  }

  savePropietario(propi:PropietarioModule){
    return this.http.post(this.url,propi);
  }

  updatePropietario(propi:PropietarioModule){
    return this.http.put(this.url+"/"+propi.numero_cedula, propi);
  }

  deletePropietario(numero_cedula){
    return this.http.delete(this.url+"/"+numero_cedula);
  }

}
