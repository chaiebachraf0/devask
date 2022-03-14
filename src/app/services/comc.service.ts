import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facturemodel } from '../models/Facture.model';
import { FournisseurFacture } from '../models/facturef.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class commandeclService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/commandecl');
  }
  getcommclById(id:any){
    return this.http.get(environment.apiurl+'/api/commandecl/'+id);
  }
  insertData(data: Facturemodel){
    return this.http.post(environment.apiurl+'/api/commandecl/',data);
  }
  updateData(id:any,data: Facturemodel){
    return this.http.put(environment.apiurl+'/api/commandecl/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/commandecl/'+id);
  }

  getDataf(){
    return this.http.get(environment.apiurl+'/api/commandeachat');
  }
  getcommclByIdf(id:any){
    return this.http.get(environment.apiurl+'/api/commandeachat/'+id);
  }
  insertDataf(data: FournisseurFacture){
    return this.http.post(environment.apiurl+'/api/commandeachat/',data);
  }
  updateDataf(id:any,data: FournisseurFacture){
    return this.http.put(environment.apiurl+'/api/commandeachat/'+id,data);
  }
  deleteDataf(id:any){
    return this.http.delete(environment.apiurl+'/api/commandeachat/'+id);
  }
}

