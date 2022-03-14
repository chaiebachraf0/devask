import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { operationModel } from '../models/operation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class operationService {
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/rcomf/operations');
  }
  getdepenseById(id:any){
    return this.http.get(environment.apiurl+'/api/rcomf/operation/'+id);
  }
  insertData(data:operationModel){
    return this.http.post(environment.apiurl+'/api/rcomf/addoperation',data);
  }
  updateData(id:any,data:operationModel){
    return this.http.put(environment.apiurl+'/api/rcomf/updateopeartion/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/rcomf/deleteoperation/'+id);
  }
}
