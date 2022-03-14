import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InventaireserviceService } from 'src/app/services/inventaireservice.service';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.css']
})
export class InventaireComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private invservice:InventaireserviceService) { }
  inventaires:any;
  ngOnInit(): void {
    this.getInventaire();
  }
   getInventaire(){
     this.invservice.getData().subscribe(res => {
     this.inventaires = res
     });
   }
   deleteinv(id: any){
     this.invservice.deleteData(id).subscribe(res =>{
      this.toastr.success('', 'Inventaire supprimé :)');
      this.getInventaire();
     })
   }
}
