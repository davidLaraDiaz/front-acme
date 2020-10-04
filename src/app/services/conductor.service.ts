import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ConductorModule } from "../models/conductor.module";


@Injectable({
  providedIn: 'root'
})
export class ConductorService {


  //url ="https://back-acme.herokuapp.com/api/conductor";
  url="http://127.0.0.1:8000/api/conductor";

  constructor(private http:HttpClient) {

  }

  getConductores():Observable<ConductorModule[]>{
    return this.http.get<ConductorModule[]>(this.url);
  }

  showConductor(numero_cedula):Observable<ConductorModule>{
    return this.http.get<ConductorModule>(this.url+"/"+numero_cedula);
  }

  saveConductor(condu:ConductorModule){
    return this.http.post(this.url,condu);
  }

  updateConductor(condu:ConductorModule){
    return this.http.put(this.url+"/"+condu.numero_cedula, condu);
  }

  deleteConductor(numero_cedula){
    return this.http.delete(this.url+"/"+numero_cedula);
  }

}
