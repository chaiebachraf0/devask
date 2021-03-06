import { Commclmodel } from 'src/app/models/commcl.model';
import { Facturemodel } from 'src/app/models/Facture.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { clientModel } from 'src/app/models/clients.model';
import { Devismodel } from 'src/app/models/devis.model';
import { ClientsService } from 'src/app/services/clients.service';
import { ProductService } from 'src/app/services/product.service';
import { devisService } from 'src/app/services/devis.service';
import { ListProductv } from 'src/app/models/Listproductv.model';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-adddevis',
  templateUrl: './adddevis.component.html',
  styleUrls: ['./adddevis.component.css']
})
export class AdddevisComponent implements OnInit {
  products: any;
  ress: any;
  p: any;
  q:any;
  TTC:any;
  HT:any;
  libelle:any
  TOT_HT:any;
  TOT_TTC:any;
  factures: any;
  TAXA:any;
  MONTANT_TVA:any;
  values: any;
  index_client:any;
  f:any;
  client =new clientModel();
  facture = new Facturemodel();
  Net: any;
  factureclient: Facturemodel[] = [new Facturemodel()];
  myDate = new Date();
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private devisService:devisService) { }
  ngOnInit(): void {
    this.getclients();
    this.facture.Timbre_fiscale=0.6;
    this.getProductsData()
    this.getproduits();
    this.facture.Total_HT=0;
    this.facture.Montant_TTC=0;
    this.facture.Montant_TVA=0;
    this.facture.note="pas de note";
    this.facture.Ref_Facture="comm-";
    this.facture.date_creation=formatDate(new Date(), 'yyyy-MM-dd', 'en');

  }
  add(){
    let fact = new Commclmodel();
    this.factureclient.push(fact);
  }
    getProductsData() {
      this.devisService.getData().subscribe(res => {
        this.factures = res;
      });
    }
    insertData() {
      this.facture.Timbre_fiscale=0.6;
      this.facture.Nom_client=this.f[this.index_client].name
      this.facture.id_client=this.f[this.index_client].id
      this.facture.quantite_entre=999;
      let listvente: Array<ListProductv> = new Array();
      for (var i = 0; i < this.factureclient.length; i++) {
        let product = new ListProductv();
console.log("dkhdb",this.factureclient[i])
        product.quantite=this.factureclient[i].quantite_entre;
        product.id_product=this.factureclient[i].product.id;
        product.Libelle=this.factureclient[i].product.name;
        product.Total_HT= this.factureclient[i].Total_HT
        product.Montant_TVA= this.factureclient[i].Montant_TVA
        product.Taxe_Applique= this.factureclient[i].Taxe_Applique
        product.Montant_TTC= this.factureclient[i].Montant_TTC


        listvente.push(product);
      }
      this.facture.ListProductv=listvente;
      this.devisService.insertData(this.facture).subscribe(res => {
        this.toastr.success('avec succ??s', 'Devis Enregistr??');
        this.router.navigate(['rvente/vente/Devis']);
      });
      this.getProductsData()
    }
    getproduits() {
      this.productService.getData().subscribe(res => {
      this.products=res;
      });
    }
    getclients(){
      this.clientservice.getClientData().subscribe(res => {
      this.f = res;
      });
    }
    getSelecteItem(prod:any) {
      this.productService.getProductById(prod.id_product).subscribe(res => {
      prod.product=res;
      });
    }
    getq(prod:any) {
      let qte=prod.quantite_entre;
      prod.Montant_TVA=((prod.product.priceht*prod.product.TVA)/100)*qte;
      prod.Taxe_Applique=prod.product.typetaxe;
      prod.Montant_TTC=qte*prod.product.pricettc;
      prod.Total_HT=qte*prod.product.priceht;
      this.facture.Montant_TTC=0;
      this.facture.Montant_TVA=0;
      this.facture.Total_HT=0;
      for (var i = 0; i < this.factureclient.length; i++) {
      this.facture.Montant_TTC+=this.factureclient[i].Montant_TTC;
      this.facture.Montant_TVA+=this.factureclient[i].Montant_TVA;
      this.facture.Total_HT+=this.factureclient[i].Total_HT;
      this.Net=this.facture.Montant_TTC+this.facture.Timbre_fiscale;
  }
}
  annuler(){
    this.router.navigate(['rvente/vente/Devis']);
    this.toastr.error('', 'Annulation');
  }
}
