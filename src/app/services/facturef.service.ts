import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FournisseurFacture } from '../models/facturef.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/facturef');
  }
  getFactureById(id:any){
    return this.http.get(environment.apiurl+'/api/facturef/'+id);
  }
  insertData(data: FournisseurFacture){
    return this.http.post(environment.apiurl+'/api/facturef/',data);
  }
  updateData(id:any,data: FournisseurFacture){
    return this.http.put(environment.apiurl+'/api/facturef/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/facturef/'+id);
  }
  nbrff(){
    return this.http.get(environment.apiurl+'/api/facturef/nbff');
  }
}
