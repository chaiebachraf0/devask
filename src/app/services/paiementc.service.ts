import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paiementc } from '../models/paiementc';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/multipart/form-data'})
};


@Injectable({
  providedIn: 'root'
})
export class PaiementcService {
  private url = 'http://localhost:8000/api/paiementcs/';
  constructor( private http : HttpClient ) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/paiementcs');
  }
  getFactureById(id:any){
    return this.http.get(environment.apiurl+'/api/paiementcs/'+id);
  }
  insertData(data: Paiementc){
    return this.http.post(environment.apiurl+'/api/paiementcs/',data);
  }
  updateData(id:any,data: Paiementc){
    return this.http.put(environment.apiurl+'/api/paiementcs/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/paiementcs/'+id);
  }
  getPaiemenetsOfFacture(id:any){
    return this.http.get<Paiementc[]>(environment.apiurl+'/api/paiementc/facturec/'+id);
  }
  getSUmRetardAPaye():Observable<any>{
    return this.http.get('http://localhost:8000/api/resteretardc/');
  }
}
