import { FournisseurFacture } from 'src/app/models/facturef.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurModel } from 'src/app/models/fournisseur.model';
import { ListProduct } from 'src/app/models/Listproduct.model';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { ProductService } from 'src/app/services/product.service';
import { Paiement } from 'src/app/models/paiement';
import { PaiementService } from 'src/app/services/paiement.service';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-editfactf',
  templateUrl: './editfactf.component.html',
  styleUrls: ['./editfactf.component.css']
})
export class EditfactfComponent implements OnInit {
  products: any;
  id:any;
  factures: any;
  facturedetails:any
  index_fournisseur: any;
  f: any;
  fournisseur = new FournisseurModel();
  facture = new FournisseurFacture();
  Net: any;
  facturefournisseur: FournisseurFacture[] = [new FournisseurFacture()];
  myDate = new Date();
  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService, private factureService: FacturesService, private productService: ProductService, private four: FournisseursService, private paiement: PaiementService) { }
  ngOnInit(): void {

    this.id=this.route.snapshot.params.id;
    this.getfactfdetails()
    this.getfournisseur();
    this.facture.Timbre_fiscale = 0.6;
    this.getproduits();
    this.facture.Montant_TTC = 0;
    this.facture.Montant_TVA = 0;
    this.facture.Total_HT=0;
    this.facture.date_creation=formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.facture.note="pas de note";
    this.facture.Ref_Facture="Fac-"
  }
  getfactfdetails(){
    this.factureService.getFactureById(this.id).subscribe(res =>{
    this.facturedetails=res[1];
    console.log(this.facturedetails.Nom_fournisseur)

    });
    }

  add() {
    let fact = new FournisseurFacture();
    this.facturefournisseur.push(fact);
  }

  insertData() {

    this.facture.Etat = "non payé";
    this.facture.Timbre_fiscale = 0.6;
    this.facture.Nom_fournisseur = this.f[this.index_fournisseur].NOM
    this.facture.id_fournisseur = this.f[this.index_fournisseur].id
    this.facture.quantite_entre = 999;
/*     this.facture.date_creation=this.myDate;
 */
  let listAchat: Array<ListProduct> = new Array();
    for (var i = 0; i < this.facturefournisseur.length; i++) {
      let product = new ListProduct();

      product.quantite = this.facturefournisseur[i].quantite_entre;
      product.id_product = this.facturefournisseur[i].produit.id;
      product.Libelle = this.facturefournisseur[i].produit.name;
      product.Total_HT= this.facturefournisseur[i].Total_HT
      product.Montant_TVA= this.facturefournisseur[i].Montant_TVA
      product.Taxe_Applique= this.facturefournisseur[i].Taxe_Applique
      product.Montant_TTC= this.facturefournisseur[i].Montant_TTC

      listAchat.push(product);
    }
    this.facture.ListProduct = listAchat;
    this.factureService.insertData(this.facture).subscribe(res => {
      this.router.navigate(['rachat/achat/facturef']);
      this.toastr.success('', 'Facture Enregistrée');
    });

  }
  getproduits() {
    this.productService.getData().subscribe(res => {
      this.products = res;

    });
  }
  getfournisseur() {
    this.four.getfournisseurData().subscribe(res => {
      this.f = res;
    });
  }
  getSelecteItem(factfour: any) {
    this.productService.getProductById(factfour.id_product).subscribe(res => {
      factfour.produit = res;
    });
  }
  getq(factfour: any) {
    let qte = factfour.quantite_entre;
    factfour.Montant_TVA = ((factfour.produit.priceht * factfour.produit.TVA) / 100) * qte;
    factfour.Taxe_Applique = factfour.produit.typetaxe;
    factfour.Montant_TTC = qte * factfour.produit.pricettc;
    factfour.Total_HT = qte * factfour.produit.priceht;
    this.facture.Montant_TTC = 0;
    this.facture.Montant_TVA = 0;
    this.facture.Total_HT = 0;
    for (var i = 0; i < this.facturefournisseur.length; i++) {
      this.facture.Montant_TTC += this.facturefournisseur[i].Montant_TTC;
      this.facture.Montant_TVA += this.facturefournisseur[i].Montant_TVA;
      this.facture.Total_HT += this.facturefournisseur[i].Total_HT;
      this.Net = this.facture.Montant_TTC + this.facture.Timbre_fiscale;
    }
  }
  annuler() {
    this.router.navigate(['rachat/achat/facturef']);
    this.toastr.error('', 'Annulation');
  }
}
