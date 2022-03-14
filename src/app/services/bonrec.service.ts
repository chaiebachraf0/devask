import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bondereception } from '../models/bondereception.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BonrecService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/bondereceptions');
  }
  getFactureById(id:any){
    return this.http.get(environment.apiurl+'/api/bondereceptions/'+id);
  }
  insertData(data: Bondereception){
    return this.http.post(environment.apiurl+'/api/bondereceptions/',data);
  }
  updateData(id:any,data: Bondereception){
    return this.http.put(environment.apiurl+'/api/bondereceptions/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/bondereceptions/'+id);
  }}
