import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FournisseurModel } from '../models/fournisseur.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {
  constructor(private http:HttpClient) { }
  getfournisseurData(){
    return this.http.get(environment.apiurl+'/api/rachat/fournisseurs');
  }
  getfournisseurById(id:any){
    return this.http.get(environment.apiurl+'/api/rachat/fournisseur/'+id);
  }
  insertfournisseurData(data:FournisseurModel){
    return this.http.post(environment.apiurl+'/api/rachat/addfournisseur',data);
  }
  updatefounisseurData(id:any,data:FournisseurModel){
    return this.http.put(environment.apiurl+'/api/rachat/updatefournisseur/'+id,data);
  }
  deletefournisseur(id:any){
    return this.http.delete(environment.apiurl+'/api/rachat/deletefournisseur/'+id);
  }
  nbfn(){
    return this.http.get(environment.apiurl+'/api/rachat/nbfn');
  }
}
