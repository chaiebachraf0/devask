import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InventaireserviceService } from 'src/app/services/inventaireservice.service';
declare var export_pdf:any;
@Component({
  selector: 'app-invdetails',
  templateUrl: './invdetails.component.html',
  styleUrls: ['./invdetails.component.css']
})
export class InvdetailsComponent implements OnInit {
  id:any;
  data:any;
  inv:any;
  constructor(private invservice:InventaireserviceService,private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getInvData();
  }
  export(){
    export_pdf();
  }
  getInvData(){
    this.invservice.getFactureById(this.id).subscribe(res=>{
      this.data=res;
      this.inv=this.data;
    });
  }
  annuler(){
    this.router.navigate(['rachat/inventaire']);
  }

}
