import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroModule } from '../models/registro.module';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {


  //url ="https://back-acme.herokuapp.com/api/registro";
  url="http://127.0.0.1:8000/api/registro";

  constructor(private http:HttpClient) {

  }

  getRegistros():Observable<RegistroModule[]>{
    return this.http.get<RegistroModule[]>(this.url);
  }

  showRegistro(id):Observable<RegistroModule>{
    return this.http.get<RegistroModule>(this.url+"/"+id);
  }

  saveRegistro(registro:RegistroModule){
    return this.http.post(this.url,registro);
  }


}
