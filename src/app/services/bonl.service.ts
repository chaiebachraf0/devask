import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bonlivraisonmodel } from '../models/bonlivraison.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class bonlService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/bonlivraison');
  }
  getcommclById(id:any){
    return this.http.get(environment.apiurl+'/api/bonlivraison/'+id);
  }
  insertData(data: Bonlivraisonmodel){
    return this.http.post(environment.apiurl+'/api/bonlivraison/',data);
  }
  updateData(id:any,data: Bonlivraisonmodel){
    return this.http.put(environment.apiurl+'/api/bonlivraison/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/bonlivraison/'+id);
  }
}
