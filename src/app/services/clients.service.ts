import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clientModel } from '../models/clients.model';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private http:HttpClient) { }
  getClientData(){
    return this.http.get(environment.apiurl+'/api/rvente/clients');
  }
  getClientById(id:any){
    return this.http.get(environment.apiurl+'/api/rvente/client/'+id);
  }
  insertClientData(data:clientModel){
    return this.http.post(environment.apiurl+'/api/rvente/addClient',data);
  }
  updateClientData(id:any,data:clientModel){
    return this.http.put(environment.apiurl+'/api/rvente/updateClient/'+id,data);
  }
  deleteClient(id:any){
    return this.http.delete(environment.apiurl+'/api/rvente/deleteClient/'+id);
  }
  nbclt(){
    return this.http.get(environment.apiurl+'/api/rvente/nbclt');
  }
}


