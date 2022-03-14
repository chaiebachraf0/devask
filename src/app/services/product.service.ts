import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productModel } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(environment.apiurl+'/api/rvente/products');
  }
  getProductById(id:any){
    return this.http.get(environment.apiurl+'/api/rvente/product/'+id);
  }
  insertData(data: productModel){
    return this.http.post(environment.apiurl+'/api/rvente/addProduct',data);
  }
  updateData(id:any,data: productModel){
    return this.http.put(environment.apiurl+'/api/rvente/updateProduct/'+id,data);
  }
  deleteData(id:any){
    return this.http.delete(environment.apiurl+'/api/rvente/deleteProduct/'+id);
  }
 nbprod(){
    return this.http.get(environment.apiurl+'/api/rvente/nbprod');
  }

  getNumberProduct(){
    return this.http.get(environment.apiurl+'/api/calcul');

  }

}
