import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { depenseModel } from '../models/depense.model';import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class depenseService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/rcomf/depenses');
  }
  getdepenseById(id:any){
    return this.http.get(environment.apiurl+'/api/rcomf/depense/'+id);
  }
  insertData(data:depenseModel){
    return this.http.post(environment.apiurl+'/api/rcomf/adddepense',data);
  }
  updateData(id:any,data:depenseModel){
    return this.http.put(environment.apiurl+'/api/rcomf/updatedepense/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/rcomf/deletedepense/'+id);
  }
}
