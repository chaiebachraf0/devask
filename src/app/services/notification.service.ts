import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/multipart/form-data'})
};
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http : HttpClient) { }

  getEcheance(){
    return this.http.get(environment.apiurl+'/api/notificationecheance');
  }
  getEcheancec(){
    return this.http.get(environment.apiurl+'/api/notificationecheancec');
  }

  getProduit(){
    return this.http.get(environment.apiurl+'/api/notificationproduit');
  }
}
