import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facturemodel } from '../models/Facture.model';
import { environment } from 'src/environments/environment';

@Injectable({

  providedIn: 'root'
})
export class factureService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/facture');
  }
  getFactureById(id:any){
    return this.http.get(environment.apiurl+'/api/facture/'+id);
  }
  insertData(data: Facturemodel){
    return this.http.post(environment.apiurl+'/api/facture/',data);
  }
  updateData(id:any,data: Facturemodel){
    return this.http.put(environment.apiurl+'/api/facture/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/facture/'+id);
  }
  nbrf(){
    return this.http.get(environment.apiurl+'/api/facture');
  }
}

