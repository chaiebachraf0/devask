import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devismodel } from '../models/devis.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class devisService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/devis');
  }
  getdevisById(id:any){
    return this.http.get(environment.apiurl+'/api/devis/'+id);
  }
  insertData(data: Devismodel){
    return this.http.post(environment.apiurl+'/api/devis/',data);
  }
  updateData(id:any,data: Devismodel){
    return this.http.put(environment.apiurl+'/api/devis/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/devis/'+id);
  }
}
