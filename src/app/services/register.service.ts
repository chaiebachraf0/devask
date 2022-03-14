import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  constructor(private http:HttpClient) { }
  registerUser(data: any){
    return this.http.post(environment.apiurl+'/api/register',data);
  }
  loginUser(data: any){
    return this.http.post(environment.apiurl+'/api/login',data);
  }
  Users(){
    return this.http.get(environment.apiurl+'/api/users');
  }
  delete(id:any){

    return this.http.delete(environment.apiurl+'/api/admin/deleteuser/'+id);



  }
}
