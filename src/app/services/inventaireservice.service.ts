import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventairemodel } from '../models/inventaire.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InventaireserviceService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/inventaire');
  }
  getFactureById(id:any){
    return this.http.get(environment.apiurl+'/api/inventaire/'+id);
  }
  insertData(data: Inventairemodel){
    return this.http.post(environment.apiurl+'/api/inventaire/',data);
  }
  updateData(id:any,data: Inventairemodel){
    return this.http.put(environment.apiurl+'/api/inventaire/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/inventaire/'+id);
  }
}
