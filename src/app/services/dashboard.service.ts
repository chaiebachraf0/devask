import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class dashboardService {
  constructor(private http:HttpClient) { }
  getstatva(){
    return this.http.get(environment.apiurl+'/api/dashbord');
  }
  getstatf(){
    return this.http.get(environment.apiurl+'/api/dashbordfacture');
  }
}
