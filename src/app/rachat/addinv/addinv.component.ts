import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Inventairemodel } from 'src/app/models/inventaire.model';
import { InventaireserviceService } from 'src/app/services/inventaireservice.service';
import { ProductService } from 'src/app/services/product.service';
import {formatDate} from '@angular/common';
import { productModel } from 'src/app/models/product.model';
@Component({
  selector: 'app-addinv',
  templateUrl: './addinv.component.html',
  styleUrls: ['./addinv.component.css']
})
export class AddinvComponent implements OnInit {
  inv = new Inventairemodel();
  p: any;
  index_produit: any;
  inventaire:any;
  products:any;
  qte:any;
  produit:any;
  factfour: any
  data:any;
  product =new productModel();
  constructor(private invv:InventaireserviceService ,private  route:ActivatedRoute,private router:Router,private toastr: ToastrService,private invservice:InventaireserviceService,private productService:ProductService) { }
  ngOnInit(): void {
    this.getProductsData();
    this.inv.quantite=0;
    this.inv.valeuru=0;
    this.inv.note="pas de note";
    this.inv.date_creation=formatDate(new Date(), 'yyyy-MM-dd', 'en');
    console.log("ach",this.products)
    this.inv.Libelle = this.products[this.index_produit].name
    this.inv.id_product = this.products[this.index_produit].id
    this.inv.Enstock = this.products[this.index_produit].Enstock
    this.getProductsData()
  }
  insertData(){
    this.inv.Libelle = this.products[this.index_produit].name
    this.inv.id_product = this.products[this.index_produit].id
    this.productService.getProductById(this.inv.id_product).subscribe(res=>{
    this.data=res;
    this.product=this.data
    this.inv.Enstock = this.products[this.index_produit].Enstock
    this.inv.valeuru = Number(this.inv.Enstock)+Number(this.inv.quantite)
    this.data.Enstock=this.inv.valeuru
    this.productService.updateData(this.product.id,this.data).subscribe(res=>{
     });
    this.invservice.insertData(this.inv).subscribe(res => {
    this.router.navigate(['rachat/inventaire']);
    this.toastr.success('', 'Inventaire ajouté');
    });
    })
    // this.getProductsData()
  }
  getProductsData(){
    this.productService.getData().subscribe(res=>{
    this.products=res;
    });
  }
  annuler(){
    this.router.navigate(['rachat/inventaire']);
    this.toastr.error('', 'Annulation');
  }
}
