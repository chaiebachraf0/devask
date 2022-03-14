import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paiement } from '../models/paiement';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/multipart/form-data'})
};
@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  private url = environment.apiurl+'/api/paiements/';
  constructor( private http : HttpClient ) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/paiements');
  }
  getFactureById(id:any){
    return this.http.get(environment.apiurl+'/api/paiements/'+id);
  }
  insertData(data: Paiement){
    return this.http.post(environment.apiurl+'/api/paiements/',data);
  }
  updateData(id:any,data: Paiement){
    return this.http.put(environment.apiurl+'/api/paiements/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/paiements/'+id);
  }
  getPaiemenetsOfFacture(id:any){
    return this.http.get<Paiement[]>(environment.apiurl+'/api/paiement/facture/'+id);
  }
  getSUmRetardAPaye():Observable<any>{
    return this.http.get(environment.apiurl+'/api/resteretard/');
  }
}
