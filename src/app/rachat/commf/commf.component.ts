import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurFacture } from 'src/app/models/facturef.model';
import { Paiement } from 'src/app/models/paiement';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { PaiementService } from 'src/app/services/paiement.service';
import { ProductService } from 'src/app/services/product.service';
import {formatDate} from '@angular/common';
import { productModel } from 'src/app/models/product.model';
import { FournisseurModel } from 'src/app/models/fournisseur.model';
import { commandeclService } from 'src/app/services/comc.service';
import { factureService } from 'src/app/services/facture.service';
@Component({
  selector: 'app-commf',
  templateUrl: './commf.component.html',
  styleUrls: ['./commf.component.css']
})
export class CommfComponent implements OnInit {
  facture = new FournisseurFacture();

  facturef:any


com:any;

  FactById: any;
  MontantFacture: any;
  values: any;
  rest: any;
  mp:any;
/*   estpayer:any;
 */


 factureSelectionner= new FournisseurFacture();




  product = new productModel();
  fournisseurs = new FournisseurModel();
  facturee = new FournisseurFacture();


  listIdProduct:any[] = new Array<any>();

  compteurProduct=1;
  index=0;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService, private facturree: FacturesService, private commandeClService: commandeclService,private productService:ProductService,private four:FournisseursService) { }
  ngOnInit(): void {
   this.getfacturefdata()



  }






 getfacturefdata(){
   this.commandeClService.getDataf().subscribe(res=>{
   this.facturef=res;

   });
}






insertData(id:any){
  console.log(id)
  this.commandeClService.getcommclByIdf(id).subscribe(res=>{
    this.com =res;
    console.log(this.com);
    this.facturree.insertData(this.com).subscribe(res => {
      this.router.navigate(['rachat/achat/facturef']);

      this.toastr.success('avec succès', 'Facture Enregistrée');

    });


  })
}

deleteCommande(id: any){
  this.commandeClService.deleteDataf(id).subscribe(res=>{
    this.toastr.success('', 'Commande supprimée :)');
     this.getfacturefdata();
  });
}



  getColor(etat:any) {
    switch (etat) {
      case 'patiellement payé':
        return 'green';
      case 'payé':
        return 'blue';
      case 'non payé':
        return 'red';
    }

    return 'red';
  }


  }
